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
type Exchange = 
{
    type:string;
    message:any;
}
type EventPayloadMaping = 
{
    statistics: Statistics;
    getStaticData: StaticData;
    getClownMessage:ClownMessage;
    sendData:(data:string)=>void;
    searchVideo:string;
    sendObj:(obj:any)=>void;
    exchange:Exchange;
    pass:(obj:any)=>any;

}
type UnsubscribeFunction = ()=>void;
interface Window{
    electron:{
        subscribeStatistics:(callback: (statistics:Statistics)=>void)=>UnsubscribeFunction; 
        
        getStaticData:()=>Promise<StaticData>;    
        // Costum types for the clowntools so they don't belong
        // to the template  
        getClownMessage:(request)=>Promise<ClownMessage>;

        sendData:(data)=>void;
        sendObj:(obj)=>void;

        exchange:(callback: (statistics:Exchange)=>void)=>UnsubscribeFunction; 

        pass:(obj:any)=>any;

        searchVideo: (
            searchNumber: string, 
            searchInfo: string, 
            id?: string, 
            callback: (statistics: Statistics) => void
        ) => Promise<string> | UnsubscribeFunction;


    }
}