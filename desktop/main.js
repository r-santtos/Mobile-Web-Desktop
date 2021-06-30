const { app, BrowserWindow } = require('electron');

function createWindow() {
    // Cria uma janela de navegação.

    let win = new BrowserWindow({
        minWidth: 800,
        minHeight: 500,
        webPreferences: {
            nodeIntegration: true
        }
    });

    // Carregando a index.html do aplicativo
    win.loadFile('index.html');
}

app.whenReady().then(createWindow);