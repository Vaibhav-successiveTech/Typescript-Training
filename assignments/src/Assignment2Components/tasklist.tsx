'use client';
import { Button } from "@mui/material";
import { useCallback, useState } from "react";

const CreateTask = ({id} : {id:number}) =>{
    const [status,setStatus] = useState<string>('Complete');
    const fn = useCallback(()=>{
        setStatus('Completed');
    },[status])
    return (
        <>
            <h3> Task : {id} </h3>
            <Button variant="outlined" onClick={fn}> {status} </Button> 
        </>
    );
}

const TaskListComponent = ()=>{
    return (
        <>
            <CreateTask id = {1}/>
            <CreateTask id = {2}/>
            <CreateTask id = {3}/>
            <CreateTask id = {4}/>
            <CreateTask id = {5}/>
        </>
    );
}

export default TaskListComponent;