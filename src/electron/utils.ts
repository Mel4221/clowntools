import { ipcMain, WebContents ,app,WebFrameMain} from "electron";
import { url } from "inspector";
import path from 'path'
import { pathToFileURL } from "url";


export function isDev(): boolean
{
    return process.env.NODE_ENV === 'development';
}

export function ipcMainHandle<Key extends keyof EventPayloadMaping>(
    key:Key,
    handle:()=>EventPayloadMaping[Key]
){
    ipcMain.handle(key,(event)=>{
        // @ts-ignore
        validateEventFrame(event.senderFrame);
        return handle();
    });
}

export function ipcWebContentSend<Key extends keyof EventPayloadMaping>(
    key:Key,
    webContents: WebContents,
    payload:EventPayloadMaping[Key]
){
    webContents.send(key,payload);
}


export function getUIPath()
{
    return path.join(app.getAppPath(),'/dist-react/index.html');
}

export function validateEventFrame(frame: WebFrameMain)
{
    if(isDev()&& new URL(frame.url).host ==='localhost:5123')
    {
        return;
    }
    if(frame.url !== pathToFileURL(getUIPath()).toString())
    {
        throw new Error('Something Malicius is happening');
    }
}

export function getAssetPath(){
    return path.join(app.getAppPath(),isDev()?'.':'...','/src/assets');
}

export function clownMessage():ClownMessage
{
    let message:ClownMessage = {
        type:getAssetPath()
    };

    return message;
}