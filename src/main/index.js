const eletron = require('electron');
const path = require('path')
const { app, Tray, BrowserWindow, nativeImage } = eletron;
let tray = null;
let mainWindow;

function createMainWindow() {
  if(mainWindow) {
    return mainWindow.hide()
  }
  const { width: widthScreen } = eletron.screen.getPrimaryDisplay().workAreaSize
  const size = {
    width: 800,
    height: 600
  };
  const window = new BrowserWindow({
    titleBarStyle: 'hidden',
    title: "Web WhatsApp View",
    autoHideMenuBar:true,
    darkTheme:true,
    resizable: false,
    minimizable: false,
    ...size,
    x: (widthScreen * 2) - size.width - 40,
    y: 0
  })
  window.loadURL("https://web.whatsapp.com");

  window.on('minimize', () => {
    window.hide();
  })

  window.on('blur', () => {
    window.hide();
  })

  window.on('close', e => {
    window.hide();
    return e.preventDefault();
  })

  return window
}


app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('ready', () => {
  const icon = nativeImage.createFromPath(path.join(__dirname, '..', 'assets', 'iconTemplate.png'))
  tray = new Tray(icon)
  tray.on('click',  () => {
    if(mainWindow){
      return mainWindow.show()
    }
    mainWindow = createMainWindow()
  })
})