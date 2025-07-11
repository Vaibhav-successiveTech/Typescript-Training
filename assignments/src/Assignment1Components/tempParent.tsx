'use client';
import { TextField } from "@mui/material";
import { ChangeEvent, useState } from "react";
import TemperatureComponent from "./temperatureComponent";

type Temp = {
    temp : number
}

const TempParent = ()=>{
    let [temp,setTemp] = useState<number>(10);
    return (
        <>
        <TextField value={temp} type="number" variant = "outlined" onChange={(e:ChangeEvent<HTMLInputElement>)=>setTemp(parseInt(e.currentTarget.value))} />
            <br/>
            <br/>
            <TemperatureComponent temp={temp} />
        </>
    );
}

export default TempParent
export type {Temp}