

const AddServiceCard = ({item}) => {
    const { title,image,price,description}=item;
    return (
      

<div className="max-w-sm  border-2
 border-x-fuchsia-700 border-t-indigo-700 border-b-indigo-700
 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700    bg-gradient-to-r
  from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">
    <figure>
        <img className="rounded-t-lg w-full h-[200px]" src={image} alt="" />
    </figure>
  
    <div className="p-2 ">
        <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
        </a>
        <p className="mb-3 font-mono text-1xl text-white dark:text-gray-400">{description}</p>
        <p className= "   font-serif font-semibold text-3xl text-black text-right ">TK-{price}</p>
        <a href="#" className="inline-flex  items-center px-3 py-3 text-sm font-medium text-center
         text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none
          focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
           ADD TO CART
             <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a>
       
    </div>
</div>

    );
};

export default AddServiceCard;