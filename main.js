const { app, BrowserWindow } = require('electron');

function createWindow() {
    const win = new BrowserWindow({
        width: 400,
        height: 670,
        resizable: false,

        webPreferences: {
            nodeIntegration: true,
        },
    });

    win.setFullScreen(false);

    win.loadFile('index.html');

}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit();
});