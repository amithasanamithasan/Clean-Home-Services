import { useState } from "react";

const PopularServiceItemCard = ({ service }) => {
    const { title, image, description } = service;
    const [isReadMore, setIsReadMore] = useState(false);

    const toggleReadMore = () => {
        setIsReadMore(!isReadMore);
    };
    const truncateText = (text, maxLength) => {
      if (text.length <= maxLength) return text;
      return text.slice(0, maxLength) + '...';
  };
    return (
        <div className="card bg-gradient-to-r from-green-300 to-slate-100 border border-x-green-600 border-y-green-600 shadow-xl">
            <figure>
                <img className="w-full h-[200px]" src={image} alt={title} />
            </figure>
            <div className="card-body">
                <h2 className="font-serif rounded-full text-xl md:text-2xl font-extrabold text-red-500 bg-green-500 uppercase text-center">
                    {title}
                </h2>
                {isReadMore ? description : truncateText(description, 100)}
                {description.length > 100 && (
                     <button
               
               onClick={toggleReadMore}
               className="mt-2 text-black underline  font-semibold "
           >
               {isReadMore ? "Show Less" : "Read More"}
           </button>
                )}
             

              <div className="card-actions justify-end">
                    {/* Other card actions or price display can go here */}
                </div>
            </div>
        </div>
    );
};

export default PopularServiceItemCard;