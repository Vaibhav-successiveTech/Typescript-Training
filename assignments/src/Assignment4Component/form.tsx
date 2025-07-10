'use client';
import { useState } from "react";

export default function FormComponent(){
    let [user,setUser] = useState<string>('');
    let [gender,setGender] = useState<string>('null');
    let [sports,setSport] = useState<string[]>([]);

    function changeSports(val : string){
        let flag = false;
        for(let i of sports){
            if(i==val){
                let [val,...rest] = sports;
                setSport(rest);
                flag = true;
            }
        }
        if(!flag){
           setSport([val,...sports]);
        }
    }


    return (
        <form onSubmit = {(e)=>e.preventDefault()}>
            <h4> <label> Enter Name </label> </h4>
            <input type = 'text' value={user} onChange={(e)=>setUser(e.target.value)}/>
            <br/>
                <h4> Select Gender </h4>
            <input type = 'radio' onChange={(e)=>{setGender(e.target.value)}} value='Male' checked = {gender==='Male'} />
            <label> Male </label>
            <input type = 'radio' onChange={(e)=>{setGender(e.target.value)}} value='Female' checked = {gender==='Female'}/>
            <label> Female </label>
            <br/>
                <h4> Select Sports </h4>
            <input type = 'checkbox' onChange={(e)=>{
                const str : string = e.target.value
                changeSports(str)
            }} value='Cricket'/>
            <label> Cricket </label>
            <br/>
            <input type = 'checkbox' onChange={(e)=>{
                 const str : string = e.target.value
                changeSports(str)
            }} value='FootBall'/>
            <label> FootBall </label>
            <br/>
            <input type = 'checkbox' onChange={(e)=>{
                 const str : string = e.target.value
                changeSports(str)
            }} value='Tennis'/>
            <label> Tennis </label>
            <br/>
            <br/>
            <button onClick={()=>{
                console.log(user,gender,sports);
            }}>  Submit  </button>

        </form>
    );
}