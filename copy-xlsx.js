// Copies the Excel library next to index.html so the app works fully offline.
const fs = require("fs");
fs.copyFileSync("node_modules/xlsx/dist/xlsx.full.min.js", "xlsx.full.min.js");
console.log("Copied xlsx.full.min.js");
