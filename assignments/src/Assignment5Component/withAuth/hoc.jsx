
export default function WithAuth(InnerComponent){
    const  NewComponent = (props)=>{
        return (
            <>
            {(props.name == 'a' && props.pass == '1234') ? <InnerComponent name={props.name} pass = {props.pass}/> : <h4> Invalid Username and Password </h4>}
            </>
        );
    }
    return NewComponent;
}
