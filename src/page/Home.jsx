import img from"../assets/images/benefits.jpg"
import Banner from "../Components/Layout/Banner/Banner";

const Home = () => {
    return (
    <div>
        <Banner></Banner>
        <div className="w-full max-w[1200px] "> 
        <div className="flex">
            <div>
            <h1>Quality Cleaning For Your Home </h1>
                <p>  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora laborum iure aliquam rem explicabo doloribus molestiae ab, perferendis accusantium! Hic autem reprehenderit ratione, omnis architecto
                     cumque qui minus molestiae eos!</p>
         
            <div>
              <button> Book a Service</button> 
              <button>Read More</button> 
            </div>
            <div className="divider"> </div>

                <div>
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
        
<div>
  <img src={img} alt=""></img>
            
 </div>
  </div>
  </div>
  </div>
    );
};

export default Home;