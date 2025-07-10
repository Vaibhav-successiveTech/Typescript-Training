import { useState } from "react"

const useClipboard = (str : string)=>{
    const [status,setStatus] = useState<string>('Copy');


    const Copy = async()=>{
        try{
            await navigator.clipboard.writeText(str);
            setStatus('Copied')
        }catch (err){
            setStatus('error');
        }
    }

    return {status,Copy};
}   

export default useClipboard;