import { FC } from "react";
import withDataFetcher from "./hoc";

const  DisplayComponent : FC<{data:[]}> = ({data}:{data:[]})=>{
    return (
        <>
        {
            data.map((i:Object,idx:number) => <h4><div key={idx}> {JSON.stringify(i)} <br/></div></h4>)
        }
        </>
    );
}

export default withDataFetcher(DisplayComponent);