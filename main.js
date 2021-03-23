/*
 * @Autor: 欧阳改
 * @Date: 2021-03-23 14:27:48
 * @LastEditors: 欧阳改
 * @LastEditTime: 2021-03-23 19:19:29
 * @Description: 唧唧复唧唧
 */
const { app, BrowserWindow } = require('electron')
const path = require('path')
require('dotenv').config()

function createWindow () {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    },
    webContents: {
      openDevTools: true   //不想要控制台直接把这段删除
    },
  })
  win.webContents.openDevTools()

  if(process.env.NODE_ENV === 'development'){
    win.loadURL('http://localhost:3000')
  } else {
    win.loadFile(path.join(__dirname, 'dist', 'index.html'))
  }
}

app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})