import { exec } from 'child_process';
import path from 'path';
import {ipcWebContentSend ,readFile} from '../utils.js'

export function searchVideo(searchInfo: string,searchNumber: string,id:string): Promise<string>
{
    return new Promise((resolve, reject) => {
        // Construct the command
        const temp_file = `${id}_search.json`;
        const command = `yt-dlp "ytsearch${searchNumber}:${searchInfo}" --dump-json --flat-playlist > ${temp_file}`;
        console.log(command);
        // Execute the command
        exec(command, async (error) => {
            /*
            if (error) {
                return reject(`Error executing command: ${error.message}`);
            }
            */

            try {
                let data = await readFile(temp_file);
                
                // Read the content of the search_id.json file
                //const filePath = path.join(__dirname,temp_file);
                //const data = await fs.readFile(filePath, 'utf-8');

                // Delete the file
                //await fs.rm(filePath);

                // Resolve the promise with the JSON string
                //ipcWebContentSend('')
                //console.log({Status:'OK',Message:data});
                resolve(data);
            } catch (fileError) {
                console.log(fileError);
               // throw (Error("Something went wrong while searching for the video"))
                //reject(`Error reading or deleting file: ${fileError.message}`);
            }
        });
    });
};

 