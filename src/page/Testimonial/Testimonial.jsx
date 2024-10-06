import 'swiper/css';
import 'swiper/css/navigation';
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css';
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import useReviews from "../../Hooks/useReviews";
import Marquee from "react-fast-marquee";

const Testimonial = () => {
    const [reviews] = useReviews();

    return (
        <section>
            <SectionTitle subHeading="What Our Clients Say" heading="Testimonials" />

            <div className="py-2 text-center m-2">
                <Marquee
                    direction="left"
                    speed={50}
                    pauseOnHover={true}
                    gradient={false} 
                    className="overflow-hidden"
                >
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-[1px]">
                        {reviews.map((review) => (
                            <div key={review._id} className="w-full max-w-sm mb-4 bg-white border-[1px] border-[#1F2937]
                             hover:border-indigo-900 cursor-pointer rounded-lg shadow dark:bg-gray-600 dark:border-gray-800">
                                <div className="flex flex-col items-center pb-10">
                                    <img className="w-20 h-20 mb-2 py-1 rounded-full shadow-lg" src={review.image} alt={review.name} />
                                    <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{review.name}</h5>
                                    <span className="text-sm font-bold text-gray-500 dark:text-gray-400">{review.details}</span>
                                    <div className="flex mt-4 md:mt-6">
                                        <Rating style={{ maxWidth: 180 }} value={review.rating} readOnly />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </Marquee>
            </div>
        </section>
    );
};

export default Testimonial;
