'use client';
import { TextField, Button } from "@mui/material";
import { ChangeEvent, useMemo, useState } from "react"

const EmployeeSalary = ()=>{
    const [list,setList] = useState<any>([]);
    const [name,setName] = useState<string>('');
    const [salary,setSalary] = useState<number>(0);

    const avgSalary = useMemo<number>(()=>{
        const n : number = list.length > 0 ? list.length : 1;
        let sum : number = 0;
        for(let i of list){
            sum+=i.salary;
        }
        return sum/n;
    },[list]);

    return (
        <>
        <TextField value={name} onChange={(e:ChangeEvent<HTMLInputElement>)=>setName(e.currentTarget.value)} placeholder="name"/>
            <br/>
            <br/>
            <TextField type="number" value={salary} onChange={(e:ChangeEvent<HTMLInputElement>)=>{
                const num = parseInt(e.currentTarget.value);
                if(!isNaN(num) || num > 0)setSalary(num);
                else setSalary(1);
            }}/>
            <br/>
            <br/>
            <Button variant="outlined" onClick={()=>{
                setList([...list,{name,salary}])
            }}> Add </Button>

            <br/>
            <br/>
            {
                list.map((i : {name : string,salary : number})=>{
                    return (
                        <>
                        <p> {i.name} {i.salary} </p><br/>
                        </>
                    );
                })
            }
            <br/>
            <h4> Average Salary is : {avgSalary} </h4>
        </>
    );
}

export default EmployeeSalary;