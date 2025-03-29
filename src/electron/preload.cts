import electron = require('electron');

/*
// ======================
// TYPE DEFINITIONS
// ======================

// Define the shape of the statistics data
interface StatisticsData {
    status: string;
    data: {
      clicks: number;
      // You can add more fields here as needed
    };
  }
  
  // Define the API interface
  interface ElectronAPI {
    subscribeStatistics: (callback: (statistic: StatisticsData) => void) => void;
    getStaticData: () => string;
  }
  
  // ======================
  // API IMPLEMENTATIONS
  // ======================
  
  /**
   * Handles statistics subscription
   * @param callback - Function to call with statistics data
   */
  /*
  function handleSubscribeStatistics(callback: (statistic: StatisticsData) => void): void {
    console.log('[Preload] subscribeStatistics called');
    
    // Simulate sending statistics data
    const mockStatistics: StatisticsData = {
      status: 'working',
      data: {
        clicks: 42
      }
    };
    
    callback(mockStatistics);
  }
    */
  
  /**
   * Gets static data from Electron
   * @returns A string with status message
   */
  /*
  function handleGetStaticData(): string {
    const response = 'Electron API is working!';
    console.log('[Preload] getStaticData called:', response);
    return response;
  }
  */
  // ======================
  // API EXPOSURE
  // ======================
  // Create the API object
  /*
  const electronAPI: ElectronAPI = {
    subscribeStatistics: handleSubscribeStatistics,
    getStaticData: handleGetStaticData
  };
  
  // Expose the API to the renderer process
  electron.contextBridge.exposeInMainWorld('electron', electronAPI);
*/

  /*
//packed version

    interface ElectronAPI {
        subscribeStatistics: (callback: (statistic: any) => void) => void;
        getStaticData: () => string; // Now returns a string
    }
    
    electron.contextBridge.exposeInMainWorld('electron', {
        subscribeStatistics: (callback) => {
        console.log('[Preload] subscribeStatistics called');
        callback({ status: 'working', data: { clicks: 42 } });
        },
        getStaticData: () => {
        const response = 'Electron API is working!';
        console.log('[Preload] getStaticData called:', response);
        return response;
        }
    } as ElectronAPI);

*/


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

/*
interface ElectronAPI {
  subscribeStatistics: (callback: (statistic: any) => void) => void;
  getStaticData: () => void;
}

electron.contextBridge.exposeInMainWorld('electron', {
  subscribeStatistics: (callback) => {
    electron.ipcRenderer.on('statistics',(event,data)=>{
        callback(data);
    });
    callback({});
  },
  getStaticData: () => electron.ipcRenderer.invoke('getStaticData'),
} as ElectronAPI);

*/