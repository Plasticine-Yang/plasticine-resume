import { resolve } from 'path'

import { app, BrowserWindow } from 'electron'

function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
    autoHideMenuBar: true,
  })

  if (isDev()) {
    mainWindow.loadURL('http://127.0.0.1:5173')
  } else {
    mainWindow.loadURL(`file://${resolve(__dirname, '../../dist/index.html')}`)
  }

  // 设置窗口标题
  mainWindow.webContents.on('did-finish-load', () => {
    mainWindow.setTitle('Plasticine Counter')
  })
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
