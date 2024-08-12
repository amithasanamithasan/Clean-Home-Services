import { useEffect, useState } from "react";


const useReviews = () => {
    const [reviews , setReviews]=useState([]);
    const [loadingdata , setLoadingData]=useState(true);
    
    useEffect(()=>{
        fetch('http://localhost:5000/rating')
        .then(res=>res.json())
        .then(data=> setReviews(data))
    setLoadingData(false);
    },[])
    return[reviews,loadingdata];
};

export default useReviews;