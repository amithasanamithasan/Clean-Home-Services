import logo1 from"../assets/images/logo1.png"

import IframeG from "../utils/IframeG";
import ContactLogo from "../utils/ContactLogo";
import { Helmet } from "react-helmet";

const Contact = () => {
    return (
          <>   
            <Helmet>
      <title>HOME SERVICE CLEAN|ContactUs</title>
  </Helmet>
      <div className="w-full">
        <div className="bg-[#3057ad] lg:max-w-full rounded-lg mx-auto px-4">
          <div className="grid md:grid-cols-2 items-center gap-8 sm:p-10 p-4 font-sans">
            <div>
                <div className="flex gap-2">
                <img src={logo1} alt="Contact Us" className="w-[100px] rounded-lg outline avatar h-auto"/>
              <h1 className="text-4xl font-bold font-serif  text-white mt-4">Affordable Price For Deep <span className="text-3xl text-green-500 font-mono space-x-1"> Home Cleaning  Servicing</span> </h1>
             
                </div>
                <p className=" text-red-300 mt-3 text-1xl">
               We Provide 24 Hours Services and 
               Our | Email| Location| Is Available. You Can Contact us For Any Problem Or Need...! 
              </p>
         <ContactLogo></ContactLogo>
              </div>
            
    <div className="bg-white rounded-lg p-8 shadow-lg">
    <form>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="Name"
            className="block text-sm font-medium text-gray-700"
          >
            NAME*
          </label>
          <input
            type="text"
            name="Name"
            id="Name"
            className="mt-1 block w-full border input-bordered input-info rounded-md shadow-sm p-2"
            />
        </div>
        <div>
          <label
            htmlFor="Location"
            className="block text-sm font-medium text-gray-700"
            >
            LOCATION*
          </label>
          <input
            type="text"
            name="location"
            id="location"
            className="mt-1 block w-full border input-bordered input-accent rounded-md shadow-sm p-2"
            />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
            >
            EMAIL*
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="mt-1 block w-full border input-bordered input-warning rounded-md shadow-sm p-2"
            />
        </div>
        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-gray-700"
            >
            PHONE*
          </label>
          <input
            type="text"
            name="phone"
            id="phone"
            className="mt-1 block w-full border input-bordered input-secondary rounded-md shadow-sm p-2"
            />
        </div>
      </div>
      <div className="mt-4">
        <label
          htmlFor="message"
          className="block text-sm font-medium text-gray-700"
          >
          Message*
        </label>
        <textarea
          id="message"
          name="text"
          rows="4"
          className="mt-1 block w-full border input-bordered input-primary rounded-md shadow-sm p-2"
          ></textarea>
      </div>
      <div className="mt-6 text-right">
        <button
          type="submit"
          className="bg-[#2e0249] text-white py-2 px-4 rounded-md hover:bg-[#1e0133]"
          >
          Send Message
        </button>
      </div>
    </form>
  </div>
            </div>
          </div>
   <IframeG></IframeG>
        </div>
          </>
    );
};

export default Contact;