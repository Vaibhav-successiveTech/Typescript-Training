'use client';
import { useRouter } from "next/navigation"
import { Button } from "@mui/material";
const Home = ()=>{
    const router = useRouter();
    return (
        <>
        <h1> Assignment5 </h1>
        <br/>
        <br/>
        <Button variant="outlined" onClick={()=>router.push('/Assignment5/Question1')}> Question1 </Button>
        <br/>
        <br/>
        <Button variant="outlined" onClick={()=>router.push('/Assignment5/Question2')}> Question2 </Button>
        <br/>
        <br/>
        <Button variant="outlined" onClick={()=>router.push('/Assignment5/Question3')}> Question3 </Button>
        <br/>
        <br/>
        <Button variant="outlined" onClick={()=>router.push('/Assignment5/Question4')}> Question4 </Button>
        <br/>
        <br/>
        <Button variant="outlined" onClick={()=>router.push('/Assignment5/Question5')}> Question5 </Button>
        <br/>
        <br/>
        <Button variant="outlined" onClick={()=>router.push('/Assignment5/Question6')}> Question6 </Button>
        <br/>
        <br/>
        <Button variant="outlined" onClick={()=>router.push('/Assignment5/Question7')}> Question7 </Button>
        <br/>
        <br/>
        <Button variant="outlined" onClick={()=>router.push('/Assignment5/Question12')}> Question12 </Button>
        <br/>
        <br/>
        <Button variant="outlined" onClick={()=>router.push('/Assignment5/Question13')}> Question13 </Button>
        <br/>
        <br/>
        <Button variant="outlined" onClick={()=>router.push('/Assignment5/Question14')}> Question14 </Button>
        <br/>
        <br/>
        <Button variant="outlined" onClick={()=>router.push('/Assignment5/Question15')}> Question15 </Button>
        <br/>
        <br/>
        <Button variant="outlined" onClick={()=>router.push('/Assignment5/Question16')}> Question16 </Button>

        </>
    );
}

export default Home;