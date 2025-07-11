'use client';

import { useState } from "react";
import ButtonComponent from "./button";
let obj : {[key:number] : string} = {
    0 : 'primary',
    1 : 'secondary',
    2 : 'error'
}
export default function ParentButtonComponent(){
    let [num,setNum] = useState(0);
    return (
        <ButtonComponent color={obj[num%3]} clickHandler={()=>setNum(num+=1)}/>
    );
}