const useLocalStorage = ()=>{
    const setter = (key : string,val : string)=>{
        localStorage.setItem(key,val);
    }
    const getter = (key : string) : string=>{
        const res : string|null = localStorage.getItem(key);
        return res?res:'no Entry';
    }
    const remove = (key:string) =>{
        localStorage.removeItem(key);
    }

    return {setter,getter,remove};
}

export default useLocalStorage;