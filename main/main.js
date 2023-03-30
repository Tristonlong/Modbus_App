const { app, BrowserWindow, Menu } = require('electron')
const { join } = require('path')

process.env.DIST = join(__dirname, '../../')
const indexHtml = join(process.env.DIST, 'dist/index.html')

let win
const createWindow = () => {
  win = new BrowserWindow({
    width: 1280,
    height: 720,
    resizable: false,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
  })
  if (app.isPackaged) {
    win.loadFile(indexHtml)
  } else {
    win.loadURL('http://localhost:5173/')
  }
}
app.whenReady().then(() => {
  createWindow()
  // windows下 打包后 隐藏菜单栏
  app.isPackaged && Menu.setApplicationMenu(null)
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})
