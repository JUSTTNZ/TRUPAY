/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import img from "../assets/loginmage.png";
import { motion } from "framer-motion";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const RegisterForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    phoneNumber: "",
    regNumber: "",
    department: "",
    level: ""
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    
    // Basic validation
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords don't match");
      return;
    }

    try {
      setLoading(true);
      const response = await axios.post("http://your-backend-api/register", {
        fullName: formData.fullName,
        username: formData.username,
        email: formData.email,
        password: formData.password,
        phoneNumber: formData.phoneNumber,
        regNumber: formData.regNumber,
        department: formData.department,
        level: formData.level
      });

      // Assuming the backend returns a token in response.data.token
      const { token } = response.data;
      
      // Store the token in localStorage or cookies
      localStorage.setItem("jwtToken", token);
      
      // Set default Authorization header for future requests
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      
      // Redirect to dashboard or home page
      navigate("/dashboard");
    } catch (err) {
      setError(err.response?.data?.message || "Registration failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <motion.div
        initial={{ x: 300, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 50, damping: 20 }}
      >
        <div
          className="font-[sans-serif] flex items-center justify-center min-h-screen p-10"
        >
     <div className="grid md:grid-cols-2 items-center ">
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
              <form onSubmit={handleSubmit} className="md:max-w-md w-full mx-auto relative space-y-5">
                <h3 className="text-4xl text-center font-bold font-outfit text-[#EB8317]">
                  Register
                </h3>

                {error && (
                  <div className="text-red-400 text-sm text-center">{error}</div>
                )}

                {/* Full Name + Username */}
                <div className="flex gap-4">
                  <div className="w-1/2">
                    <label className="block text-white text-sm mb-1">Full Name</label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="Full Name"
                      required
                      className="w-full h-[44px] text-sm rounded-full bg-transparent text-white border border-gray-300 focus:border-gray-400 px-4 py-2 outline-none placeholder:text-white/50"
                    />
                  </div>
                  <div className="w-1/2">
                    <label className="block text-white text-sm mb-1">Username</label>
                    <input
                      type="text"
                      name="username"
                      value={formData.username}
                      onChange={handleChange}
                      placeholder="Username"
                      required
                      className="w-full h-[44px] text-sm rounded-full bg-transparent text-white border border-gray-300 focus:border-gray-400 px-4 py-2 outline-none placeholder:text-white/50"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="block text-white text-sm mb-1">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email address"
                    required
                    className="w-full h-[44px] text-sm rounded-full bg-transparent text-white border border-gray-300 focus:border-gray-400 px-4 py-2 outline-none placeholder:text-white/50"
                  />
                </div>

                {/* Password + Confirm Password */}
                <div className="flex gap-4">
                  <div className="w-1/2">
                    <label className="block text-white text-sm mb-1">Password</label>
                    <input
                      type="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      placeholder="Password"
                      required
                      className="w-full h-[44px] text-sm rounded-full bg-transparent text-white border border-gray-300 focus:border-gray-400 px-4 py-2 outline-none placeholder:text-white/50"
                    />
                  </div>
                  <div className="w-1/2">
                    <label className="block text-white text-sm mb-1">
                      Confirm Password
                    </label>
                    <input
                      type="password"
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      placeholder="Confirm Password"
                      required
                      className="w-full h-[44px] text-sm rounded-full bg-transparent text-white border border-gray-300 focus:border-gray-400 px-4 py-2 outline-none placeholder:text-white/50"
                    />
                  </div>
                </div>

                {/* Phone + Reg Number */}
                <div className="flex gap-4">
                  <div className="w-1/2">
                    <label className="block text-white text-sm mb-1">Phone Number</label>
                    <input
                      type="tel"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleChange}
                      placeholder="Phone Number"
                      required
                      className="w-full h-[44px] text-sm rounded-full bg-transparent text-white border border-gray-300 focus:border-gray-400 px-4 py-2 outline-none placeholder:text-white/50"
                    />
                  </div>
                  <div className="w-1/2">
                    <label className="block text-white text-sm mb-1">
                      Registration Number
                    </label>
                    <input
                      type="text"
                      name="regNumber"
                      value={formData.regNumber}
                      onChange={handleChange}
                      placeholder="Registration Number"
                      required
                      className="w-full h-[44px] text-sm rounded-full bg-transparent text-white border border-gray-300 focus:border-gray-400 px-4 py-2 outline-none placeholder:text-white/50"
                    />
                  </div>
                </div>

                {/* Department + Level */}
                <div className="flex gap-4">
                  <div className="w-1/2">
                    <label className="block text-white text-sm mb-1">Department</label>
                    <input
                      type="text"
                      name="department"
                      value={formData.department}
                      onChange={handleChange}
                      placeholder="Department"
                      required
                      className="w-full h-[44px] text-sm rounded-full bg-transparent text-white border border-gray-300 focus:border-gray-400 px-4 py-2 outline-none placeholder:text-white/50"
                    />
                  </div>
                  <div className="w-1/2">
                    <label className="block text-white text-sm mb-1">Level</label>
                    <input
                      type="text"
                      name="level"
                      value={formData.level}
                      onChange={handleChange}
                      placeholder="Level"
                      required
                      className="w-full h-[44px] text-sm rounded-full bg-transparent text-white border border-gray-300 focus:border-gray-400 px-4 py-2 outline-none placeholder:text-white/50"
                    />
                  </div>
                </div>

 <div className="mt-5">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full mb-4 shadow-xl py-2.5 px-5 text-sm font-semibold rounded-full text-white bg-[#EB8317]  focus:outline-none cursor-pointer"
                >
                  {loading ? "Registering..." : "Register"}
                </button>
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
              </form>
            </div>
          </div>
        </div>

      
      </motion.div>
    </div>
  );
};