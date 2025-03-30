import { exec } from 'child_process';
import { promises as fs } from 'fs';
import path from 'path';
import {ipcWebContentSend } from '../utils.js'

export function searchVideo(searchNumber: string, searchInfo: string,id?:string): Promise<string>
{
    return new Promise((resolve, reject) => {
        // Construct the command
        const command = `yt-dlp "ytsearch${searchNumber}:${searchInfo}" --dump-json --flat-playlist > search_id.json`;

        // Execute the command
        exec(command, async (error) => {
            if (error) {
                return reject(`Error executing command: ${error.message}`);
            }

            try {
                // Read the content of the search_id.json file
                const filePath = path.join(__dirname,`${id}_search.json`);
                const data = await fs.readFile(filePath, 'utf-8');

                // Delete the file
                await fs.rm(filePath);

                // Resolve the promise with the JSON string
                //ipcWebContentSend('')
                resolve(data);
            } catch (fileError) {
                throw (Error("Something went wrong while searching for the video"))
                //reject(`Error reading or deleting file: ${fileError.message}`);
            }
        });
    });
};

 