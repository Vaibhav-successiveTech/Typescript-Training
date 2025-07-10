import axios from "axios";
import { FC } from "react";
export default function withDataFetcher(InnerComp : FC<{data:[]}>){
    const WithDataFetcher : FC = async(props : {})=>{

        let data = [];

        try{
            const res = await axios('https://jsonplaceholder.typicode.com/users');
            data = res.data;
        }catch(err){
            console.log(err);
        }

        return (
            <InnerComp {...props} data = {data}/>
        );
    }
    return WithDataFetcher;

}