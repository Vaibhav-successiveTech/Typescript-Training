'use client';
import { useReducer } from "react"
import { Button } from "@mui/material"

type State = {
    CountA : number,
    CountB : number,
    CountC : number,
    CountD : number,
}

type StateAction = {type : 'IncrementA'} | {type : 'IncrementB'} | {type : 'IncrementC'} | {type : 'IncrementD'} 

const VoteReducer = (state : State,action : StateAction) : State =>{
    switch (action.type) {
        case 'IncrementA' : {
            return { ...state, CountA : state.CountA + 1 }
        }
        case 'IncrementB' : {
            return {...state,CountB : state.CountB + 1}
        }
        case 'IncrementC' : {
            return {...state,CountC : state.CountC + 1}
        }
        case 'IncrementD' : {
            return {...state , CountD : state.CountD + 1}
        }
    }
}

const VotingApp = ()=>{
    const [state,dispatch] = useReducer(VoteReducer,{CountA : 0,CountB : 0,CountC : 0,CountD : 0});
    return (
        <>
        <label><h3> {state.CountA} </h3></label>
        <Button variant="outlined" onClick={()=>dispatch({type : 'IncrementA'})}> Vote A </Button>
        <br/>
        <br/>
        <label><h3> {state.CountB} </h3></label>
        <Button variant="outlined" onClick={()=>dispatch({type : 'IncrementB'})}> Vote B </Button>
        <br/>
        <br/>
        <label><h3> {state.CountC} </h3></label>
        <Button variant="outlined" onClick={()=>dispatch({type : 'IncrementC'})}> Vote C </Button>
        <br/>
        <br/>
        <label><h3> {state.CountD} </h3></label>
        <Button variant="outlined" onClick={()=>dispatch({type : 'IncrementD'})}> Vote D </Button>
        <br/>
        <br/>
        </>
    );
}

export default VotingApp;