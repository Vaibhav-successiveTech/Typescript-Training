import UserCard from "./usercard";
type User = {
    name:string,
    email:string,
    url : string
}

const list : User[] = [
    {
        name : 'John',
        email : 'John@gmail.com',
        url : 'https://api.adorable.io/avatars/400/f8f82cf2cfe234e5d261c1caaae310ed.png'
    },
    {
        name : 'Ben',
        email : 'Ben@gmail.com',
        url : 'https://api.adorable.io/avatars/400/e628760aa53ce350f2959683f4326cbd.png'
    },
    {
        name : 'Max',
        email : 'Max@gmail.com',
        url : 'https://api.adorable.io/avatars/400/b0273db56320c62c5275731b194eed29.png'
    },
] 

const UserCardComponent = ()=>{
    return (
        <>
        {
            list.map((i)=> <UserCard {...i}/>)
        }
        </>
    );
}

export default UserCardComponent;
export type {User}