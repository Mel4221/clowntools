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
    /*
    statistics: Statistics;
    getStaticData: StaticData;
    getClownMessage:ClownMessage;
    sendData:(data:string)=>void;
    searchVideo:string;
    sendObj:(obj:any)=>void;
    exchange:Exchange;
    */
    clownTalk:(obj:any)=>any;

}
type UnsubscribeFunction = ()=>void;
interface Window{
    electron:{
        /// subscribeStatistics:(callback: (statistics:Statistics)=>void)=>UnsubscribeFunction; 
        
        // getStaticData:()=>Promise<StaticData>;    
        // Costum types for the clowntools so they don't belong
        // to the template  
        // getClownMessage:(request)=>Promise<ClownMessage>;

        // sendData:(data)=>void;
        // sendObj:(obj)=>void;

        // exchange:(callback: (statistics:Exchange)=>void)=>UnsubscribeFunction; 

        clownTalk:(obj:any)=>any;
      

    }
}