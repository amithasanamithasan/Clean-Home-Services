import { MdOutlineAutorenew } from "react-icons/md";
import SectionTitle from "../../../SectionTitle/SectionTitle";
import { useLoaderData } from "react-router-dom";
import { useForm } from 'react-hook-form';
import userAxiosPublic from "../../../../Hooks/userAxiosPublic";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
const AdminUpdateItem = () => {
  
 const {_id,price,name,category,title,
        description, service,
image }= useLoaderData();
    // const item =useLoaderData();
    // console.log(item)
    const { register, handleSubmit,reset } = useForm();
    const axiosPublic = userAxiosPublic();
    const axiosSecure = useAxiosSecure();
    const onSubmit = async (data) => {
        try {
            console.log(data);

            const imageFile = { image: data.image[0] };
            const res = await axiosPublic.post(image_hosting_api, imageFile, {
                headers: {
                    "content-type": "multipart/form-data"
                },
            });

            if (res.data.success) {
                const serviceItem = {
                    name: data.name,
                    category: data.category,
                    price: parseFloat(data.price),
                    service: data.service,
                    image: res.data.data.display_url
                };

                const serviceresponse = await axiosSecure.patch(`/service/${_id}`, serviceItem);
                console.log(serviceresponse.data);

      if(serviceresponse.data.modifiedCount > 0){
                    reset();
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${data.name}New Service Item has been saved`,
                        showConfirmButton: false,
                        timer: 1500
                      });
                }
            }
        } catch (error) {
            toast.error('An error occurred. Please try again.');
            console.error(error);
        }
    };

    return (
        <div className="w-full p-6 bg-gradient-to-r from-blue-500 via-teal-400 to-green-500 rounded-lg shadow-lg text-orange-200 md:max-w-4xl mx-auto my-10">
        <SectionTitle heading="Update Item" subHeading="Update Properly" />

        <form  onSubmit={handleSubmit(onSubmit)} className="space-y-6 bg-green-200 p-8 rounded-lg shadow-md text-gray-800">
            <div className="flex flex-col">
                <label className="text-lg font-semibold">Service Name</label>
                <input 
               defaultValue={name}
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
                       defaultValue={category}
                        {...register("category", { required: true })}
                        className="mt-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                    >
                        <option defaultValue='default'>Select a category</option>
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
                      defaultValue={price}
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
                defaultValue={service}
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
                Update new service
            </button>
        </form>

    
  
    </div>
);
};

export default AdminUpdateItem;