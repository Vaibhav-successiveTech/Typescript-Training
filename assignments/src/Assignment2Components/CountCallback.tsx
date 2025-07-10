'use client';
import { useCallback, useState } from "react";
import { Button } from "@mui/material";

type CountProp = {
    Count:number,
    setCount : any
}

const ChildCountComponent = ({Count,setCount} : CountProp)=>{
    return (
        <>
        <h3> {Count} </h3>
        <Button variant="outlined" onClick={()=>setCount(Count+1)}> Increment </Button> <Button variant="outlined" onClick={()=>setCount(0)}> Reset </Button>
        </>
    );
}

const ParentCountComponent = ()=>{
    const [count,setCount] = useState<number>(0);
    const newSetCount = useCallback(setCount,[count])
    const CountObj : CountProp = {
        Count : count,
        setCount : newSetCount
    }
    return <ChildCountComponent {...CountObj}/>
}

export default ParentCountComponent;