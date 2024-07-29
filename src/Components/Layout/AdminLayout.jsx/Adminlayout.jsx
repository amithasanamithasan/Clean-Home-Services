import { Outlet } from "react-router-dom";

const Adminlayout = () => {
    return (
        <div className=" flex h-screen">
            <div className="bg-green-500 flex-[1]">
         <h1>sidebar</h1>
            </div>
            <div className="bg-red-500 flex-[3]">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Adminlayout;