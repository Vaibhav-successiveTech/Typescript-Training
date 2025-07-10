
'use client';
import { useState } from "react";

export default function TodoListComponent(){
    let [list,setList] = useState<{todo:string,desc:string}[]>([]);
    let [todo,setTodo] = useState('');
    let [desc,setDesc] = useState('');
    return (
        <>
        <h4><label> Todo </label></h4>
        <input value={todo} onChange={(e)=>setTodo(e.target.value)}/>
        <h4><label> Description </label></h4>
        <input value={desc} onChange={(e)=>setDesc(e.target.value)}/>
        <br/>
        <br/>
        <button onClick={()=>{
            setList([...list,{todo,desc}]);
        }}> Set Todd </button>
        <br/>
        <br/>
        <ol>
            {list.map((i)=>{
            return (<li>
            <b><p>{i.todo}</p></b>
            <p>{i.desc}</p>
            </li>)
        })}
        </ol>
        </>
    );
}
