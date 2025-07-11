'use client';
import { useState } from "react";

export default function DropDownComponent(){
    let [input,setInput] = useState('');
    return (
        <>
        <label> Choose Car :  </label>
        <select onChange={(e)=>setInput(e.target.value)}>
            <option value='Volvo'> Volvo </option>
            <option value='Audi'> Audi </option>
            <option value='BMW'> BMW </option>
            <option value='Toyota'> Toyota </option>
        </select>

        {input == ""?<></>:<h3> You Have Choosed : {input} </h3>}

        </>

    );
}