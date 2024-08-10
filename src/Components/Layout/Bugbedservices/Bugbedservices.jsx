import usePopulerMenu from "../../../Hooks/usePopulerMenu";
import SectionTitle from "../../SectionTitle/SectionTitle";
import BedBugscard from "../../Shared/BedBugscard/BedBugscard";
import Cover from "../../Shared/Cover/Cover";
import bugimg from"../../../assets/images/Remove-Bed-Bugs.png";
import { Link } from "react-router-dom";

const Bugbedservices = () => {
    const [BedBugs]=usePopulerMenu();
    const bugbedsservice=BedBugs.filter(item=> item.category==='BedBugs');

    return (
              <section>
         <Cover img={bugimg} title="BedBugs Services"></Cover>
        <SectionTitle subHeading="Our Avilable Services"
        heading="HOME CLEANING SERVICES" >

        </SectionTitle>
<h1 className="text-3xl font-extrabold text-emerald-600 text-center uppercase "></h1>
<div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4 p-4 ">
{
   bugbedsservice.map(bug=> <BedBugscard key={bug._id} bug={bug}></BedBugscard>)
    
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

export default Bugbedservices;