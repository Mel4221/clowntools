import path, { resolve } from 'path';
import { parseVideoSearch } from './parseVideoSearch.js';
import 
{
    ipcWebContentSend ,
    readFile,sys_call ,
    deleteFile
} from '../utils.js'

 

  
export function searchVideo(searchInfo: string,searchNumber: string,id:string): Promise<any>
{
    try{
        return new Promise(async(resolve)=>{
        const temp_file = `${id}_search.json`;

        const command = `yt-dlp "ytsearch${searchNumber}:${searchInfo}" --dump-json --flat-playlist > ${temp_file}`;        

        await sys_call(command);

        //console.log({temp_file,searchInfo,command});

        let raw_data = await readFile(temp_file);
        //console.log({raw:raw_data});
        let data = parseVideoSearch(raw_data);
        //console.log({data:data});
        await deleteFile(temp_file);
        resolve(data);
    });
    }catch(error){
        throw error;
    }
};

 