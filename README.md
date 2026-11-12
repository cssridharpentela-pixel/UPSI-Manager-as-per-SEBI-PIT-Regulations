# UPSI Register: Windows desktop app

Builds an installer (.exe) that puts an "UPSI Register" icon on the desktop. It runs fully offline.

## Build (once, on one Windows PC with internet)
1. Install Node.js LTS from https://nodejs.org
2. Open a terminal (Command Prompt or PowerShell) in this folder.
3. `npm install`   (downloads Electron and the Excel library; copies the library next to index.html)
4. `npm start`     (opens the app, to test it)
5. `npm run dist`  (creates `dist\UPSI Register Setup 1.0.0.exe`)

Give that one installer file to each user. They double-click it; it adds the desktop icon.

## Notes
- Data is stored on each PC, in `%APPDATA%\upsi-register`. It is more durable than a browser, but still local to that PC and Windows user. Keep using Audit & backup > Download backup.
- The installer is unsigned, so Windows SmartScreen will warn ("unknown publisher"). To sell this, buy a code-signing certificate and add it to the electron-builder `win` settings.
- To change the app's ID and name, edit `appId` and `productName` in package.json.
- Excel library: `xlsx` 0.18.5 is the last version on npm and has known security advisories (they matter only when opening untrusted files). Newer builds are at https://cdn.sheetjs.com; replace `xlsx.full.min.js` with a current one before release.
- No auto-update and no shared database: each PC has its own register.
