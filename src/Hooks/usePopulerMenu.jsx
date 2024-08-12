import { useState } from "react";
import { useEffect } from "react";

const usePopulerMenu = () => {
    const [servicesdata , setServicesData]=useState([]);
    const [loadingdata , setLoadingData]=useState(true);
        useEffect (() =>{
            fetch('http://localhost:5000/service')
            .then(res=>res.json())
            .then (data=> setServicesData(data)) 
            setLoadingData(false)
                    }, [])
    return[servicesdata , loadingdata]                
};

export default usePopulerMenu;