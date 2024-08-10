import Avilableservice from "../../../Components/Layout/Avilableservice/Avilableservice";
import Bathroomservice from "../../../Components/Layout/Bathroomservice/Bathroomservice";
import Bugbedservices from "../../../Components/Layout/Bugbedservices/Bugbedservices";
import CarpetServices from "../../../Components/Layout/Carpetservices/CarpetServices";
import Kichenservice from "../../../Components/Layout/Kichenservices/Kichenservice";
import PostRenovationServices from "../../../Components/Layout/PostRenovation/PostRenovationServices";
import Upholsteryservices from "../../../Components/Layout/Upholsteryservices/Upholsteryservices";




const Menu = () => {
    return (
        <div>
          <Avilableservice></Avilableservice>
          <Bugbedservices></Bugbedservices>
          <Bathroomservice></Bathroomservice>
         <Kichenservice></Kichenservice>
         <Upholsteryservices></Upholsteryservices>
         <PostRenovationServices></PostRenovationServices>
         <CarpetServices></CarpetServices>
        </div>
    );
};

export default Menu;