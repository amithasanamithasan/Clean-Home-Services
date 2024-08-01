
import Banner from "../Components/Layout/Banner/Banner";
import Container from "../utils/Container";
import Teamservices from "../Components/Layout/Team/Teamservices.jsx";
import PopulerServices from "../Components/PopulerServices/PopulerServices.jsx";
import { Helmet } from "react-helmet";


const Home = () => {
    return (
<div>
<Helmet>
      <title>HOME SERVICE CLEAN|Home</title>
  </Helmet>
      <Banner></Banner>
  <Container> </Container>
  <Teamservices></Teamservices>
 <PopulerServices></PopulerServices>
  
</div>

  



    );
};

export default Home;