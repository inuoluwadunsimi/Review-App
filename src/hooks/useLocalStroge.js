import React,{useState,useEffect} from 'react'
import { v4 as uuidv4 } from 'uuid';


function getStorageValue(key, defaultValue){
    const saved =JSON.parse(localStorage.getItem(key));
    return saved || defaultValue
}


function useLocalStorage(name=uuidv4(),data) {

    const [state, setState] = useState(()=>{
        return getStorageValue(name,data);
    });
    function setValue(newState){   
        localStorage.setItem(name,JSON.stringify(newState))
    }
    return [state,setState]
}
export default useLocalStorage;


