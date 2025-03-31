import { rejects } from "assert";
import { error } from "console";
import { stat } from "fs";
import { resolve } from "path";
import { searchVideo } from "./youz_api/searchVideo.js";

const invalid_method =
    {
        status:'FAIL',
        message:'INVALID clownTalk COMUNICATION METHODFAIL',
    }


export function processTalk(obj:any):Promise<any>
{
    return new Promise<any>(async (resolve)=>
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
                data.message = await searchVideo(obj.query,'10',obj.query_id);
                console.log(data.message);
                break;
            default:
                resolve(invalid_method);
                return;

         }
         resolve(data);
       
       
    });
}