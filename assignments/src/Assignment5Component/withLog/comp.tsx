'use client'
import withLog from "./hoc";

function Comp(){
    return (
        <div> Hello </div>
    );
}

export default withLog(Comp);