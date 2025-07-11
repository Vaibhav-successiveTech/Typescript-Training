'use client';
import { useState } from "react";
import WithAuth from "./hoc";
import InnerComponent from "./childComp";

export default function InputComponent(){
    
    let [name,setName] = useState('');
    let [pass,setPass] = useState('');
    let [state,setState] = useState(false);

    const NewComp = WithAuth(InnerComponent);
    return (
        <>
        <input value={name} onChange={(e)=>setName(e.target.value)}/>
        <br/>
        <br/>
        <input value={pass} onChange={(e)=>setPass(e.target.value)}/>
        <br/>
        <br/>
        <button onClick={()=>{
            setState(true);
        }}> Submit </button>
        {
            !state ? <></> : <NewComp name = {name} pass = {pass} /> 
        }
        </>
    );
}