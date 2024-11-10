
import SectionTitle from '../../../SectionTitle/SectionTitle';
import { useForm } from 'react-hook-form';
import { MdOutlineAutorenew } from "react-icons/md";
import userAxiosPublic from '../../../../Hooks/userAxiosPublic';

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
const AddItemsServices = () => {
    const { register, handleSubmit } = useForm();
    const axiosPublic = userAxiosPublic();

    const onSubmit = async (data) => {
        console.log(data);
const imageFile= {image: data.image[0]}
        //image upload to imagbb and then get an url
const res =await axiosPublic.post (image_hosting_api,imageFile ,{
    headers:{
        "content-type": "multipart/form-data"
    },
});
 console.log(res.data)
    };

    return (
        <div className="w-full p-6 bg-gradient-to-r from-blue-500 via-teal-400 to-green-500 rounded-lg shadow-lg text-orange-200 md:max-w-4xl mx-auto my-10">
            <SectionTitle heading="Add New Service Item" subHeading="Share what's new with customers" />

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 bg-green-200 p-8 rounded-lg shadow-md text-gray-800">
                <div className="flex flex-col">
                    <label className="text-lg font-semibold">Service Name</label>
                    <input
                        type="text"
                        name="name"
                        {...register("name", { required: true })}
                        className="mt-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                        placeholder="Enter the recipe name"
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2  gap-4">
                    <div className="flex flex-col ">
                        <label className="text-lg font-semibold ">Category Services</label>
                        <select
                          defaultValue="default"  {...register("category", { required: true })}
                            className="mt-2 p-3 border border-gray-300 rounded-md focus:outline-none  focus:border-blue-500"
                        >
                            <option disabled value="default">Select a category</option>
                            <option value="BedBugs">BedBugs</option>
                            <option value="WaterTank">WaterTank</option>
                            <option value="WindowCleaning">WindowCleaning</option>
                            <option value="CarpetClean">CarpetClean</option>
                            <option value="KitchenCleaning">KitchenCleaning</option>
                            <option value="BathroomCleaning">BathroomCleaning</option>
                            <option value="UpholsteryCleaning">UpholsteryCleaning</option>
                            <option value="KitchenCleaning">KitchenCleaning</option>
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
                        {...register("recipe", { required: true })}
                        rows="4"
                        className="mt-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                        placeholder="Write details about the recipe"
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
                    className="w-full flex items-center justify-center gap-2 p-3 
                    bg-gradient-to-r from-teal-500 to-green-600 text-white rounded-md
                     hover:from-green-600 hover:to-teal-500 transition duration-200"
                >
                   <MdOutlineAutorenew className='text-2xl'/>
                    Add new service
                </button>
            </form>
        </div>
    );
};

export default AddItemsServices;
