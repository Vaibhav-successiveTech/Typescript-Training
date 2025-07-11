'use client';
import { TextField, Button } from "@mui/material";
import { ChangeEvent, createContext, useContext, useState } from "react";

type login = {
    status : boolean,
    setStatus : any
}

const loginContext = createContext<login>({status : false,setStatus : ()=>{}})

const LoginComponent = ()=>{
    const [user,setUser] = useState<string>('');
    const {status,setStatus} = useContext(loginContext);
    return (
        <>
            <TextField value={user} onChange={(e:ChangeEvent<HTMLInputElement>)=>setUser(e.currentTarget.value)} />
                <br/>
                <br/>
                <Button variant="outlined" onClick={()=>{
                    user == 'Vaibhav' ? setStatus(true) : setStatus(false);
                }}> Login </Button>
                <br/>
                <br/>
                {
                    status ? <h2> Welcome {user}  </h2> : <h2> Please Login! </h2>
                }
        </>
    );
}

const ParentLoginComponent = ()=>{
    const [status,setStatus] = useState<boolean>(false);
    const contextData : login = {
        status : status,
        setStatus : setStatus
    }
    return (
        <loginContext.Provider value={contextData}>
            <LoginComponent/>
        </loginContext.Provider>
    );
}


export default ParentLoginComponent;