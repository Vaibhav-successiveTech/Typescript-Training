'use client'
import { useState } from "react"
import { Button } from "@mui/material";
const RandomNumberComponent = ()=>{
    const [num,setNum] = useState<number>(100);
    return (
        <>
        <h2> {num} </h2>
        <Button onClick={()=>{
            setNum(Math.round(Math.random()*100));
        }} variant="outlined"> Generate </Button>
        </>
    );
}

export default RandomNumberComponent;