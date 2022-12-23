const { resolve } = require('path')

const { BrowserWindow, app } = require('electron')

function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      nodeIntegration: true,
    },
    autoHideMenuBar: true,
  })

  if (isDev()) {
    mainWindow.loadURL('http://127.0.0.1:5173')
  } else {
    mainWindow.loadURL(`file://${resolve(__dirname, '../../dist/index.html')}`)
  }
}

const isDev = () => process.env.NODE_ENV === 'development'

app.whenReady().then(() => {
  createWindow()
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})
