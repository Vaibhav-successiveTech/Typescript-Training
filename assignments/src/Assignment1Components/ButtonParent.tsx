import { Button } from "@mui/material"

type style = {
    text : string
}

const ButtonComponent = ( {prop} : {prop : style})=>{
    return <Button variant="contained"> {prop.text} </Button>
}


const ButtonParent = ()=>{
    let style1 : style = { text :'Click Me'}; 

    let style2 : style = { text :'Click'};

    let style3 : style = { text :'Success'};

    return (
        <>
        <ButtonComponent  prop = {style1}/> <br/><br/>
        <ButtonComponent  prop = {style2}/> <br/><br/>
        <ButtonComponent  prop = {style3}/>
        </>
    );
}

export default ButtonParent;