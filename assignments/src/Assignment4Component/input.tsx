'use client';

import { TextField } from "@mui/material";
import { ChangeEvent, useState } from "react";

 const InputComponent = ()=>{
    let [state,setState] = useState('');
    return (
        <>
        <TextField value={state} onChange={(e:ChangeEvent<HTMLInputElement>)=>setState(e.target.value)}/>
        <br/>
        <br/>
        Value : {state}
        </>
        
    );
}

export default InputComponent;