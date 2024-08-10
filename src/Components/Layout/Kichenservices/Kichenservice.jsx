import usePopulerMenu from "../../../Hooks/usePopulerMenu";
import Cover from "../../Shared/Cover/Cover";
import kichenImg from"../../../assets/images/kichencover.jpg"
import SectionTitle from "../../SectionTitle/SectionTitle";
import KichenCard from "../../Shared/KichenCard/KichenCard";

const Kichenservice = () => {
    const [kichen]=usePopulerMenu();
    const KichenServices=kichen.filter(item=> item.category==='kitchencleaning');
    return (
        <section>
        <Cover img={kichenImg}title="Kichen Services"></Cover>
    <SectionTitle subHeading="Our Kichen Services"
    heading="HOME CLEANING SERVICES">

    </SectionTitle>
<h1 className="text-3xl font-extrabold text-emerald-600 text-center uppercase "></h1>
<div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4 p-4 ">
{
KichenServices.map(kichen=> <KichenCard key={kichen._id} kichen={kichen}></KichenCard>)

}       
</div>
<div className="flex justify-center mx-auto mt-4">
<button className="btn btn-outline border-0 border-b-4">Available Service here</button>
</div>
</section>
    );
};

export default Kichenservice;