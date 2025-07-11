'use client';
import { TextField, Button } from "@mui/material";
import { useRouter } from "next/navigation";
import { ChangeEvent, createContext, ReactNode, useContext, useEffect, useState } from "react";

type ContextType = {
    user : string,
    pass : string,
    setUser : any,
    setPass : any
}

export const loginContext = createContext<ContextType>({user:'',pass:'',setUser:()=>{},setPass:()=>{}});


export const ContextComponent = ({children}:{children:ReactNode})=>{
    const [user,setUser] = useState<string>('');
    const [pass,setPass] = useState<string>('');

    return (
        <loginContext.Provider value={{user,pass,setUser,setPass}}>
            {children}
        </loginContext.Provider>
    );
}

const LoginComponent = ()=>{
    const {user,pass,setUser,setPass} = useContext(loginContext);
    const router = useRouter();

    return (
        <>
            <TextField value={user} onChange={(e:ChangeEvent<HTMLInputElement>)=>setUser(e.currentTarget.value)} placeholder="user"/>
                <br/>
                <br/>
            <TextField value={pass} onChange={(e:ChangeEvent<HTMLInputElement>)=>setPass(e.currentTarget.value)} placeholder="password"/>
                <br/>
                <br/>
            <Button variant="outlined" onClick={()=>{

                if(user == 'vaibhav' && pass == '0'){
                    router.push('/Assignment3/Question4/home');
                }else{
                    router.push('/Assignment3/Question4');
                }

            }}> Login </Button>
        </>
    );
}

const HomeComponent = ()=>{
    const router = useRouter();
    const {user,pass} = useContext(loginContext);

    useEffect(()=>{
        if(!(user=='vaibhav'&& pass == '0')){
            router.push('/Assignment3/Question4');
        }
    },[]);

    return(
        <>
         <h1> This is Home Page </h1>
         <p> Welcome </p>
        </>
    ); 

}

export {HomeComponent};

export default LoginComponent;