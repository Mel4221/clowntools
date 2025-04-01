import { rejects } from "assert";
import { error } from "console";
import { stat } from "fs";
import { resolve } from "path";
import { searchVideo } from "./youz_api/searchVideo.js";
import { sys_call } from "./utils.js";
import { getVideoResolutions } from "./youz_api/getVideoResolutions.js";

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
                //console.log(obj);
                data.message = await searchVideo(obj.query,'8',obj.query_id,obj?.holdit);
                //sys_call(`echo working... ${obj.query}`)
                //console.log(data.message);
                break;
            case 'get-resolution':
                data.message = await getVideoResolutions(obj.query,obj.query_id);
                //message.title
                break;    
            case 'test':
                data.message = {
                    state:'working...',
                    received:obj
                };
                break;
            default:
                resolve(invalid_method);
                return;

         }
         resolve(data);
       
       
    });
}