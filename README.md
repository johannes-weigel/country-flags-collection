# Country Flags Collection

This repository provides a curated subset of country flags based on the [hampusborgos/country-flags](https://github.com/hampusborgos/country-flags) project.

The focus is on countries that are either:

- part of the **IOC (International Olympic Committee)**, and
- commonly associated with **Europe in an international sporting context** (e.g. European Championships).

The flags are prepared in line with common **IOC protocol conventions**, especially in terms of visual presentation and naming. The collection is not officially affiliated with the IOC or any sports organization.

## Contents

- **Formats**:  
  Flags are available in both **SVG** (vector) and **PNG** (bitmap) formats.

- **Variants**:  
  Each flag may exist in three variants:

  - **Official**: Based on the official national design, using the country's standard proportions.
  - **Standardized Landscape** (horizontal) and **Standardized Portrait** (vertical): Adjusted to a **uniform aspect ratio** (3:2) for consistent display across different flags.

- **Metadata**:  
  A JSON file (`metadata.json`) provides metadata for each country. Countries are identified by their **IOC codes** (International Olympic Committee country codes). It is parsed from the file [National Olympic Committees](https://stillmed.olympic.org/media/Document%20Library/OlympicOrg/Documents/National-Olympic-Committees/List-of-National-Olympic-Committees-in-IOC-Protocol-Order.pdf) provided by the IOC (from 05/2019) with updated names for the European Countries according to the Flags Manual for the Olympic and Paralymic Games Paris 2024.

- **Naming Convention**:  
  Files are named using the country code, style, and orientation, for example:
  - `GER_official.svg`: As provided by the source-project
  - `GER_landscape.svg`: Transformed to 3:2 ratio (horizontally)
  - `GER_portrait.svg`: Transformed to 3:2 ratio and rotated (vertically)

## Usage

The flags and metadata can be used in projects that require visual or contextual representations of countries, such as:

- Applications
- Websites
- Protocol documentation
- Event materials (esp. sport-related)

Please note:

- The selection of countries is intentionally limited and tailored to European participation in international sports.
- Some flags may exist only in selected styles or orientations.
- Flags and Metadata is provided without guarantee of accuracy.

## License

The contents of this repository are based on the public domain and open source assets of [hampusborgos/country-flags](https://github.com/hampusborgos/country-flags).  
This repository itself is provided **without any guarantee** of completeness, accuracy, or official validation.  
If you intend to use the flags or metadata for official or commercial purposes, please verify the corresponding usage rights separately.
