'use client';
import { TextField } from "@mui/material";
import { ChangeEvent, useMemo, useState } from "react"
import {Button} from '@mui/material'

const StudentList = ()=>{

    const[list,setList] = useState<string[]>(['ben','John','Ryan','Tom']);
    const [input,setInput] = useState<string>('');

    const StudentList = useMemo<string[]>(()=>list,[list]);

    return(
        <>
        <TextField value={input} onChange={(e : ChangeEvent<HTMLInputElement>)=>setInput(e.currentTarget.value)} placeholder="enter name" />
            <br/>
            <br/>
            <Button variant="outlined" onClick={()=>{
                setList([...list,input]);
            }}> Add  </Button>
            <br/>
            <br/>

            {
                StudentList.map((i)=><h3> {i} </h3>)
            }
        </>
    );
}

export default StudentList;