
import { FaPhone } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';
import { MdOutlineMailOutline } from 'react-icons/md';

const ContactLogo = () => {
    return (
        <div>
             <div className="mt-12 space-y-8">
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16px"
                    height="16px"
                    fill="#fff"
                    viewBox="0 0 479.058 479.058"
                  >
                    <path
                     
                      data-original="#000000"
                    />
                  </svg>
                  <a href="amit-35-1773@diu.edu.bd" className="text-black  flex text-sm ml-3">
                    <MdOutlineMailOutline className="text-4xl text-black  " ></MdOutlineMailOutline><strong className="text-2xl">amit-35-1773@diu.edu.bd</strong>
                  </a>
                </li>
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16px"
                    height="16px"
                    fill="#fff"
                    viewBox="0 0 482.6 482.6"
                  >
                       
                     
                        
                      
                    </svg>
                    <a href="tel:+0088 01797522144" className="text-black  flex text-sm ml-3">
                    <FaPhone className="text-3xl text-black  "></ FaPhone >  <strong className="text-2xl">+01797522144</strong> 
                    </a>
                  </li>
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16px"
                      height="16px"
                      fill="#fff"
                      viewBox="0 0 489.3 489.3"
                    >
                      <path
                       
                        data-original="#000000"
                      />
                      <path
                       
                        data-original="#000000"
                      />
                    </svg>
                    <a
                      href="https://maps.google.com/maps?q=Bangladesh&t=&z=13&ie=UTF8&iwloc=&output=embed"
                     className="text-black flex text-sm ml-3"
                    >
                    <FaLocationDot className="text-3xl text-black "></FaLocationDot>  <strong className="text-2xl"> Country Bangladesh </strong>
                    </a>
                  </li>
                </div> 
        </div>
    );
};

export default ContactLogo;