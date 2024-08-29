

const PopularServiceItemCard = ({service}) => {
    const {title,image,description}=service;
    return (
    <div className="card  bg-gradient-to-r from-green-300 to-slate-100     
    border border-x-green-600 border-y-green-600  shadow-xl">
  <figure>
    <img className="w-full h-[200px]"
      src={image} alt="Clean" />
  </figure>
  <div className="card-body">
    <h2 className="font-serif rounded-full text-2xl font-extrabold
     text-red-500 bg-green-500 
    uppercase text-center">{title}</h2>
    <p className="text-2xl  ">{description}</p>
    <div className="card-actions justify-end">
        {/* <p className="text-3xl text-yellow-500 font-serif bg-black">{price}</p> */}
 
    </div>
  </div>
</div>




    );
};

export default PopularServiceItemCard;