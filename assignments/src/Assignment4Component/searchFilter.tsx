'use client';
import { useEffect, useState } from "react";
let constList = ['aaaaa','aaaab','aacd','acbdef','addsff','bbedfg','bbbbdss','scssf']
export default function SearchFilterComponent(){
    let[input,setInput] = useState('');
    let [list,setList] = useState<(string|undefined)[]>([]);

    useEffect(()=>{
        setList(constList.map((i)=>{
            if(i.search(input)>-1){
                return i;
            }
        }))
    },[input])

    return (
        <>
        <label> Search </label>
        <br/>
       <input value={input} onChange={(e)=>setInput(e.target.value)}/>
        {
            input.length == 0 ? <></> : list.map((i)=>{
                return (
                <h4>{i}</h4>
            )
            })
        }
        </>
    );
}