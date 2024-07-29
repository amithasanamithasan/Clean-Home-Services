import img1  from"../../../assets/images/professional-services.jpg"
import img2 from"../../../assets/images/banner.jpg"
import img3 from"../../../assets/images/benefits.jpg"
import img4  from"../../../assets/images/professional-services.jpg"
import img5 from"../../../assets/images/benefits.jpg"

const Banner = () => {
    return (
        <div className="carousel w-full h-[600px]   ">
        <div id="slide1" className="carousel-item relative w-full  ">
          <img src={img1} className="w-full rounded-xl  " />
          <div className="absolute  rounded-xl flex items-center left-0 
          top-0 bottom-0 bg-gradient-to-r from-[#151515] to-[rgb(21,21,21,0)] ">
     
     <div className='  space-y-7 text-white pl-12 w-1/2  font-bold '>
        <h1 className='text-6xl text-green-400'> Affordable Price For Deep Cleaning  Servicing</h1>
        <p className=' font-bold  text-green-200'>There are many variations of passages of available, 
            but the majority have suffered alteration in some form </p>
<div className='p-8 flex'>
<button className="btn btn-active btn-secondary mr-4">Discover More</button>
<button className="btn btn-outline btn-warning">Latest Project</button>
</div>
     </div>
            
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide4" className="btn btn-circle mr-5">❮</a> 
            <a href="#slide2" className="btn btn-circle">❯</a>
            
          </div>
          
        </div> 
        <div id="slide2" className="carousel-item relative w-full">
        <img src={img2} className="w-full  rounded-xl " />
          <div className="absolute   rounded-xl flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide1" className="btn btn-circle mr-5">❮</a> 
            <a href="#slide3" className="btn btn-circle">❯</a>
          </div>
          
        </div> 
        <div id="slide3" className="carousel-item relative w-full">
          <img src={img3} className="w-full  rounded-xl " />
          <div className="absolute  rounded-xl  flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide2" className="btn btn-circle bg-zinc-950 mr-5">❮</a> 
            <a href="#slide4" className="btn btn-circle bg-red-600 ">❯</a>
          </div>
        </div> 
        <div id="slide4" className="carousel-item relative w-full">
          <img src={img5} className="w-full  rounded-xl " />
          <div className="absolute   rounded-xl  flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide3" className="btn btn-circle mr-5">❮</a> 
            <a href="#slide1" className="btn btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide5" className="carousel-item relative w-full">
          <img src={img4} className="w-full  rounded-xl " />
          <div className="absolute  rounded-xl  flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide3" className="btn btn-circle mr-5">❮</a> 
            <a href="#slide1" className="btn btn-circle">❯</a>
          </div>
        </div>
      </div>
    );
};

export default Banner;