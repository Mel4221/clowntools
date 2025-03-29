import { useEffect, useState  } from 'react'
//import './bootstrap/css/bootstrap.css';
import ClownTools from './ClownTools/ClownTools';

function App() {
  const [count, setCount] = useState(0)
useEffect(()=>{
  // @ts-ignore
  const unsub = electron.subscribeStatistics((stats)=>{
    console.log(stats);
  })
  return unsub;
},[]);
  return (
    <>
      <ClownTools />
    </>
  )
}

export default App
