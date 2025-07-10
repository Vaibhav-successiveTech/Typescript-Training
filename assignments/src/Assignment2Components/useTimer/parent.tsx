'use client';
import { ChangeEvent, useState } from "react"
import useTimer from "./useTimer"
import { TextField, Button } from "@mui/material";

const ParentUseTimer = ()=>{
    const [input,setInput] = useState<number>(0);
    const {time,setTime,setPause} = useTimer();

    return (
        <>
            <TextField type="number" value={input} onChange={(e:ChangeEvent<HTMLInputElement>)=>{
                const num = parseInt(e.currentTarget.value);
                if(!isNaN(num))setInput(num) , setTime(num);
                else setInput(0), setTime(0);
            }}/>
            <h3> {time} </h3>
            <Button variant="outlined" onClick={()=>setPause(false)}> Start </Button> <Button variant="outlined" onClick={()=>setPause(true)}> Pause </Button>
            <Button variant="outlined" onClick={()=>setTime(0)}> Reset </Button>

        </>
    );
}

export default ParentUseTimer;