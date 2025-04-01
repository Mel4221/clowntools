import { exec } from 'child_process';
import path from 'path';
import {ipcWebContentSend ,readFile} from '../utils.js'
import { parseVideoSearch } from './parseVideoSearch.js';

export async function searchVideo(searchInfo: string,searchNumber: string,id:string): Promise<any>
{
    try{
        const temp_file = `${id}_search.json`;
        const command = `yt-dlp "ytsearch${searchNumber}:${searchInfo}" --dump-json --flat-playlist > ${temp_file}`;        
        let raw_data = await readFile(temp_file);
        let data = parseVideoSearch(raw_data);
        return data;
    }catch(error){
        throw error;
    }
};

 