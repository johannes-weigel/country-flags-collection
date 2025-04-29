const fs = require("fs");
const path = require("path");

const metadataPath = path.join(__dirname, "..", "metadata.json");
const sourceDir = path.join(__dirname, "..", "src", "svg");
const targetDir = path.join(__dirname, "..", "svg");

const metadata = JSON.parse(fs.readFileSync(metadataPath, "utf-8"));
if (!metadata.countries || !Array.isArray(metadata.countries)) {
  console.error('metadata.json does not contain a valid "countries" array.');
  process.exit(1);
}

for (const country of metadata.countries) {
  const alpha2 = country.iso3166_1_alpha_2;
  const noc = country.noc;

  if (!alpha2) {
    continue;
  }

  if (!noc) {
    console.error(`Missing NOC code for country with alpha2 code: ${alpha2}`);
    process.exit(1);
  }

  const sourceFile = path.join(sourceDir, `${alpha2.toLowerCase()}.svg`);
  const targetFile = path.join(targetDir, `${noc}_official.svg`);

  if (!fs.existsSync(sourceFile)) {
    console.error(`Source file not found: ${sourceFile}`);
    process.exit(1);
  }

  fs.copyFileSync(sourceFile, targetFile);
  console.log(`Copied ${sourceFile} -> ${targetFile}`);
}
