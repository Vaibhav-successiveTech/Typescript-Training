import { ItemComponent } from "@/Assignment3Component/Items";

const Home = ({params} : {params:{id:number}})=>{
    console.log(params);
    const {id} = params
    return (
        <ItemComponent id = {id}/>
    );
}

export default Home;