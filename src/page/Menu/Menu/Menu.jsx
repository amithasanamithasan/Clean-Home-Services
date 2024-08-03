
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import Cover from "../../../Components/Shared/Cover/Cover";
import usePopulerMenu from "../../../Hooks/usePopulerMenu";

import bedbugs from"../../../assets/images/Remove-Bed-Bugs.png"
import coverimg from "../../../assets/images/homecover.jpg"
import watertank from "../../../assets/images/watertank.jpeg"
// import window from "../../../assets/images/WindowCleaning1.jpeg"
// import carpets from "../../../assets/images/carpetcover.png"
import MenuCategory from "../MenuCategory/MenuCategory";
const Menu = () => {
    const[menu]=usePopulerMenu();

    const AvilableserviceOffer=menu.filter(item=> item.status==='Available');
    const BedBugsRemove=menu.filter(item=> item.category==='BedBugs');
    const CleaningWatertank=menu.filter(item=> item.category==='WaterTank')
    const CleaningWindow=menu.filter(item=> item.category==='WindowCleaning')
    const CleaningCarpet=menu.filter(item=> item.category==='CarpetClean')
    const CleaningKitchen=menu.filter(item=> item.category==='kitchencleaning')
    const CleaningBathroom=menu.filter(item=> item.category==='BathroomCleaning')
    const UpholsterysCleaning=menu.filter(item=> item.category==='UpholsteryCleaning')
    const PostsRenovation=menu.filter(item=> item.category==='PostRenovation')
    return (
        <div>
    
            <Cover img={coverimg} title="available at your services"></Cover>
               {/* main cover */}
    <SectionTitle subHeading="our services menu avilable" heading="Clean your home"> </SectionTitle>
    
        {/* avilable services  */}
        <MenuCategory items={AvilableserviceOffer}></MenuCategory>
{/* BedBUgs cleaning */}
<MenuCategory 
items={BedBugsRemove}
title='BedBugs'
img={bedbugs}></MenuCategory>

<MenuCategory items={CleaningWatertank}
title={'WaterTank'} 
img={watertank}></MenuCategory>

<MenuCategory items={CleaningWindow}
title={'WindowCleaning'} 
img={window}></MenuCategory>

<MenuCategory items={ CleaningCarpet}
title={'CarpetClean'} 
img=""></MenuCategory>


<MenuCategory items={ CleaningKitchen}
title={'CleaningKitchen'} 
img=""></MenuCategory>


<MenuCategory items={ CleaningBathroom}
title={' CleaningBathroom'} 
img=""></MenuCategory>

<MenuCategory items={UpholsterysCleaning}
title={'UpholsterysCleaning'} 
img=""></MenuCategory>

<MenuCategory items={ PostsRenovation}
title={'PostsRenovation'} 
img=""></MenuCategory>
        </div>
    );
};

export default Menu;