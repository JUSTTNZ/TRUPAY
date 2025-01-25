/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";

import img from '../assets/loginmage.png'

export const LoginForm= () => {

    const [passwordVisible, setPasswordVisible] = useState(false);
    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
      };
  return (
    <div className="grid md:grid-cols-2 items-center ">
      <div className="hidden lg:block md:block ">
        <img src={img} className=" w-full h-[504px] object-cover" alt="login-image" />
      </div>
      <div className=" bg-[#10375C]  lg:h-[504px] md:h-[504px] h-auto  p-10 ">

      <form className="md:max-w-md w-full mx-auto relative">
        <div className="">
          <h3 className="lg:text-4xl text-2xl text-center font-bold lg:text-[45px] md:text-[40px] text-[30px]  font-outfit text-[#EB8317]">Welcome</h3>
        </div>
     
      
          <div className="relative flex items-center py-5">
            <input
            label="Email address"
            type="email"
            required
            placeholder="Email address"
            className="w-full h-[56px] text-[14px] font-outfit rounded-md text-[#F2EFE780]  border border-gray-300 focus:border-gray-400 px-2 py-3 outline-none placeholder-[#F2EFE780] "
            />
         
        <svg
  xmlns="http://www.w3.org/2000/svg"
  fill="#FFFFFF"
  stroke=""
  className="w-[24px] h-[24px]  absolute right-2 cursor-pointer"
  viewBox="0 0 24 24"
  
>
  <path
    d="M12 10.586l4.293-4.293 1.414 1.414L13.414 12l4.293 4.293-1.414 1.414L12 13.414l-4.293 4.293-1.414-1.414L10.586 12 6.293 7.707l1.414-1.414L12 10.586z"
  />
</svg>
          </div>
      
        <div className="mt-2">
          <div className="relative flex items-center">
            <input
              name="password"
              type={passwordVisible ? "text" : "password"}
            
              required
              className="w-full h-[56px]  text-[14px] font-outfit  rounded-md text-[#F2EFE780]  border border-gray-300 focus:border-gray-400 px-2 py-3 outline-none placeholder-[#F2EFE780] "
              placeholder="Password"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#FFFFFF"
              stroke="#bbb"
              className="w-[24px] h-[24px] absolute right-2 cursor-pointer"
              viewBox="0 0 128 128"
              onClick={togglePasswordVisibility}
            >
              <path
                d="M64 104C22.127 104 1.367 67.496.504 65.943a4 4 0 0 1 0-3.887C1.367 60.504 22.127 24 64 24s62.633 36.504 63.496 38.057a4 4 0 0 1 0 3.887C126.633 67.496 105.873 104 64 104zM8.707 63.994C13.465 71.205 32.146 96 64 96c31.955 0 50.553-24.775 55.293-31.994C114.535 56.795 95.854 32 64 32 32.045 32 13.447 56.775 8.707 63.994zM64 88c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm0-40c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16z"
                data-original="#000000"
              ></path>
            </svg>
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-between lg:gap-4 mt-3">
          <div className="flex items-center">
          <a href="/#" className="text-[#EB8317] font-outfit text-sm hover:underline">
          Login with student ID                            
            </a>
          </div>
   
          <div>
            <a href="/#" className="text-[#EB8317] font-outfit text-sm hover:underline">
              Forgot Password
            </a>
          </div>
        </div>

        <div className="mt-5">
          <button
            type="submit"
            className="w-full mb-4 shadow-xl py-2.5 px-5 text-sm font-semibold rounded-full text-white bg-[#EB8317]  focus:outline-none cursor-pointer"
          >
        
              Log in
         
          </button>
          
          <div className="flex items-center mb-3">
  <div className="border-t border border-[#FFFFFF] flex-grow"></div>
  <span className="mx-2 text-[#F4F6FF]">or</span>
  <div className="border-t border border-[#FFFFFF] flex-grow"></div>
</div>

          <div className="relative flex items-center">

  <button
            type="submit"
            className="w-full shadow-xl py-2.5 px-5 text-sm font-bold  rounded-full text-[#EB8317] border border-[#EB8317]  focus:outline-none cursor-pointer"
          >
        
        Sign up with Google
         
          </button>
          <svg viewBox="0 0 48 48"
           xmlns="http://www.w3.org/2000/svg" 
         className="w-[20px] h-[20px] absolute left-3 cursor-pointer"
           
           >

            
    <path
      d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
      fill="#FFC107"
    ></path>
    <path
      d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
      fill="#FF3D00"
    ></path>
    <path
      d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
      fill="#4CAF50"
    ></path>
    <path
      d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
      fill="#1976D2"
    ></path>
  </svg>


          </div>
          <p className="text-[#EB8317] mb-1 text-[14px] font-normal font-outfit text-center mt-6">
            Don't have an account?
            <a
              href="#"
              className="text-[#EB8317] text-[14px] font-normal font-outfit hover:underline ml-1 whitespace-nowrap"
            >
              Sign Up
            </a>
          </p>
        </div>
      </form>
 
      </div>
    
     
    </div>
  );
};
