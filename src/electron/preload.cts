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
    getClownMessage:(data)=>ipcInvoke('getClownMessage'),
    sendData:(data:string)=>ipcInvoke('sendData',data),
    searchVideo:(searchVideo:string,searchInfo:string,id?:string)=>ipcInvoke('searchVideo'),
  }satisfies Window['electron']);


function ipcInvoke<Key extends keyof EventPayloadMaping>(
  key:Key,
  data?:string
):Promise<EventPayloadMaping[Key]>
{
  return electron.ipcRenderer.invoke(key,data);
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
