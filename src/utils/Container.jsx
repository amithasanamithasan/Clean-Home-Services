
import { useState } from "react";
import img from "../assets/images/shutterstock.jpeg";

const Container = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="w-full max-w-[1300px] px-4 sm:px-6 lg:px-8 mx-auto">
      <div className="flex my-10 gap-10">
        <div className="flex-[1] flex flex-col justify-between gap-10">
          <h1 className="text-4xl text-[#1f2020] font-bold font-serif">
            Quality Cleaning <br />
            <span className="text-primary">For Your Home</span>
          </h1>
          <p className="text-[#2fa5bd] font-serif font-semibold">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora
            laborum iure aliquam rem explicabo doloribus molestiae ab,
            perferendis accusantium! Hic autem reprehenderit ratione, omnis
            architecto cumque qui minus molestiae eos!
          </p>
          <div>
            <button
              onClick={toggleModal}
              className="block text-white bg-blue-700
               hover:bg-blue-800 focus:ring-4 focus:outline-none
                focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center
                 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              type="button"
            >
              Toggle modal
            </button>

            {isModalOpen && (
              <div
                id="crud-modal"
                className="fixed inset-0 z-50 overflow-y-auto overflow-x-hidden flex items-center justify-center"
                aria-hidden={!isModalOpen}
              >
                <div className="relative p-4 w-full max-w-md max-h-full">
                  <div className="relative bg-cyan-300 rounded-lg shadow dark:bg-gray-700">
                    <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t
                     dark:border-gray-600">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                        Create New Product
                      </h3>
                      <button
                        type="button"
                        className="text-gray-400 bg-transparent
                         hover:bg-gray-200 hover:text-gray-900 
                         rounded-lg text-sm w-8 h-8 ms-auto inline-flex
                          justify-center items-center dark:hover:bg-gray-600
                           dark:hover:text-white"
                        onClick={toggleModal}
                      >
                        <svg
                          className="w-4 h-4 hover:text-red-600 "
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 14 14"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                          />
                        </svg>
                        <span className="sr-only ">Close modal</span>
                      </button>
                    </div>

                    <form className="p-4 md:p-5">
                      <div className="grid gap-4 mb-4 grid-cols-2">
                        <div className="col-span-2">
                          <label
                            htmlFor="name"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                          >
                            Name
                          </label>
                          <input
                            type="text"
                            name="name"
                            id="name"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                            placeholder="Type product name"
                            required
                          />
                        </div>

                        <div className="col-span-2">
                          <label
                            htmlFor="name"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                          >
                         Email
                          </label>
                          <input
                            type="text"
                            name="email"
                            id="email"
                            className="bg-gray-50 border border-gray-300
                             text-gray-900 text-sm rounded-lg focus:ring-primary-600
                             focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600
                              dark:border-gray-500 dark:placeholder-gray-400 
                              dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                            placeholder="Type Of Email"
                            required
                          />
                        </div>


                        <div className="col-span-2 sm:col-span-1">
                          <label
                          
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                          >
                          Date
                          </label>
                          <input 
                            type="date"
                            name="date"
                            id="date"
                            className="bg-gray-50 border border-gray-300 text-gray-900 
                            text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600
                             block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500
                              dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500
                               dark:focus:border-primary-500"
                            placeholder="Date"
                            required
                          />
                        </div>


                        <div className="col-span-2 sm:col-span-1">
                          <label
                          
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                          >
                        Phone Number
                          </label>
                          <input 
                            type="text"
                            name="number"
                            id="number"
                            className="bg-gray-50 border border-gray-300 text-gray-900 
                            text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600
                             block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500
                              dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500
                               dark:focus:border-primary-500"
                            placeholder="Enter Your Phone-Number"
                            required
                          />
                        </div>
                        <div className="col-span-2 sm:col-span-1">
                          <label
                            htmlFor="category"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                          >
                            Category
                          </label>
                          <select
                            id="category"
                            className="bg-gray-50 border border-gray-300
                             text-gray-900 text-sm rounded-lg focus:ring-primary-500 
                             focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600
                              dark:border-gray-500 dark:placeholder-gray-400
                               dark:text-white dark:focus:ring-primary-500 
                               dark:focus:border-primary-500"
                            defaultValue=""
                          >
                            <option value="" disabled>
                              Select category
                            </option>
                            <option value="Bed Bugs">Bed Bugs</option>
                            <option value="Window Cleaning">Window Cleaning</option>
                            <option value="Carpet Cleaning">Carpet Cleaning</option>
                            <option value="Tank Cleaning">Tank Cleaning</option>
                          </select>
                        </div>
                        <div className="col-span-2">
                          <label
                            htmlFor="description"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                          >
                         Address/Location/ House-No/ Road-No
                          </label>
                          <textarea
                            id="description"
                            rows="4"
                            className="block p-2.5 w-full text-sm text-gray-900
                             bg-gray-50 rounded-lg border border-gray-300
                              focus:ring-blue-500 focus:border-blue-500
                               dark:bg-gray-600 dark:border-gray-500
                                dark:placeholder-gray-400 dark:text-white
                                 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Write product description here"
                          ></textarea>
                        </div>
                      </div>
                      <button
                        type="submit"
                        className="text-white inline-flex items-center 
                         bg-blue-700 hover:bg-blue-800 focus:ring-4 
                         focus:outline-none focus:ring-blue-300 font-medium 
                         rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600
                          dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                      >
                       
                       Submit 
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="flex-[1] h-[300px] rounded-xl overflow-hidden">
          <img
            src={img}
            className="w-full h-full object-cover"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Container;
