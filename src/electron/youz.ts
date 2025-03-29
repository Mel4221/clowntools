import os from 'os'
import { exec } from 'child_process';


export function callProgram(program:string,args: string):void
{

    exec(`${program} ${args}`,(error: Error | null, stdout: string, stderr: string) => {
      if (error) {
        console.error(`Error: ${error.message}`);
        return;
      }
      if (stderr) {
        console.error(`stderr: ${stderr}`);
        return;
      }
      console.log(`stdout: ${stdout}`); // Output: stdout: working
    });
}