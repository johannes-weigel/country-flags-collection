const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const svgDir = path.join(__dirname, "..", "svg");
const pngDir = path.join(__dirname, "..", "png");

const sizes = [512, 1024, 2048, 4096];

if (!fs.existsSync(pngDir)) {
  fs.mkdirSync(pngDir, { recursive: true });
}

const svgFiles = fs.readdirSync(svgDir).filter((f) => f.endsWith(".svg"));

svgFiles.forEach(async (file) => {
  const name = path.parse(file).name;
  const svgPath = path.join(svgDir, file);

  for (const width of sizes) {
    const targetFile = path.join(pngDir, `${name}-${width}.png`);
    const svgBuffer = fs.readFileSync(svgPath);

    try {
      await sharp(svgBuffer).resize({ width }).png().toFile(targetFile);
      console.log(`Generated ${targetFile}`);
    } catch (err) {
      console.error(`Error rendering ${file} at width ${width}:`, err);
      process.exit(1);
    }
  }
});
