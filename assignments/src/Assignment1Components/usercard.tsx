import type {User} from './userCardParent'
const UserCard = (user:User)=>{
    return (
        <>
        <img src={user.url}/>
        <br/>
        <h4> Name : {user.name} </h4>
        <br/>
        <h4> Email : {user.email} </h4>
        <br/>
        <br/>
        </>
    );
}

export default UserCard