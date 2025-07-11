import Link from "next/link";

const HomeComponent = ()=>{
    return (
        <>
        <h1> This is Home Page </h1>
        <br/>
        <br/>
        <Link href='/Assignment3/Question3/About'> About </Link>
        </>
    );
}

const AboutComponent = ()=>{
    return (
        <>
        <h1> This is About Page </h1>
        <br/>
        <br/>
        <Link href='/Assignment3/Question3/Home'> Home </Link>
        </>
    );
}



export {HomeComponent, AboutComponent};