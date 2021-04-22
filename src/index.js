const electron = require('electron')
const path = require('path')
const { app, Tray, BrowserWindow, nativeImage, Menu, globalShortcut } = electron
let tray = null
let mainWindow

function createMainWindow() {
  if (mainWindow) {
    return mainWindow.hide()
  }
  const { width: widthScreen, height: heightScreen } = electron.screen.getPrimaryDisplay().workAreaSize
  const size = {
    width: 1000,
    height: 600
  }

  const userAgent = 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/76.0.3809.131 Safari/537.36'

  const window = new BrowserWindow({
    titleBarStyle: 'hidden',
    title: 'Doxa Code Messeger',
    autoHideMenuBar: true,
    darkTheme: true,
    resizable: false,
    minimizable: false,
    icon: path.join(__dirname, 'assets', 'image', 'icon.png'),
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    },
    ...size,
    x: widthScreen / 2 - size.width / 2,
    y: heightScreen / 2 - size.height / 2
  })

  window.on('blur', () => {
    window.hide()
  })

  window.on('close', e => {
    e.preventDefault()
    window.hide()
  })

  window.loadURL('https://web.whatsapp.com', { userAgent })

  return window
}

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('ready', () => {
  registerShortCut()
  const icon = nativeImage.createFromPath(path.join(__dirname, 'assets', 'image', 'iconTemplate.png'))
  const menu = Menu.buildFromTemplate([
    {
      label: 'Sair',
      click() {
        if (mainWindow) {
          mainWindow.destroy()
        }
        app.quit()
      }
    }
  ])
  tray = new Tray(icon)
  tray.setContextMenu(menu)
  tray.on('click', () => run())
})

function run() {
  if (mainWindow) {
    if (mainWindow.isVisible()) {
      return mainWindow.hide()
    }
    return mainWindow.show()
  }
  mainWindow = createMainWindow()
}

function registerShortCut() {
  globalShortcut.register('SHIFT + F2', () => {
    run()
  })
}
