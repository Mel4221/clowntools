import path, { resolve } from 'path';
import fs from 'fs';
import { parseVideoSearch } from './parseVideoSearch.js';
import 
{
    ipcWebContentSend ,
    readFile,sys_call ,
    deleteFile
} from '../utils.js'

 

  
export function searchVideo(searchInfo: string,searchNumber: string,id:string,holdit?:boolean): Promise<any>
{
    try{
        return new Promise(async(resolve)=>{
        
        const temp_file = `${id}_search.json`;

        if(!fs.existsSync(temp_file)){
            console.log("Calling yt-dlp");
            const command = `yt-dlp "ytsearch${searchNumber}:${searchInfo}" --dump-json --flat-playlist > ${temp_file}`;        
            await sys_call(command);
        }

        //codatansole.log({temp_file,searchInfo,command});

        let raw_data = await readFile(temp_file);
        //console.log({"raw_data:":raw_data})
        //console.log({raw:raw_data});
        let data = parseVideoSearch(raw_data);
        //console.log({"parsed_video_search":resolve(data)})
        //console.log({data:data});
        if(!holdit) await deleteFile(temp_file);
        resolve(data);
    });
    }catch(error){
        throw error;
    }
};

 