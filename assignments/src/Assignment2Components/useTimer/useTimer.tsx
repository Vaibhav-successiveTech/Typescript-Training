'use client';
import { useEffect, useState } from "react"

const useTimer = ()=>{
    const [time,setTime] = useState<number>(0);
    const [pause,setPause] = useState<boolean>(true);
    const [int,setInt] = useState<any>(null);


    useEffect(()=>{
        let i :any = null;
        if(!pause){
            i = setInterval(()=>{
                setTime(prev=>prev>0?prev-1:0);
            },1000);
            setInt(i);
        }
        if(pause)clearInterval(int);
    },[pause]);

    return {time,setTime,setPause};
}

export default useTimer;