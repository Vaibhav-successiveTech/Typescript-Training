'use client';

import { ChangeEvent, useState } from "react"
import useClipboard from "./useClipboard"
import { TextField, Button } from "@mui/material";

const ParentUseClipboard = ()=>{
    const [input,setInput] = useState<string>('');
    const {status,Copy} = useClipboard(input);
    return (
        <>
        <TextField value={input} onChange={(e:ChangeEvent<HTMLInputElement>)=>setInput(e.currentTarget.value)}/>
            <br/>
            <br/>
            <Button variant="outlined" onClick={Copy} > {status} </Button>
        </>
    );
}

export default ParentUseClipboard;