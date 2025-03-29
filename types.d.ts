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
}
type UnsubscribeFunction = ()=>void;
interface Window{
    electron:{
        subscribeStatistics:(callback: (statistics:Statistics)=>void)=>UnsubscribeFunction; 
        getStaticData:()=>Promise<StaticData>;
    }
}