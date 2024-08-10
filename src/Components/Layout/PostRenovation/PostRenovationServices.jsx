import usePopulerMenu from "../../../Hooks/usePopulerMenu";
import SectionTitle from "../../SectionTitle/SectionTitle";
import Cover from "../../Shared/Cover/Cover";
import PostrenovatCard from "../../Shared/PostrenovatCard/PostrenovatCard";
import postimg from"../../../assets/images/PostRenovationServices (7).jpeg"
import { Link } from "react-router-dom";

const PostRenovationServices = () => {
    const [postrenovat]=usePopulerMenu();
    const postrenovatservice=postrenovat.filter(item=> item.category==='PostRenovation');
    return (
        <section>
        <Cover  img={postimg}title="PostRenovation services"></Cover>
    <SectionTitle subHeading="Our PostRenovation Services"
    heading="HOME CLEANING SERVICES">

    </SectionTitle>
<h1 className="text-3xl font-extrabold text-emerald-600 text-center uppercase "></h1>
<div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4 p-4 ">
{
postrenovatservice.map(post=> <PostrenovatCard key={post._id} post={post}></PostrenovatCard>)

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

export default PostRenovationServices;