import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import Cover from "../../../Components/Shared/Cover/Cover";
import orderimg from "../../../assets/images/benefits.jpg"
import 'react-tabs/style/react-tabs.css';
import { useState } from "react";
import usePopulerMenu from "../../../Hooks/usePopulerMenu";
 
import OrderTab from "../OrderTab/OrderTab";

const OrderServices = () => {
    const [tabIndex,setTabIndex]=useState(0);
    const [menu] =usePopulerMenu();


    const BedBugsRemove=menu.filter(item=> item.category==='BedBugs');
    const CleaningWatertank=menu.filter(item=> item.category==='WaterTank')
    const CleaningWindow=menu.filter(item=> item.category==='WindowCleaning')
    const CleaningCarpet=menu.filter(item=> item.category==='CarpetClean')
    const CleaningKitchen=menu.filter(item=> item.category==='kitchencleaning')
    const CleaningBathroom=menu.filter(item=> item.category==='BathroomCleaning')
    const UpholsterysCleaning=menu.filter(item=> item.category==='UpholsteryCleaning')
    const PostsRenovation=menu.filter(item=> item.category==='PostRenovation')
    return (
        <div>

            <Cover img={orderimg} title="Order Sercvices Here"></Cover>
            <Tabs defaultIndex={tabIndex} onSelect={(index) =>setTabIndex(index)}>

              
            <TabList className="flex flex-wrap justify-between bg-gray-100 p-2">
                    <Tab className="px-4 py-2 text-sm 
                    font-medium text-gray-800
                     bg-white rounded-md cursor-pointer
                      hover:bg-green-400  
                      focus:outline-none focus:ring
                       focus:ring-blue-300">
                        BedBugs
                    </Tab>
                    <Tab className="px-4 py-2 text-sm font-medium
                     text-gray-800 bg-white rounded-md cursor-pointer
                      hover:bg-green-400 focus:outline-none focus:ring
                       focus:ring-blue-300">
                        WaterTank
                    </Tab>
                    <Tab className="px-4 py-2 text-sm font-medium
                     text-gray-800 bg-white rounded-md cursor-pointer
                      hover:bg-green-400 focus:outline-none 
                      focus:ring focus:ring-blue-300">
                        WindowCleaning
                    </Tab>
                    <Tab className="px-4 py-2 text-sm font-medium
                     text-gray-800 bg-white rounded-md cursor-pointer
                      hover:bg-green-400  focus:outline-none focus:ring
                       focus:ring-blue-300">
                        CarpetClean
                    </Tab>
                    <Tab className="px-4 py-2 text-sm font-medium
                     text-gray-800 bg-white rounded-md cursor-pointer
                      hover:bg-green-400  focus:outline-none focus:ring
                       focus:ring-blue-300">
                        kitchencleaning
                    </Tab>
                    <Tab className="px-4 py-2 text-sm font-medium text-gray-800
                     bg-white rounded-md cursor-pointer hover:bg-green-400
                       focus:outline-none focus:ring focus:ring-blue-300">
                        BathroomCleaning
                    </Tab>
                    <Tab className="px-4 py-2 text-sm font-medium text-gray-800
                     bg-white rounded-md cursor-pointer hover:bg-green-400
                       focus:outline-none focus:ring focus:ring-blue-300">
                        UpholsteryCleaning
                    </Tab>
                    <Tab className="px-4 py-2 text-sm font-medium text-gray-800
                     bg-white rounded-md cursor-pointer hover:bg-green-400
                       focus:outline-none focus:ring focus:ring-blue-300">
                        PostRenovation
                    </Tab>
                </TabList>

  <TabPanel>
  <OrderTab items={BedBugsRemove}></OrderTab>
  </TabPanel>
  <TabPanel>
  <OrderTab items={CleaningWatertank}></OrderTab>
  </TabPanel>
  <TabPanel>
  <OrderTab items={CleaningWindow}></OrderTab>
  </TabPanel>
  <TabPanel>
  <OrderTab items={CleaningCarpet}></OrderTab>
  </TabPanel>
  <TabPanel>
  <OrderTab items={CleaningKitchen}></OrderTab>
  </TabPanel>
  <TabPanel>
  <OrderTab items={CleaningBathroom}></OrderTab>
  </TabPanel>
  <TabPanel>
  <OrderTab items={UpholsterysCleaning}></OrderTab>
  </TabPanel>
  <TabPanel>
  <OrderTab items={PostsRenovation}></OrderTab>
  </TabPanel>
</Tabs>
        </div>
    );
};

export default OrderServices;