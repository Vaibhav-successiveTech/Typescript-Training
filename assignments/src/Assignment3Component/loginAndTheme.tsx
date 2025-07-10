'use client';
import { TextField, Button } from "@mui/material"

import { ChangeEvent, createContext, useContext, useState } from "react"

type login = {
    loginStatus : boolean,
    theme : string,
    setLoginStatus : any,
    setTheme : any
}

const loginContext = createContext<login>({loginStatus : false, theme:'light', setLoginStatus: ()=>{}, setTheme:()=>{}})

const LoginChildComponent = ()=>{
    const [user,setUser] = useState<string>('');
    const {loginStatus,theme,setLoginStatus,setTheme} = useContext(loginContext);
    return (
        <>
            <div style={{height : '100vh', backgroundColor : theme == 'light'? 'white' : 'black'}}>
                <TextField color="success" value={user} onChange={(e:ChangeEvent<HTMLInputElement>)=>setUser(e.currentTarget.value)} />
                    <br/>
                    <br/>
                    <Button variant="outlined" onClick={()=>{
                        user == 'Vaibhav' ? setLoginStatus(true) : setLoginStatus(false);
                    }} > Login </Button> <Button variant="outlined" onClick={()=>{
                        theme == 'light' ? setTheme('dark') : setTheme('light');
                    }}> Toggle Theme </Button>
                    <br/>
                    <br/>
                    <p style={{color : theme=='light' ? 'black': 'white'}}> {loginStatus ? <> Welcome {user} </> : <> Please Login! </>}  </p>
            </div>
        </>
    );
}

const ParentLoginComponent = ()=>{
    const [status,setStatus] = useState<boolean>(false);
    const [theme,setTheme] = useState<string>('light');
    const contextData : login = {
        loginStatus : status,
        theme : theme,
        setLoginStatus : setStatus,
        setTheme : setTheme
    }

    return (
        <loginContext.Provider value = {contextData}>
            <LoginChildComponent/>
        </loginContext.Provider>
    );
}

export default ParentLoginComponent;