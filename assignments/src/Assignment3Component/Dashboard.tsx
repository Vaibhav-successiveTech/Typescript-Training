import Link from "next/link";

const DashBoardComponent = ()=>{
    return (
        <>
        <h2> DashBoard </h2>
        <br/>
        <br/>
        <Link href='/Assignment3/Question5/Profile'> Profile </Link>
        <br/>
        <br/>
        <Link href='/Assignment3/Question5/Setting'> Setting </Link>
        </>
    );
}

const ProfileComponent = ()=>{
    return (
        <>
        <h2> Profile </h2>
        <br/>
        <br/>
        <Link href='/Assignment3/Question5'> DashBoard </Link>
        <br/>
        <br/>
        <Link href='/Assignment3/Question5/Setting'> Setting </Link>
        </>
    );
}

const SettingComponent = ()=>{
    return (
        <>
        <h2> Setting </h2>
        <br/>
        <br/>
        <Link href='/Assignment3/Question5'> DashBoard </Link>
        <br/>
        <br/>
        <Link href='/Assignment3/Question5/Profile'> Profile </Link>
        </>
    );
}

export { DashBoardComponent, SettingComponent, ProfileComponent };