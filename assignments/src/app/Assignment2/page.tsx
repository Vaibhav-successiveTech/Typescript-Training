'use client';
import { Button } from "@mui/material";
import { useRouter } from "next/navigation";

const Home = ()=>{
    const router = useRouter();
    return (
        <>
        <h1> Assignment2 </h1>
        <br/>
        <Button onClick={()=>router.push('Assignment2/Question1')} variant="outlined"> Question1 </Button>
        <br/>
        <br/>
        <Button onClick={()=>router.push('Assignment2/Question2')} variant="outlined"> Question2 </Button>
        <br/>
        <br/>
        <Button onClick={()=>router.push('Assignment2/Question3')} variant="outlined"> Question3 </Button>
        <br/>
        <br/>
        <Button onClick={()=>router.push('Assignment2/Question4')} variant="outlined"> Question4 </Button>
        <br/>
        <br/>
        <Button onClick={()=>router.push('Assignment2/Question5')} variant="outlined"> Question5 </Button>
        <br/>
        <br/>
        <Button onClick={()=>router.push('Assignment2/Question6')} variant="outlined"> Question6 </Button>
        <br/>
        <br/>
        <Button onClick={()=>router.push('Assignment2/Question7')} variant="outlined"> Question7 </Button>
        <br/>
        <br/>
        <Button onClick={()=>router.push('Assignment2/Question8')} variant="outlined"> Question8 </Button>
        <br/>
        <br/>
        <Button onClick={()=>router.push('Assignment2/Question9')} variant="outlined"> Question9 </Button>
        <br/>
        <br/>
        <Button onClick={()=>router.push('Assignment2/Question10')} variant="outlined"> Question10 </Button>
        <br/>
        <br/>
        <Button onClick={()=>router.push('Assignment2/Question12')} variant="outlined"> Question12 </Button>
        <br/>
        <br/>
        <Button onClick={()=>router.push('Assignment2/Question13')} variant="outlined"> Question13 </Button>
        <br/>
        <br/>
        <Button onClick={()=>router.push('Assignment2/Question14')} variant="outlined"> Question14 </Button>
        <br/>
        <br/>
        <Button onClick={()=>router.push('Assignment2/Question15')} variant="outlined"> Question15 </Button>
        <br/>
        <br/>
        <Button onClick={()=>router.push('Assignment2/Question16')} variant="outlined"> Question16 </Button>
        <br/>
        <br/>
        <Button onClick={()=>router.push('Assignment2/Question17')} variant="outlined"> Question17 </Button>
        <br/>
        <br/>
        <Button onClick={()=>router.push('Assignment2/Question18')} variant="outlined"> Question18 </Button>
        <br/>
        <br/>
        <Button onClick={()=>router.push('Assignment2/Question19')} variant="outlined"> Question19 </Button>
        </>
    );
}

export default Home;