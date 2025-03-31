import { rejects } from "assert";
import { error } from "console";
import { stat } from "fs";
import { resolve } from "path";

const invalid_method =
    {
        status:'FAIL',
        message:'INVALID clownTalk COMUNICATION METHODFAIL',
    }


export function processTalk(obj:any):Promise<any>
{
    return new Promise<any>((resolve)=>
    {
        let data = 
        {
            status:'OK',
            message:{}
        }
         if(typeof obj !== 'object' || obj === null)
         {
                  resolve(invalid_method);
            return;
         }
         
         switch(obj.type)
         {
            case 'search-video':
                
            default:
                resolve(invalid_method);
                return;

         }
        
         resolve(data);
       
       
    });
}