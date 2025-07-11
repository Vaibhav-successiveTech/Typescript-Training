'use client';
import { useEffect , useState } from "react"

const GiveTime = ()=>{
    const date = new Date();
    return date.toLocaleTimeString();
}

const Clock = ()=>{

    const [time,setTime] = useState<string>(GiveTime());
    const [int,setInt] = useState<any>(null);

    useEffect(()=>{
        let i : any = setTimeout(()=>{
            setTime(GiveTime());
        },1000);

        setInt(i);
        return ()=>clearInterval(int);

    },[time])

    return (
        <h2> {time} </h2>
    );

}

export default Clock;