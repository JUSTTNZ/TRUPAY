/* eslint-disable react/no-unescaped-entities */
//import { useState } from "react";
import img from "../assets/loginmage.png"; // Update the path as needed
import { motion } from "framer-motion";


export const RegisterForm = () => {
  //const [passwordVisible, setPasswordVisible] = useState(false);

  // const togglePasswordVisibility = () => {
  //   setPasswordVisible((prev) => !prev);
  // };

  return (
    <div>
    <motion.div
       initial={{ x: 300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 50, damping: 20 }}
      className="">
<div
  className="font-[sans-serif] flex items-center justify-center min-h-screen"
  style={{
    background:
      "linear-gradient(239.55deg, #F3C623 -2.42%, #FDC752 27.13%, #10375C 68.51%)",
  }}
>
  <div className="grid md:grid-cols-2 items-stretch min-h-[700px] w-full max-w-6xl">
    {/* Image Side */}
    <div className="hidden lg:block md:block h-full">
      <img
        src={img}
        className="w-full h-full object-cover"
        alt="register-image"
      />
    </div>

    {/* Form Side */}
    <div className="bg-[#10375C] h-full p-10 flex items-center">
      <form className="md:max-w-md w-full mx-auto relative space-y-5">
        <h3 className="text-4xl text-center font-bold font-outfit text-[#EB8317]">
          Register
        </h3>

        {/* Full Name + Username */}
        <div className="flex gap-4">
          <div className="w-1/2">
            <label className="block text-white text-sm mb-1">Full Name</label>
            <input
              type="text"
              placeholder="Full Name"
              required
              className="w-full h-[44px] text-sm rounded-full text-white border border-gray-300 focus:border-gray-400 px-4 py-2 outline-none placeholder:text-white/50"
            />
          </div>
          <div className="w-1/2">
            <label className="block text-white text-sm mb-1">Username</label>
            <input
              type="text"
              placeholder="Username"
              required
              className="w-full h-[44px] text-sm rounded-full text-white border border-gray-300 focus:border-gray-400 px-4 py-2 outline-none placeholder:text-white/50"
            />
          </div>
        </div>

        {/* Email */}
        <div>
          <label className="block text-white text-sm mb-1">Email Address</label>
          <input
            type="email"
            placeholder="Email address"
            required
            className="w-full h-[44px] text-sm rounded-full text-white border border-gray-300 focus:border-gray-400 px-4 py-2 outline-none placeholder:text-white/50"
          />
        </div>

        {/* Password + Confirm Password */}
        <div className="flex gap-4">
          <div className="w-1/2">
            <label className="block text-white text-sm mb-1">Password</label>
            <input
              placeholder="Password"
              required
              className="w-full h-[44px] text-sm rounded-full text-white border border-gray-300 focus:border-gray-400 px-4 py-2 outline-none placeholder:text-white/50"
            />
          </div>
          <div className="w-1/2">
            <label className="block text-white text-sm mb-1">
              Confirm Password
            </label>
            <input
              type="password"
              placeholder="Confirm Password"
              required
              className="w-full h-[44px] text-sm rounded-full text-white border border-gray-300 focus:border-gray-400 px-4 py-2 outline-none placeholder:text-white/50"
            />
          </div>
        </div>

        {/* Phone + Reg Number */}
        <div className="flex gap-4">
          <div className="w-1/2">
            <label className="block text-white text-sm mb-1">Phone Number</label>
            <input
              type="tel"
              placeholder="Phone Number"
              required
              className="w-full h-[44px] text-sm rounded-full text-white border border-gray-300 focus:border-gray-400 px-4 py-2 outline-none placeholder:text-white/50"
            />
          </div>
          <div className="w-1/2">
            <label className="block text-white text-sm mb-1">
              Registration Number
            </label>
            <input
              type="text"
              placeholder="Registration Number"
              required
              className="w-full h-[44px] text-sm rounded-full text-white border border-gray-300 focus:border-gray-400 px-4 py-2 outline-none placeholder:text-white/50"
            />
          </div>
        </div>

        {/* Department + Level */}
        <div className="flex gap-4">
          <div className="w-1/2">
            <label className="block text-white text-sm mb-1">Department</label>
            <input
              type="text"
              placeholder="Department"
              required
              className="w-full h-[44px] text-sm rounded-full text-white border border-gray-300 focus:border-gray-400 px-4 py-2 outline-none placeholder:text-white/50"
            />
          </div>
          <div className="w-1/2">
            <label className="block text-white text-sm mb-1">Level</label>
            <input
              type="text"
              placeholder="Level"
              required
              className="w-full h-[44px] text-sm rounded-full text-white border border-gray-300 focus:border-gray-400 px-4 py-2 outline-none placeholder:text-white/50"
            />
          </div>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full shadow-xl py-2.5 px-5 text-sm font-semibold rounded-full text-white bg-[#EB8317] focus:outline-none cursor-pointer"
        >
          Register
        </button>
      </form>
    </div>
  </div>
</div>

      <div className="flex items-center justify-center mt-4">
        <span className="text-[#F2EFE780]">Already have an account?</span>
        <a
          href="/login"
          className="text-[#EB8317] font-outfit text-sm hover:underline ml-2"
        >
          Login
        </a>
      </div>
    </motion.div>
      
    </div>
  );
};