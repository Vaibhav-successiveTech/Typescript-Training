'use client';
import { useState } from "react";
import {Button} from '@mui/material'
const Counter = ()=>{
    const [count,setCount] = useState<number>(0);
    return (
        <>
        <h2> {count} </h2>
        <Button onClick={()=>setCount(count+1)} variant="outlined"> Increment </Button> <Button onClick={()=>setCount(count-1)} variant="outlined"> Decrement </Button>
        </>
    );
}

export default Counter;