'use client';
import { TextField } from "@mui/material";
import { ChangeEvent, useState } from "react"

const InputComponent = ()=>{
    const [first,setfirst] = useState<string>(''); 
    const [last,setlast] = useState<string>(''); 
    const [age,setAge] = useState<number>(20);

    return (
        <>
        <TextField value={first} placeholder="firstName" onChange={(e:ChangeEvent<HTMLInputElement>)=>setfirst(e.currentTarget.value)}/>
            <label><h3> FirstName : {first}</h3> </label>
            <br/>
            <br/>
        <TextField value={last} placeholder="lastName" onChange={(e:ChangeEvent<HTMLInputElement>)=>setlast(e.currentTarget.value)}/>
            <label><h3> LastName : {last}</h3> </label>
            <br/>
            <br/>
        <TextField type = 'number' value={age} placeholder="Age" onChange={(e:ChangeEvent<HTMLInputElement>)=>setAge(parseInt(e.currentTarget.value))}/>
            <label><h3> Age : {!age? <></> : age}</h3> </label>
        </>
    );

}

export default InputComponent;