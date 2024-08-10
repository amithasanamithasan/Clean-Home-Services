import usePopulerMenu from "../../../Hooks/usePopulerMenu";
import SectionTitle from "../../SectionTitle/SectionTitle";
import Cover from "../../Shared/Cover/Cover";
import carpetimg from"../../../assets/images/carpetcover.png"
import CarpetCard from "../../Shared/Carpetcard/CarpetCard";
import { Link } from "react-router-dom";

const CarpetServices = () => {
  
        const [carpet]=usePopulerMenu();
        const carpetservice=carpet.filter(item=> item.category==='CarpetClean');
        return (
            <section>
            <Cover  img={carpetimg}title="carpet services"></Cover>
        <SectionTitle subHeading="Our Carpet Cleaning Services"
        heading="HOME CLEANING SERVICES">
    
        </SectionTitle>
    <h1 className="text-3xl font-extrabold text-emerald-600 text-center uppercase "></h1>
    <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4 p-4 ">
    {
    carpetservice.map(carpet=> <CarpetCard key={carpet._id} carpet={carpet}></CarpetCard>)
    
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

export default CarpetServices;