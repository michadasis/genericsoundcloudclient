const {app, BrowserWindow} = require('electron');
const contextMenu = require('electron-context-menu');
const {url} = require('url');
const path = require('path');

let win;

contextMenu({
	showCopyLink: true//,
   // showInspectElement: false
});

function createWindow() {
    win = new BrowserWindow({
        webPreferences: {
			showCopyLink: true,
            //showInspectElement: false
		},
    width: 1280,
    height: 720,
    icon: './icons/soundcloud.ico',
	backgroundColor: '#1c1c1c',
    title: 'Soundcloud'
});
win.removeMenu()
win.loadURL('https://soundcloud.com/')
win.on('page-title-updated', (evt) => {
  evt.preventDefault();
});

win.on('closed', function(){
    win = null;
});

}


app.on('ready', createWindow)

app.on('window-all-closed', function(){
    if(process.platform != 'darwin'){
        app.quit();
    }
})

app.on('activate', function(){
    if(win === null) {
        createWindow();
    }
})