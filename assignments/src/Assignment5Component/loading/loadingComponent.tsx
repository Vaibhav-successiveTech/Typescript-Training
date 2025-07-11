'use client';

import { OrbitProgress } from "react-loading-indicators";
import { useState } from "react"; 
import DataComponent from "./dataComponent";



export default function LoadingComponent(){
    let [loading,setLoading] = useState(false);
    return (
        <>
        <DataComponent loading={loading} setLoading={setLoading}/>
        {
            loading == false ? <OrbitProgress color="#32cd32" size="medium" text="" textColor="" /> : <></>
        }
        
        <br/>
        <br/>

        <button onClick={()=>{
            setLoading(false);
            }}> Retry </button>
        </>
    );
}