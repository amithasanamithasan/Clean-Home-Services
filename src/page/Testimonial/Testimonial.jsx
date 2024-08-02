import { useEffect } from "react";
import { useState } from "react";

import { Navigation } from "swiper/modules";
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/navigation';
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
const Testimonial = () => {
const [reviewss , setReviews]=useState([]);
const [loadingdata , setLoadingData]=useState(true);

useEffect(()=>{
    fetch('reviews.json')
    .then(res=>res.json())
    .then(data=> setReviews(data))
setLoadingData(false);
},[])



    return (
        <section className="my-20">
    
    <SectionTitle subHeading="What Our Client Say"
        heading="Testimonials">

        </SectionTitle>

        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
   
   {
    reviewss.map(review=> <SwiperSlide key={review._id} >
        <div className=" flex flex-col items-center mx-24 my-16">
        <Rating
      style={{ maxWidth: 180 }}
      value={review.rating}
      readOnly
    />
            <p className="py-8">{review.details}</p>
            <img  className="rounded-full w-40 h-40"src={review.image} alt="" />
            <h3 className="text-2xl text-orange-400">{review.name}</h3>
        </div>
    </SwiperSlide>)
   }
      </Swiper>
       </section>
    );
};

export default Testimonial;