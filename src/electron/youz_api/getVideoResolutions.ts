
import { sys_call,readFile } from "../utils.js";
import { parseVideoResolutions } from "./parseVideoResolutions.js";
export async function getVideoResolutions(url:string,temp_id:string):Promise<Array<any>>
{
    const temp_file = `${temp_id}_formats.json`;
    let _ = await sys_call(`yt-dlp --dump-json --list-formats ${url} > ${temp_file}`)
    let raw_data = await readFile(temp_file);
    let data = parseVideoResolutions(raw_data);
    return data;
}