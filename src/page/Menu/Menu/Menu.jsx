import PopulerServices from "../../../Components/PopulerServices/PopulerServices";
import Cover from "../../../Components/Shared/Cover/Cover";


import coverimg from "../../../assets/images/homecover.jpg"
const Menu = () => {
    return (
        <div>
       
            <Cover img={coverimg} title="available at your services"></Cover>
          <PopulerServices></PopulerServices>
          <Cover img={coverimg} title="available at your services"></Cover>
          <PopulerServices></PopulerServices>
          <Cover img={coverimg} title="available at your services"></Cover>
          <PopulerServices></PopulerServices>
          <Cover img={coverimg} title="available at your services"></Cover>
          <PopulerServices></PopulerServices>
          <Cover img={coverimg} title="available at your services"></Cover>
          <PopulerServices></PopulerServices>
        </div>
    );
};

export default Menu;