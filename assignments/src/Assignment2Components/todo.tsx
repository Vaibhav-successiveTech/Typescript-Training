'use client';
import { Button, Checkbox, TextField } from "@mui/material";
import { ChangeEvent, useState } from "react";

type todo = {
    id : number,
    heading : string,
    description : string
}


const TodoListComponent = ()=>{

    const [list,setList] = useState<todo[]>([]);

    const [todo,setTodo] = useState<string>('');
    const [desc,setDesc] = useState<string>('');
    

    return (
        <>
        <TextField value={todo} onChange={(e:ChangeEvent<HTMLInputElement>)=>setTodo(e.currentTarget.value)} placeholder="todo"/>
            <br/>
            <br/>
        <TextField value={desc} onChange={(e:ChangeEvent<HTMLInputElement>)=>setDesc(e.currentTarget.value)} placeholder="description"/>
            <br/>
            <br/>
            <Button onClick={()=>{
                const newTodo : todo = {
                    id : list.length +1 ,
                    heading : todo,
                    description : desc
                }
                setList([...list,newTodo])
            }} variant="outlined" size="medium"> Set Todo </Button>
        <>
            {
                list.map((i:todo)=>{
                    return (
                        <>
                        <h5> {i.id} </h5>
                        <h5> {i.heading} </h5>
                        <p> {i.description} </p>
                        <Button onClick={()=>{
                            setList(list.filter((ele : todo)=> {return ele.id != i.id}));
                        }} variant="outlined" size="small"> Delete </Button> <Checkbox/>
                        </>
                    );
                })
            }
        </>
        </>
    );
}

export default TodoListComponent;