import { resolve } from "path";



export function processTalk(obj:any):Promise<any>
{
    return new Promise<any>((resolve)=>
    {
        let data = {
            Message:"OK",
            Received:obj

        }
        resolve(data);
    });
}