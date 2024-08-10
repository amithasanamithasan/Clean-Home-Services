
import usePopulerMenu from "../../Hooks/usePopulerMenu";
import SectionTitle from "../SectionTitle/SectionTitle";
import PopularServiceItemCard from "../Shared/PopularServiceItemCard/PopularServiceItemCard";



const PopulerServices = () => {
// create Hook folder using  a custom hook usePopulerMenu 
    const [servicesdata]=usePopulerMenu();

    const popularmenu=servicesdata.filter(item=>item.category==='Popular');

    return (
      <section  >
        <SectionTitle subHeading="Our Populer Items"
        heading="HOME CLEANING SERVICES">

        </SectionTitle>
<h1 className="text-3xl font-extrabold text-emerald-600 text-center uppercase "></h1>
<div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4 p-4 ">
{
    popularmenu.map(service=>
    <PopularServiceItemCard key={service._id} service={service}>
    </PopularServiceItemCard>)
}       
</div>
</section>
      
 
     


            
    );
};

export default PopulerServices;