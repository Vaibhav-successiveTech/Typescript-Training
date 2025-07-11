'use client';
import { Button } from "@mui/material";
import { useRouter } from "next/navigation";
export default function Home() {
  const router: any = useRouter();
  return (
    <>
      <h1> Typescript Training  </h1>
      <br/>
      <Button onClick={() => router.push('Assignment1')} variant="outlined"> Assignment1 </Button>
      <br/>
      <br/>
      <Button onClick={()=>router.push('Assignment2')} variant="outlined"> Assignment2 </Button>
      <br/>
      <br/>
      <Button onClick={()=>router.push('Assignment3')} variant="outlined"> Assignment3 </Button>
      <br/>
      <br/>
      <Button onClick={()=>router.push('Assignment4')} variant="outlined"> Assignment4 </Button>
      <br/>
      <br/>
      <Button onClick={()=>router.push('Assignment5')} variant="outlined"> Assignment5 </Button>
    </>
  );
}
