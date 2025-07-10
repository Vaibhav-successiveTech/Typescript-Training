'use client';
import { useEffect, useState } from "react"

const Notification = ()=>{

    const [msg,setMsg] = useState<string>('');

    useEffect(()=>{
        setTimeout(()=>{
            const m : string = msg ? "" : 'Hello User';
            setMsg(m);
        },5000)
    },[msg])

    return (
        <h2> {msg} </h2>
    );
}

export default Notification;