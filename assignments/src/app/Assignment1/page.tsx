"use client"

import { Button } from "@mui/material";
import { useRouter } from "next/navigation";

const Home = () => {
    const router: any = useRouter();
    return (
        <>
            <h1> Assignment1 </h1>
            <br/>
            <Button onClick={() => router.push('Assignment1/Question1')} variant="outlined"> Question1 </Button>
            <br/>
            <br/>
            <Button onClick={() => router.push('Assignment1/Question2')} variant="outlined"> Question2 </Button>
            <br/>
            <br/>
            <Button onClick={() => router.push('Assignment1/Question3')} variant="outlined"> Question3 </Button>
            <br/>
            <br/>
            <Button onClick={() => router.push('Assignment1/Question4')} variant="outlined"> Question4 </Button>
            <br/>
            <br/>
            <Button onClick={() => router.push('Assignment1/Question5')} variant="outlined"> Question5 </Button>
            <br/>
            <br/>
            <Button onClick={() => router.push('Assignment1/Question6')} variant="outlined"> Question6 </Button>
        </>
    );
}

export default Home;