import electron = require('electron');

electron.contextBridge.exposeInMainWorld('electron',
{
    subscribeStatistics:(callback)=>
    {
        //electron.ipcRenderer.on('statistics',(event,data)=>{
        return  ipcOn('statistics',(data)=>{
          callback(data);
        });
    },
    getStaticData:()=>ipcInvoke('getStaticData'),//electron.ipcRenderer.invoke('getStaticData'),
    getClownMessage:()=>ipcInvoke('getClownMessage')
  }satisfies Window['electron']);


function ipcInvoke<Key extends keyof EventPayloadMaping>(
  key:Key
):Promise<EventPayloadMaping[Key]>
{
  return electron.ipcRenderer.invoke(key);
}

function ipcOn<Key extends keyof EventPayloadMaping>(
  key:Key,
  callback:(payload:EventPayloadMaping[Key])=>void
){
  const cb = (_:Electron.IpcRendererEvent,payload:any)=>callback(payload);
  electron.ipcRenderer.on(key,cb)
  return ()=>electron.ipcRenderer.off(key,cb);
  //electron.ipcRenderer.on(key,(data,payload)=>callback(payload))
}
