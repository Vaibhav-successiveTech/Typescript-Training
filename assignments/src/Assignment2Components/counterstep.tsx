'use client';
import { ChangeEvent, useState } from "react";
import { Button, TextField } from "@mui/material";

const CounterStep = ()=>{
    const [count,setCount] = useState<number>(0);
    const [step,setStep] = useState<number>(1);

    return (
        <>
        <h2> {count} </h2>
        <TextField type="number" value={step} onChange={(e:ChangeEvent<HTMLInputElement>)=>{
            const num = parseInt(e.currentTarget.value);
            if(!isNaN(num))
            setStep(num);
            else setStep(0);
        }
            }/>
            <br/>
            <br/>
        <Button variant="outlined" onClick={()=>setCount(count+step)}> Increment </Button> <Button variant="outlined" onClick={()=>setCount(count-step)}> Decrement </Button>
        </>
    );
}

export default CounterStep;