const fs = require("fs");
const path = require("path");
const { JSDOM } = require("jsdom");

const sourceDir = path.join(__dirname, "..", "svg", "original");
const targetDir = path.join(__dirname, "..", "svg", "fixed");

if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

const svgFiles = fs
  .readdirSync(sourceDir)
  .filter((file) => file.endsWith(".svg"));

for (const file of svgFiles) {
  const sourcePath = path.join(sourceDir, file);

  const parsed = path.parse(file);
  const transformedFileName = `${parsed.name}-transformed${parsed.ext}`;
  const targetPath = path.join(targetDir, transformedFileName);

  const svgContent = fs.readFileSync(sourcePath, "utf-8");

  const dom = new JSDOM(svgContent, { contentType: "image/svg+xml" });
  const document = dom.window.document;
  const svg = document.querySelector("svg");

  if (!svg) {
    console.error(`No <svg> element found in ${file}`);
    process.exit(1);
  }

  let viewBox = svg.getAttribute("viewBox");

  if (!viewBox) {
    const width = svg.getAttribute("width");
    const height = svg.getAttribute("height");

    if (width && height) {
      viewBox = `0 0 ${width} ${height}`;
      svg.setAttribute("viewBox", viewBox);
    } else {
      console.error(`No viewBox or width/height in ${file}`);
      process.exit(1);
    }
  }

  const [minX, minY, vbWidth, vbHeight] = viewBox.split(" ").map(Number);

  const expectedHeight = (vbWidth * 2) / 3;

  svg.setAttribute("viewBox", `${minX} ${minY} ${vbWidth} ${expectedHeight}`);
  svg.setAttribute("preserveAspectRatio", "xMidYMid meet");

  fs.writeFileSync(targetPath, dom.serialize());
  console.log(`Fixed aspect ratio for ${file} -> ${transformedFileName}`);
}
