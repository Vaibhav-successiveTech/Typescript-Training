'use client';
import { useState } from "react";
import ConditionalRendering from "./condRendering";

export default function ParentComponent(){
    let [input,setInput] = useState('');
    return (
        <>
         <input type="text" value={input} onChange={(e)=>setInput(e.target.value)} />
         <p> Enter "show" to display message </p>
         {input === 'show'? <ConditionalRendering/> : <></>}
        </>
        
    );
}