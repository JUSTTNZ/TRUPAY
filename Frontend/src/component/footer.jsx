import { CiTwitter } from "react-icons/ci";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
export const Footer = () => {
    return(
        <div className="bg-[#10375C]">
            <div className="grid grid-cols-1 lg:grid-cols-2  lg:pl-[120px] lg:pr-[100px] p-10">
                <div>
                    <h5 className="text-[60px] font-outfit font-bold text-[#EB8317]">
                        TRUPAY
                    </h5>
                    <div className="mb-4 social-link flex px-2 pt-10">
                        <div className="flex justify-center items-center bg-[#FFFFFF] rounded-[77px] mr-2 w-[34px] h-[34px]">
                            <span className="w-[18px] h-[18px] text-center">
                            <CiTwitter />
                            </span>

                        </div>
                        <div className="flex justify-center items-center bg-[#FFFFFF] rounded-[77px] mr-2  w-[34px] h-[34px]">
                            <span className="w-[18px] h-[18px] text-center">
                            <FaLinkedinIn />
                            </span>

                        </div>
                        <div className="flex justify-center items-center bg-[#FFFFFF] rounded-[77px] mr-2  w-[34px] h-[34px]">
                            <span className="w-[18px] h-[18px] text-center">
                            <FaInstagram />
                            </span>

                        </div>
                        <div className="flex justify-center items-center bg-[#FFFFFF] rounded-[77px] mr-2  w-[34px] h-[34px]">
                            <span className="w-[18px] h-[18px] text-center">
                            <FaFacebookF />
                            </span>

                        </div>

                    </div>
                    <div className="flex flex-start pt-10">
                        <p className="text-center text-white font-semibold text-[16px]">Copyright @{new Date().getFullYear()}</p>
                    </div>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-4">
                    <div>
                        <h5 className="text-[#EB8317] text-center text-[20px] font-bold font-outfit ">
                         Home
                        </h5>
                        <ul className="text-center">
                        <li className="text-white px-2 py-1 text-[16px] font-semibold">
                            Features
                            </li>
                            <li className="text-white px-2 py-3 text-[16px] font-semibold">
                            Categories
                            </li>  
                            <li className="text-white px-2 py-3 text-[16px] font-semibold">
                            Top picks
                            </li>
                            <li className="text-white px-2 py-3 text-[16px] font-semibold">
                            How it works
                            </li>
                            <li className="text-white px-2 py-2 text-[16px] font-semibold">
                            Testimonial
                            </li>

                        </ul>
                    </div>
                    <div>
                        <h5 className="text-[#EB8317] text-center text-[20px] font-bold font-outfit ">
                        Dashboard
                        </h5>
                        <ul className="text-center">
                        <li className="text-white px-2 py-1 text-[16px] font-semibold">
                            Features
                            </li>
                            <li className="text-white px-2 py-3 text-[16px] font-semibold">
                            Categories
                            </li>  
                            <li className="text-white px-2 py-3 text-[16px] font-semibold">
                            Top picks
                            </li>
                            <li className="text-white px-2 py-3 text-[16px] font-semibold">
                            How it works
                            </li>
                            <li className="text-white px-2 py-2 text-[16px] font-semibold">
                            Testimonial
                            </li>

                        </ul>
                    </div>
                    <div>
                        <h5 className="text-[#EB8317] text-center text-[20px] font-bold font-outfit ">
                         Payment
                        </h5>
                        <ul className="text-center">
                        <li className="text-white text-center px-2 py-1 text-[16px] font-semibold">
                            Features
                            </li>
                            <li className="text-white px-2 py-3 text-[16px] font-semibold">
                            Categories
                            </li>  
                            <li className="text-white px-2 py-3 text-[16px] font-semibold">
                            Top picks
                            </li>
                            <li className="text-white px-2 py-3 text-[16px] font-semibold">
                            How it works
                            </li>
                            <li className="text-white px-2 py-2 text-[16px] font-semibold">
                            Testimonial
                            </li>

                        </ul>
                    </div>
                    <div>
                        <h5 className="text-[#EB8317] text-center text-[20px] font-bold font-outfit ">
                         History
                        </h5>
                        <ul className="text-center">
                        <li className="text-white px-2 py-1 text-[16px] font-semibold">
                            Features
                            </li>
                            <li className="text-white px-2 py-3 text-[16px] font-semibold">
                            Categories
                            </li>  
                            <li className="text-white px-2 py-3 text-[16px] font-semibold">
                            Top picks
                            </li>
                            <li className="text-white px-2 py-3 text-[16px] font-semibold">
                            How it works
                            </li>
                            <li className="text-white px-2 py-2 text-[16px] font-semibold">
                            Testimonial
                            </li>

                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}