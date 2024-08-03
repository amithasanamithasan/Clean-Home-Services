import Cover from "../../../Components/Shared/Cover/Cover";
import PopularServiceItemCard from "../../../Components/Shared/PopularServiceItemCard/PopularServiceItemCard";


const MenuCategory = ({items ,title, img}) => {
    return (
        <div>
          {title && <Cover img={img} title="Our menu"></Cover>}  
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4 p-4 ">
{
    items.map(service=><PopularServiceItemCard key={service._id}service={service}>
</PopularServiceItemCard>)
}       

</div>
        </div>
    );
};

export default MenuCategory;