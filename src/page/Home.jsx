import img from"../assets/images/shutterstock.jpeg"
import Banner from "../Components/Layout/Banner/Banner";
import Container from "../utils/Container";
// import TeamServices from'../Components/TeamServices/TeamServices.js'

import Teamservices from "../Components/Layout/Team/Teamservices.jsx";
const Home = () => {
    return (
    <div>
      
        <Banner></Banner>
     <Container>
        <div className="flex my-10 gap-10">
            <div className="flex-[1] flex flex-col justify-between gap-10">
            <h1 className="text-4xl text-[#1f2020] font-bold font-serif">{' '}Quality Cleaning <br/>{' '}<span className="text-primary"> For Your Home </span></h1>
                <p className=" text-[#2fa5bd] font-serif font-semibold">  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora laborum iure aliquam rem explicabo doloribus molestiae ab, perferendis accusantium! Hic autem reprehenderit ratione, omnis architecto
                     cumque qui minus molestiae eos!</p>
         
            <div>
              <button className="btn btn-primary"> Book a Service</button> 
            
            </div>
            <div className="divider"> </div>

                <div className="flex items-center gap-3">
                <div className="avatar-group -space-x-6 rtl:space-x-reverse">
  <div className="avatar">
    <div className="w-12">
      <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
    </div>
  </div>
  <div className="avatar">
    <div className="w-12">
      <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
    </div>
  </div>
  <div className="avatar">
    <div className="w-12">
      <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
    </div>
  </div>
  <div className="avatar">
    <div className="w-12">
      <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
    </div>
  </div>
</div>
</div>
    <p>Rated 5 out of 5 by our clients</p>
</div>

        
<div className="flex-[1] h-[300px] rounded-xl overflow-hidden">
  <img src={img} className="w-full h-full object-cover " alt=""></img>
            
 </div>

  </div>
  </Container>
  <div>
  <Teamservices></Teamservices>
</div>
</div>
    );
};

export default Home;