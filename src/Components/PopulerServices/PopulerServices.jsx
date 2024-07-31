import { useEffect, useState } from "react";
import PopularServiceItemCard from "../Shared/PopularServiceItemCard/PopularServiceItemCard";



const PopulerServices = () => {
    const [servicesdata , setServicesData]=useState([]);
    useEffect (() =>{
        fetch('services.json')
        .then(res=>res.json())
        .then (data=> {
const PopulerHomeservice = data.filter(item=>item.category ==='Popular');
        setServicesData(PopulerHomeservice)}) 
                }, [])
    return (



      <section  >
<h1 className="text-3xl font-extrabold text-emerald-600 text-center uppercase ">--Our Populer Items--</h1>
<div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4 p-4 ">
{
    servicesdata.map(service=>
    <PopularServiceItemCard key={service._id} service={service}>
    </PopularServiceItemCard>)
}        
</div>
      </section>
      
 
     


            
    );
};

export default PopulerServices;