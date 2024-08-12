

const KichenCard = ({kichen}) => {
    const { title,image,price,description}=kichen;
    return (
        <div className="card  border-2 border-x-blue-600 border-y-fuchsia-500  shadow-xl bg-gradient-to-r from-violet-500 to-fuchsia-500">
      <figure>
        <img className="w-full h-[200px]"
          src={image} alt="Clean" />
      </figure>
      <div className="card-body  ">
        <h2 className="font-serif text-2xl font-extrabold rounded-lg text-red-500 bg-green-500 uppercase text-center">{title}</h2>
        <p className="text-2xl">{description}</p>
        <div className="card-actions justify-end">
            <p className="text-3xl text-yellow-500 font-serif bg-black">{price}</p>

        </div>
      </div>
    </div>
    );
};

export default KichenCard;