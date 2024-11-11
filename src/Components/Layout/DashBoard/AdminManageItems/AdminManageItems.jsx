import { FaEdit, FaTrashAlt } from "react-icons/fa";
import usePopulerMenu from "../../../../Hooks/usePopulerMenu";
import SectionTitle from "../../../SectionTitle/SectionTitle";
import { Link } from "react-router-dom";


const AdminManageItems = () => {
    const [servicesdata , refetch]= usePopulerMenu();

const handelAdminmanageDelete=(item)=>{

}

    return (
        < div>
        <SectionTitle subHeading="SERVICES ITEMS ALL" heading="MANAGE ALL ITEMS"> </SectionTitle>
         <div className="p-4">
         <div className="">
             <div className="flex  justify-start  top-20 mb-8 ">
                 <h1 className="text-3xl p-4 font-bold-sm  text-emerald-800 ">TOTAL ITEMS:{servicesdata.length}</h1>
            <div>
           
            </div>
         
             </div>
             <table className="w-full bg-slate-900 border-3 rounded-lg  overflow-x-auto">
                 <thead>
                     <tr> 
                 
                         <th className="px-4 py-2 border-b text-white">SL</th>
                         <th className="px-4 py-2 border-b text-white">ITEM IMAGE</th>
                         <th className="px-4 py-2 border-b text-white">ITEM NAME</th>
                         <th className="px-4 py-2 border-b text-white">PRICE</th>
                         <th className="px-4 py-2 border-b text-white">ACTION</th>
                         <th className="px-4 py-2 border-b text-white">ACTION</th>
                     </tr>
                 </thead>
                 <tbody>
                     {servicesdata.map((item,index) => (
                         
                         <tr key={item._id} className="text-center">
                             <th className="text-yellow-600">{index +1}</th>
                             <td className="px-4 py-2 border-b ">
                                 <img src={item.image} alt={item.name} 
                                 className="w-24 h-20 object-cover avatar rounded-md mx-auto" />
                             </td>
                             <td className="px-4 py-2 border-b  text-white">{item.title}{item.name}</td>
                             <td className="px-4 py-2 border-b text-white">${item.price}</td>
                             <td className="px-4 py-2 border-b">
                                {/* updateItems admin  */}
                                <Link to={''}> 
                                <button  className="bg-yellow-500 text-white p-2 rounded">
                                <FaEdit />
                             </button>
                             </Link>
 
                             </td>
                             <td className="px-4 py-2 border-b">
                                 <button onClick={()=>handelAdminmanageDelete(item)} className="bg-red-500 text-white p-2 rounded">
                             
                                 <FaTrashAlt />
                                 </button>
                             </td>
                         </tr>
                     ))}
                 </tbody>
             </table>
         </div>
     </div>
     </div>
     );
 };

export default AdminManageItems;