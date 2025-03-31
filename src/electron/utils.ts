import { ipcMain, WebContents ,app,WebFrameMain} from "electron";
import { url } from "inspector";
import path, { resolve } from 'path'
import { pathToFileURL } from "url";
import { promises as fs } from 'fs';


export function isDev(): boolean
{
    return process.env.NODE_ENV === 'development';
}

export function ipcMainHandle<Key extends keyof EventPayloadMaping>(
    key: Key,
    handle: (data?: any) => Promise<EventPayloadMaping[Key]> // Ensure the handle returns a Promise
) {
    ipcMain.handle(key, async (event, data?: any) => {
        // @ts-ignore
        validateEventFrame(event.senderFrame); // Validate the event frame

        // Call the provided handle function with the received data
        return handle(data); // Pass the data to the handle function
    });
}

/*
export function ipcMainHandle<Key extends keyof EventPayloadMaping>(
    key:Key,
    handle:(data?:string|any)=>EventPayloadMaping[Key]
){            
     
    ipcMain.handle(key,(event, data?:string|any)=>{
        
        // @ts-ignore
        validateEventFrame(event.senderFrame);
        return handle();
    });
}
*/

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



 



export async function readFile(filePath: string): Promise<string> {
    try {
        const data = await fs.readFile(filePath, 'utf-8');
        return data;
    } catch (err) {
        throw new Error(`Error reading file: ${err}`);
    }
}