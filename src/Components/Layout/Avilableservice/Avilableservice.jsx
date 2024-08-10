import usePopulerMenu from "../../../Hooks/usePopulerMenu";
import SectionTitle from "../../SectionTitle/SectionTitle";
import AvilableserviceItemCard from "../../Shared/AvilableserviceItemCard/AvilableserviceItemCard";
import Cover from "../../Shared/Cover/Cover";
import cover1 from"../../../assets/images/homecover.jpg"

const Avilableservice = () => {
    const [avilable]=usePopulerMenu();
 
    const avilablemenu=avilable.filter(item=>item.status==='Available');

    return (
        <section>
            <Cover img={cover1} title="Avilable Services"></Cover>
        <SectionTitle subHeading="Our Avilable Services"
        heading="HOME CLEANING SERVICES">

        </SectionTitle>
<h1 className="text-3xl font-extrabold text-emerald-600 text-center uppercase "></h1>
<div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4 p-4 ">
{
   avilablemenu.map(avil=> <AvilableserviceItemCard key={avil._id} avil={avil}></AvilableserviceItemCard>)
    
}   

   
</div>
<div className="flex justify-center mx-auto mt-4">
<button className="btn btn-outline border-0 border-b-4">Available Service here</button>
</div>

</section>
    );
};

export default Avilableservice;