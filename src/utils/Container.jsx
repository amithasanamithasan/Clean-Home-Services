import img from"../assets/images/shutterstock.jpeg"

const Container = () => {
    return (
        <div className="w-full max-w[1300px] px-[25px] mx-auto "> 
          <div className="flex my-10 gap-10">
            <div className="flex-[1] flex flex-col justify-between gap-10">
            <h1 className="text-4xl text-[#1f2020] font-bold font-serif">{' '}Quality Cleaning <br/>{' '}<span className="text-primary"> For Your Home </span></h1>
                <p className=" text-[#2fa5bd] font-serif font-semibold">  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora laborum iure aliquam rem explicabo doloribus molestiae ab, perferendis accusantium! Hic autem reprehenderit ratione, omnis architecto
                     cumque qui minus molestiae eos!</p>
            <div>
              <button className="btn btn-primary"> Book a Service</button> 
            
            </div>
            <div className="divider ">
              
            </div>

            </div>

        
<div className="flex-[1] h-[300px] rounded-xl overflow-hidden">
  <img src={img} className="w-full h-full object-cover " alt=""></img>
            
 </div>

  </div>
        </div>
    );
};

export default Container;