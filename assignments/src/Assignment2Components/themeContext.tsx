'use client';
import { createContext, useContext, useState } from "react";
import { Button } from "@mui/material";

type theme = {
    dark : boolean,
    setDark : ()=>void
}

const themeContext = createContext<theme>({dark : false, setDark : ()=>{}});

const ChildComponent = ()=>{
    const {dark,setDark} = useContext(themeContext);
    return (
        <div style={{height: '100vh', backgroundColor : dark?'black':'white'}}>
            <h1> {dark ? <p style={{color : 'white'}}> Dark Theme </p> : <p style={{color : 'black'}}> Light Theme </p>} </h1>
            <br/>
            <Button variant="contained" color="secondary" onClick={()=>setDark()}> Toggle Theme </Button>

        </div>
    );
}


const ParentComponent = ()=>{
    const [state,setState] = useState<boolean>(false);
    const val : theme = {
        dark : state,
        setDark : ()=>{
            setState(prev=>!prev);
        }
    }

    return (
        <themeContext.Provider value={val}>
            <ChildComponent/>
        </themeContext.Provider>
    );
}

export default ParentComponent;