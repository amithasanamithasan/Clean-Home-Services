import usePopulerMenu from "../../../Hooks/usePopulerMenu";
import SectionTitle from "../../SectionTitle/SectionTitle";
import Cover from "../../Shared/Cover/Cover";

import upholimg from"../../../assets/images/Upholsteryservices(7).jpeg"
import UpholsteryCard from "../../Shared/Upholsterycard/UpholsteryCard";
import { Link } from "react-router-dom";
const Upholsteryservices = () => {
    const [upholstery]=usePopulerMenu();
    const Upholsteryservice=upholstery.filter(item=> item.category==='UpholsteryCleaning');
    return (
        <section>
        <Cover  img={upholimg}title="Upholstery services"></Cover>
    <SectionTitle subHeading="Our Upholstery services"
    heading="HOME CLEANING SERVICES">

    </SectionTitle>
<h1 className="text-3xl font-extrabold text-emerald-600 text-center uppercase "></h1>
<div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4 p-4 ">
{
Upholsteryservice.map(uphols=> <UpholsteryCard key={uphols._id} uphols={uphols}></UpholsteryCard>)

}       
</div>
<div className="flex justify-center mx-auto mt-4">
<Link to="/orderservice">
<button className="btn btn-outline border-0 border-b-4">Available Service here</button>
</Link>
</div>
</section>
    );
};

export default Upholsteryservices;