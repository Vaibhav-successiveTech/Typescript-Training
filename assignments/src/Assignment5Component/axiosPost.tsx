'use client';

import { useState } from "react";
import axios from "axios";


export default function AxiosPostComponent(){
    let [title,setTitle] = useState<string>('');
    let [desc,setDesc] = useState<string>('');
    let [res,setRes] = useState<string>('');
    let [error,setError] = useState<Error|null>(null);

    async function handleSubmit(){
        await axios.post('https://jsonplaceholder.typicode.com/users',{
            title : title,
            desc : desc
        }).then((res)=>{
            setRes(res.data);
            console.log((res));
            
        }).catch((err)=>{
            console.log(err.message)
            setError(err);
        })
    }

    return (
        <>
        <form onSubmit={(e)=>{
            e.preventDefault();
            handleSubmit();
        }}>
        <label> Title </label>
        <input value={title} onChange={(e)=>setTitle(e.target.value)}/>
        <br/>
        <br/>
        <label> Description </label>
        <input value={desc} onChange={(e)=>setDesc(e.target.value)}/>
        <br/>
        <br/>
        <input type="submit"/> 
        </form>
        <br/>
        <br/>
        { res ? <h4> Form Submitted </h4> : (error==null ? <></> : <>{error.message}</>) }
        </>

    );
}