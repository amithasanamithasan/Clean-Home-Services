import { MdOutlineAutorenew } from "react-icons/md";
import { register } from "swiper/element";
import SectionTitle from "../../../SectionTitle/SectionTitle";
import { useLoaderData } from "react-router-dom";


const AdminUpdateItem = () => {
    const Updateitem = useLoaderData();
    console.log(Updateitem);

    return (
        <div className="w-full p-6 bg-gradient-to-r from-blue-500 via-teal-400 to-green-500 rounded-lg shadow-lg text-orange-200 md:max-w-4xl mx-auto my-10">
        <SectionTitle heading="Update Item" subHeading="Update Properly" />

        <form  className="space-y-6 bg-green-200 p-8 rounded-lg shadow-md text-gray-800">
            <div className="flex flex-col">
                <label className="text-lg font-semibold">Service Name</label>
                <input
                    type="text"
                    name="name"
                    {...register("name", { required: true })}
                    className="mt-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                    placeholder="Enter the service name"
                />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col">
                    <label className="text-lg font-semibold">Category</label>
                    <select
                        defaultValue="default" 
                        {...register("category", { required: true })}
                        className="mt-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                    >
                        <option disabled value="default">Select a category</option>
                        <option value="BedBugs">BedBugs</option>
                        <option value="WaterTank">WaterTank</option>
                        <option value="WindowCleaning">WindowCleaning</option>
                        <option value="CarpetClean">CarpetClean</option>
                        <option value="KitchenCleaning">KitchenCleaning</option>
                        <option value="BathroomCleaning">BathroomCleaning</option>
                        <option value="UpholsteryCleaning">UpholsteryCleaning</option>
                        <option value="PostRenovation">PostRenovation</option>
                    </select>
                </div>

                <div className="flex flex-col">
                    <label className="text-lg font-semibold">Price</label>
                    <input
                        type="text"
                        name="price"
                        {...register("price", { required: true })}
                        className="mt-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                        placeholder="Enter the price"
                    />
                </div>
            </div>

            <div className="flex flex-col">
                <label className="text-lg font-semibold">Service Details</label>
                <textarea
                    {...register("service", { required: true })}
                    rows="4"
                    className="mt-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                    placeholder="Write details about the Service"
                />
            </div>

            <div className="flex flex-col">
                <label className="text-lg font-semibold">Upload Image</label>
                <input
                    type="file"
                    {...register("image", { required: true })}
                    className="mt-2 p-2 border border-gray-300 rounded-md cursor-pointer"
                />
            </div>

            <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 p-3 bg-gradient-to-r from-teal-500 to-green-600 text-white rounded-md hover:from-green-600 hover:to-teal-500 transition duration-200"
            >
                <MdOutlineAutorenew className="text-2xl" />
                Add new service
            </button>
        </form>

    
  
    </div>
);
};

export default AdminUpdateItem;