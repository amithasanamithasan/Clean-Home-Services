import usePopulerMenu from "../../../Hooks/usePopulerMenu";
import SectionTitle from "../../SectionTitle/SectionTitle";
import BathroomCard from "../../Shared/BathroomCard/BathroomCard";
import Cover from "../../Shared/Cover/Cover";
import bathimg from"../../../assets/images/bathroom (7).jpeg"
import { Link } from "react-router-dom";

const Bathroomservice = () => {
  
        const [Bathroom]=usePopulerMenu();
        const bathroomservice=Bathroom.filter(item=> item.category==='BathroomCleaning');
    
        return (
                  <section>
                <Cover img={bathimg}title="Bathroom cleaning Services"></Cover>
            <SectionTitle subHeading="Our Avilable Services"
            heading="HOME CLEANING SERVICES">
    
            </SectionTitle>
    <h1 className="text-3xl font-extrabold text-emerald-600 text-center uppercase "></h1>
    <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4 p-4 ">
    {
       bathroomservice.map(bath=> <BathroomCard key={bath._id} bath={bath}></BathroomCard>)
        
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

export default Bathroomservice;