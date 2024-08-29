

const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className=" mx-auto text-center md:w-4/12 my-8">
        <p className="text-green-600  font-sans text-3xl mb-2 font-bold ">---{subHeading}---</p>
        <h3 className="text-3xl font-extralight  text-orange-500 uppercase border-y-4 py-4">{heading}</h3>
    </div>
    );
};

export default SectionTitle;