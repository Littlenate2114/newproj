const electron = require('electron')
const {app, BrowserWindow} = electron

app.on('ready', ()=> {
  let win = new BrowserWindow({
    width:400,
    height:400
  })
  win.loadURL('http://google.com')
})
