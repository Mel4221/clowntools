import osUtils from 'os-utils'
import os from 'os'
import fs, { stat } from 'fs';
import { BrowserWindow } from 'electron';
import {ipcWebContentSend}from './utils.js'
const POOL_INTERVAL = 500; 
export function poolResources(mainWindow: BrowserWindow)
{
    /*
    setInterval(async ()=>{
    const cpu_usage = await getCpuUsage();
    const ram_usage = getRamUsage();
    const total_storage = getStorage(); 
    ipcWebContentSend("statistics",mainWindow.webContents,{
        cpu_usage,
        ram_usage,
     });
        console.log({cpu_usage,ram_usage});
    },POOL_INTERVAL);
    */
}


export function getStaticData()
{
    const total_storage = getStorage().Total; 
    const cpu_model = os.cpus()[0].model;// osgetCpuUsage(); 
    const ram_usage = getRamUsage(); 
    return{
        cpu_model,
        ram_usage
    }
}
  
function getCpuUsage(): Promise<number>
{
   return new Promise((resolve)=>{osUtils.cpuUsage(resolve)});
}
function getRamUsage()
{
    return osUtils.freememPercentage();
}

function getStorage()
{
    const stats = fs.statfsSync(process.platform==='win32'?'c://':'/')
    const total  = stats.bsize*stats.blocks;
    const free = stats.bsize * stats.bfree; 
    return {
        Total: Math.floor(total/1_000_000_000),
        Usage: 1 - free / total
    }
}
