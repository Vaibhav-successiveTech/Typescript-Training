'use client'
import { fetchData2 } from "./fetch2Component";
export default function RetryButton(){

    return (
        <>
        <button onClick={fetchData2}> Retry </button>
        </>
    );
}