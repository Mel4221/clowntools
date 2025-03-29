import {app,BrowserView, BrowserWindow, ipcMain,Tray} from 'electron';
import getPreload from './getPreload.js';
import path from 'path';
import { isDev ,ipcMainHandle, getUIPath, getAssetPath,clownMessage } from './utils.js';
import { poolResources } from './resourcesManager.js';
import {getStaticData} from './resourcesManager.js'
import { createTray } from './createTray.js';
import { createMenu } from './menu.js';

app.on('ready',()=>{
    const mainWindow = new BrowserWindow({
        width: 1400,
        height: 1200,
        webPreferences:{
            preload:getPreload()
        }
    });
    if(isDev()){
        mainWindow.loadURL("http://localhost:5123/");
    }else{
        mainWindow.loadFile(getUIPath());
    }
    //poolResources(mainWindow);
    ipcMainHandle('getStaticData',()=> {
        return getStaticData();
    });
    ipcMainHandle('getClownMessage',()=>{
        return clownMessage();
    });
    createTray(mainWindow);
    handleCloseEvents(mainWindow);
    createMenu(mainWindow);
}); 


function handleCloseEvents(mainWindow: BrowserWindow)
{

    return;
    let willClose = false;
    if(willClose){
        return;
    }
    mainWindow.on('close',(e)=>{
        e.preventDefault();
        mainWindow.hide();
        if(app.dock){
            app.dock.hide();
        }
    });
    app.on('before-quit',()=>{
        willClose = true; 
    });
    mainWindow.on('show',()=>{
        willClose = false; 
    });
}