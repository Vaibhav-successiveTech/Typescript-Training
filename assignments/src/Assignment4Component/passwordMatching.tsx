'use client';
import { useState } from "react";

export default function PasswordMatching(){
    let [pass1,setPass1] = useState('');
    let [pass2,setPass2] = useState('');
    let [status,setStatus] = useState(0);
    return (
        <form onSubmit = {(e)=>{
            e.preventDefault();
            if(pass1 === pass2){
                setStatus(1);
            }else{
                setStatus(2);
            }
        }}>
        <input value={pass1} onChange={(e)=>setPass1(e.target.value)}/>
        <label> Password </label>
        <br/>
        <br/>   
        <input value={pass2} onChange={(e)=>setPass2(e.target.value)}/>
        <label> Confirm Password </label>
        <br/>
        <br/> 

        <input type="submit" />

        {status == 0 ? <></>:(status==1?<h3>Submited</h3>:<h3>Passwords Do Not Match</h3>)}
        </form>
    );
}