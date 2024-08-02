
import Banner from "../Components/Layout/Banner/Banner";
import Container from "../utils/Container";

import PopulerServices from "../Components/PopulerServices/PopulerServices.jsx";
import { Helmet } from "react-helmet";
import Testimonial from "./Testimonial/Testimonial.jsx";


const Home = () => {
    return (
<div>
<Helmet>
      <title>HOME SERVICE CLEAN|Home</title>
  </Helmet>
<Banner></Banner>
<Container> </Container>
<PopulerServices></PopulerServices>
<Testimonial></Testimonial>
  
</div>

  



    );
};

export default Home;