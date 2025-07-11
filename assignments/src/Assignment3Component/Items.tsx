'use client';

import Link from "next/link";
import { Button } from "@mui/material";
import { useRouter } from "next/navigation";

const List : {id:number,desc:string}[] = [
    {
        id : 0,
        desc : 'Product1'
    },
    {
        id : 1,
        desc : 'Product2'
    },
    {
        id : 2,
        desc : 'Product3'
    },
    {
        id : 3,
        desc : 'Product4'
    }
];

export const ItemComponent = ({id}:{id :number})=>{
    const router = useRouter();
    console.log(List[0]);
    console.log(id);
    return (
        <>
        <h2> ProductId : { List[id].id } </h2>
        <h2> Product Description : { List[id].desc } </h2>
        <br/>
        <br/>
        <Button variant="outlined" onClick={()=>router.push('/Assignment3/Question6')}> Back </Button>
        </>
    );
}

const ListComponent = ()=>{
    return (
        <>
            {
                List.map((i:{id:number,desc : string})=>{
                    return (
                        <>
                            <Link href={`/Assignment3/Question6/${i.id}`}> Product : {i.id} </Link>
                            <br/>
                            <br/>
                        </>
                    );
                })
            }
        </>
    );
}

export default ListComponent;