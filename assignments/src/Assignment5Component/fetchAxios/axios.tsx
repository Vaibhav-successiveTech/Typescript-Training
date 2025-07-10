import axios from "axios";
import RetryButton from "./retry";


let data : [] = [];
let error : Error|null = null; 
const fetchData2 = async ()=>{
    try{

        const resopnse = await axios.get('https://jsonplaceholder.typicode.com/users');
        data = resopnse.data;
        
    }catch(err){

        error = new Error(String(err));
    }
}
export default function AxiosComponent2(){

    fetchData2();
    console.log(data)
    return (
        <>
        {!error ? data.map((i,idx)=>{return <h5><div key={idx}> {JSON.stringify(i)} <br/><br/></div></h5>}): <h3> Server Error </h3>}
        <br/>
        <RetryButton/>
        </>
    );
}

export {fetchData2}