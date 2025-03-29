type ClownMessage = 
{
    type:string;
}
type Statistics =
{
    cpu_usage: number;
    ram_usage: number;
}
type StaticData =
{
    cpu_model: string;
    ram_usage: number; 
}
type EventPayloadMaping = 
{
    statistics: Statistics;
    getStaticData: StaticData;
    getClownMessage:ClownMessage;

}
type UnsubscribeFunction = ()=>void;
interface Window{
    electron:{
        subscribeStatistics:(callback: (statistics:Statistics)=>void)=>UnsubscribeFunction; 
        getStaticData:()=>Promise<StaticData>;
        getClownMessage:(request)=>Promise<ClownMessage>;
    }
}