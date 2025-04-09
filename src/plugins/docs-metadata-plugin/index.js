const fs = require("fs");
const path = require("path");

// Regex for replacing the label name
function slugify(str) {
  return str
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-");
}

// Scan the docs folder and then generate the label names and description based inside of the docs folder.
function scanDocs(dir, baseUrl = "/docs") {
  const result = [];

  const items = fs.readdirSync(dir, { withFileTypes: true });
  for (const item of items) {
    const fullPath = path.join(dir, item.name);

    if (item.isDirectory()) {
      const categoryPath = path.join(fullPath, "_category_.json");

      if (fs.existsSync(categoryPath)) {
        const json = JSON.parse(fs.readFileSync(categoryPath, "utf-8"));

        const label = json.label || item.name;
        const slug = slugify(label);

        result.push({
          title: label,
          description: json.link?.description || "",
          link: `${baseUrl}/category/${slug}`,
        });
      }

      result.push(...scanDocs(fullPath, `${baseUrl}/${item.name}`));
    }
  }

  return result;
}

module.exports = function docsMetadataPlugin() {
  return {
    name: "docs-metadata-plugin",
    async loadContent() {
      const docsDir = path.join(__dirname, "../../../docs");
      const metadata = scanDocs(docsDir);
      return metadata;
    },
    async contentLoaded({ content, actions }) {
      const { setGlobalData } = actions;
      setGlobalData(content);
    },
  };
};
