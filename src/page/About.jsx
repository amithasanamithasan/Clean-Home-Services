import about1 from"../assets/images/images about.jpg"
import about2 from"../assets/images/images about1.jpeg"

const About = () => {
    return (
        <div className="hero min-h-screen bg-green-200 ">
        <div className="hero-content flex-col lg:flex-row ">
            <div className='lg:w-1/2 md:w-1/2 relative h-600   rounded-md  mr-10  '>
            <img src={about2} className="max-w-sm  rounded-lg shadow-2xl" />
             
          <img  src={ about1} className="max-w-sm absolute w-90 h-50 
          right-4 border-4 border-purple-600 top-10
           rounded-lg shadow-2xl" />
            </div>
      
          <div className='lg:w-1/2  space-y-5 p-4 md:space-y-5 '>
        <h1 className='text-2xl font-bold text-orange-700 '>About Us</h1>
            <h1 className="text-4xl  font-bold p-2 ">
               We are qualified & of experience in this field</h1>
             <p className="p-2 font-serif">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour,
                 or randomised words which donot look even slightly believable..</p>
            <p className=" p-2  font-serif">the majority have suffered alteration in some form, by injected humour, or randomised words which donot look even slightly believable.</p>
            <button className="btn bg-[#19d056]  ">Get More Info</button>
          </div>
        </div>
      </div>
        
    );
};

export default About;