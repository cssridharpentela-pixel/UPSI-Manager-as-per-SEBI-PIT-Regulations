const { app, BrowserWindow, Menu } = require("electron");
const path = require("path");
if (!app.requestSingleInstanceLock()) app.quit();
let win;
function createWindow() {
  Menu.setApplicationMenu(null);
  win = new BrowserWindow({ width: 1280, height: 860, title: "UPSI Register",
    webPreferences: { contextIsolation: true, nodeIntegration: false, sandbox: true } });
  win.loadFile(path.join(__dirname, "index.html"));
  win.webContents.setWindowOpenHandler(() => ({ action: "deny" }));
  win.webContents.on("will-navigate", (e) => e.preventDefault());
}
app.on("second-instance", () => { if (win) { if (win.isMinimized()) win.restore(); win.focus(); } });
app.whenReady().then(createWindow);
app.on("window-all-closed", () => app.quit());
