'use client';
import { useState } from "react"
import { Button } from "@mui/material";
const Counter = ()=>{

    const [count,setCount] = useState<number>(0);

    return (
        <>
        <h1> {count} </h1>
        <br></br>
        <br></br>
        <Button variant="outlined" onClick={()=>setCount(count+1)}> Increment </Button> <Button variant="outlined" onClick={()=>setCount(count-1)}> Decrement </Button>
        </>
    );
}

export default Counter;