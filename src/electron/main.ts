import { app, BrowserView, BrowserWindow, ipcMain, Tray, webContents } from 'electron';
import getPreload from './getPreload.js';
import path, { resolve } from 'path';
import { isDev, ipcMainHandle, getUIPath, getAssetPath, clownMessage, ipcWebContentSend } from './utils.js';
import { poolResources } from './resourcesManager.js';
import { getStaticData } from './resourcesManager.js'
import { createTray } from './createTray.js';
import { createMenu } from './menu.js';
import { callProgram } from './youz_api/youz.js'
import { searchVideo } from './youz_api/searchVideo.js';

app.on('ready', () => {
    const mainWindow = new BrowserWindow({
        width: 1400,
        height: 1200,
        backgroundColor: 'black',
        webPreferences: {
            preload: getPreload()
        }
    });
    if (isDev()) {
        mainWindow.loadURL("http://localhost:5123/");
    } else {
        mainWindow.loadFile(getUIPath());
    }
    /*
    ipcMain.handle('exchange', (event, data) => {

        console.log("working...", { Type: "Working...", Request: data });
        mainWindow.webContents.send('exchange', { Type: "Working...", Request: data });
        return resolve("Working...");
        //return {Type:"Working...",Request:data};
        //callProgram("echo",data);
        // Add your logic here
    });
    */

    ipcMain.handle('pass', (event, data:any) => {
        console.log(data);
       return new Promise((resolve)=>{
            resolve({Test:'Received!!!!'});
       });
    });
    ipcMain.handle('sendData', (event, data: string) => {
        callProgram("echo", data);
        // Add your logic here
    });
    ipcMain.handle('sendObj', (event, data: any) => {
        console.log(data);
        callProgram("echo", data);
        //callProgram("echo",data);
        // Add your logic here
    });


    ipcMain.handle('searchVideo', () => {
        mainWindow.webContents.send('searchVideo', "testing this bullshit");
        return resolve("");

    });

    //mainWindow.webContents.send("exchange",{Test:"Working..."});
    
    //poolResources(mainWindow);
    ipcMainHandle('getStaticData', () => {
        return getStaticData();
    });
    ipcMainHandle('getClownMessage', (data) => {
        //console.log(data);
        console.log(data);
        return clownMessage();
    });



    createTray(mainWindow);
    handleCloseEvents(mainWindow);
    createMenu(mainWindow);
});


function handleCloseEvents(mainWindow: BrowserWindow) {

    return;
    let willClose = false;
    if (willClose) {
        return;
    }
    mainWindow.on('close', (e) => {
        e.preventDefault();
        mainWindow.hide();
        if (app.dock) {
            app.dock.hide();
        }
    });
    app.on('before-quit', () => {
        willClose = true;
    });
    mainWindow.on('show', () => {
        willClose = false;
    });
}