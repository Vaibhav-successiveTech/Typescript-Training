'use client';
import { TextField, Button } from "@mui/material";

import { ChangeEvent, useEffect, useState } from "react";

const SlideShow = ()=>{
    const arr : string[] = ['a','b','c','d','e','f','g','h'];
    const [idx,setIdx] = useState<number>(0);
    const [time,setTime] = useState<number>(1);
    const [pause,setPause] = useState<boolean>(false);


    useEffect(()=>{

        let i : any = null;
        if(!pause){
            i = setTimeout(()=>{
                setIdx(prev=>(prev+1)%arr.length)
            },time*1000);
        }

        return ()=>clearInterval(i);

    },[time,idx,pause])

    return (
        <>
            <h2> {arr[idx]} </h2>
            <TextField type="number" value = {time} onChange={(e :ChangeEvent<HTMLInputElement>)=>{
                const num = parseInt(e.currentTarget.value);
                if(!isNaN || num > 0){
                    setTime(num);
                }else{
                    setTime(1);
                }
            }}/>
            <br/>
            <br/>
            <Button variant="outlined" onClick={()=>{
                setPause(false);
            }}> Play </Button> <Button variant="outlined" onClick={()=>setPause(true)}> Pause </Button>
        </>
    );
}

export default SlideShow;