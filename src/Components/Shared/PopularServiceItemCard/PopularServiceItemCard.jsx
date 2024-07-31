

const PopularServiceItemCard = ({service}) => {
    const {title,image,price,description}=service;
    return (
    <div className="card bg-base-100  shadow-xl">
  <figure>
    <img className="w-full h-[200px]"
      src={image} alt="Clean" />
  </figure>
  <div className="card-body">
    <h2 className="font-serif text-1xl font-extrabold text-red-500 bg-green-500 uppercase text-center">{title}</h2>
    <p>{description}</p>
    <div className="card-actions justify-end">
        <p className="text-3xl text-yellow-500 font-serif bg-black">{price}</p>
      <button className="btn btn-primary">ServiceNow</button>
    </div>
  </div>
</div>




    );
};

export default PopularServiceItemCard;