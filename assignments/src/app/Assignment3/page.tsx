'use client';
import { Button } from "@mui/material";
import { useRouter } from "next/navigation";
const Home = ()=>{
    const router : any = useRouter();
    return (
        <>
        <h1> Assignment3 </h1>
        <br/>
        <br/>
        <Button variant="outlined" onClick={()=>router.push('Assignment3/Question1')}> Question1 </Button>
        <br/>
        <br/>
        <Button variant="outlined" onClick={()=>router.push('Assignment3/Question2')}> Question2 </Button>
        <br/>
        <br/>
        <Button variant="outlined" onClick={()=>router.push('Assignment3/Question3')}> Question3 </Button>
        <br/>
        <br/>
        <Button variant="outlined" onClick={()=>router.push('Assignment3/Question4')}> Question4 </Button>
        <br/>
        <br/>
        <Button variant="outlined" onClick={()=>router.push('Assignment3/Question5')}> Question5 </Button>
        <br/>
        <br/>
        <Button variant="outlined" onClick={()=>router.push('Assignment3/Question6')}> Question6 </Button>
        </>
    );
}

export default Home;