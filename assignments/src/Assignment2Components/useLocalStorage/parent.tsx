'use client';
import { ChangeEvent, useState } from "react";
import useLocalStorage from "./useLocalStorage";
import { TextField, Button } from "@mui/material";

const ParentUseLocalStorage = ()=>{

    const [key,setKey] = useState<string>('');
    const [val,setVal] = useState<string>('');
    const {setter,getter,remove} = useLocalStorage();

    return (
        <>
        <TextField value={key} onChange={(e:ChangeEvent<HTMLInputElement>)=>setKey(e.currentTarget.value)} placeholder="key"/>
            <br/>
            <br/>
        <TextField value={val} onChange={(e:ChangeEvent<HTMLInputElement>)=>setVal(e.currentTarget.value)} placeholder="value"/>
            <br/>
            <br/>
        <Button variant="outlined" onClick={()=>{
            setter(key,val);
        }}> Set </Button> <Button variant="outlined" onClick={()=>{
            const res : string = getter(key);
            setVal(res);
        }}> Get </Button> <Button variant="outlined" onClick={()=>remove(key)}> Remove  </Button>
        </>
    );
}

export default ParentUseLocalStorage