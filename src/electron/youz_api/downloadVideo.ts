import  { spawn } from 'child_process';
import fs from  'fs';
import { getDownloadProgress } from './getDownloadProgress.js';


export function downloadVideo(url:string):void
{
    const ytdlp = spawn('yt-dlp', [
        url,
        '--newline',        // Ensure clean, line-by-line output
        '--progress'        // Enable progress updates (default)
      ]);

    // Create a write stream to log output (optional)
    const logStream = fs.createWriteStream('download_log.txt', { flags: 'a' });

// Read stdout/stderr in real time
ytdlp.stdout.on('data', (data) => {
  const output = data.toString();
  if(output){
    //console.log(output);
    let meta = getDownloadProgress(output);  
    //console.log(meta);
    //console.log('[yt-dlp]', output);  // Print to console
    logStream.write(output);   
  }
});

ytdlp.stderr.on('data', (data) => {
  console.error('[yt-dlp ERROR]', data.toString());
});

// Handle process exit
ytdlp.on('close', (code) => {
  console.log(`Download finished with code ${code}`);
  logStream.end();
});

}