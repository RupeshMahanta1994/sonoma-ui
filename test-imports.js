// Test script to verify different import methods work
// This would normally be used by consumers of the package

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log("🔍 Verifying sonoma-ui package structure...\n");

// Check main entry point files exist
const distPath = path.join(__dirname, "dist");
const expectedFiles = [
  "index.d.ts",
  "index.es.js",
  "index.cjs.js",
  "button.d.ts",
  "button.es.js",
  "button.cjs.js",
  "card.d.ts",
  "card.es.js",
  "card.cjs.js",
];

console.log("📁 Checking required distribution files:");
expectedFiles.forEach((file) => {
  const filePath = path.join(distPath, file);
  const exists = fs.existsSync(filePath);
  console.log(`  ${exists ? "✅" : "❌"} ${file}`);
});

// Check component type files exist
const componentPaths = [
  "components/Button/Button.d.ts",
  "components/Button/index.d.ts",
  "components/Card/Card.d.ts",
  "components/Card/index.d.ts",
];

console.log("\n📄 Checking component type files:");
componentPaths.forEach((file) => {
  const filePath = path.join(distPath, file);
  const exists = fs.existsSync(filePath);
  console.log(`  ${exists ? "✅" : "❌"} ${file}`);
});

// Check package.json exports configuration
const packageJsonContent = fs.readFileSync("./package.json", "utf8");
const packageJson = JSON.parse(packageJsonContent);
console.log("\n📦 Package.json exports configuration:");
console.log(JSON.stringify(packageJson.exports, null, 2));

console.log("\n🎯 Expected usage patterns:");
console.log("  // Full library import:");
console.log('  import { Button, Card } from "sonoma-ui";');
console.log("\n  // Selective imports:");
console.log('  import { Button } from "sonoma-ui/button";');
console.log('  import { Card } from "sonoma-ui/card";');

console.log("\n✨ Package verification complete!");
