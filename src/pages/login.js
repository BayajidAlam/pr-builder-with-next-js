/* eslint-disable react/no-unescaped-entities */
import { signIn } from "next-auth/react";
import React, { useState, useEffect } from "react";
import { AiFillGithub } from 'react-icons/ai';

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });


  
  useEffect(()=>{
    // if(user.email && !isLoading) {
     
    // }
  },[])


  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform login logic here using the formData

    setFormData({
      email: "",
      password: "",
    });
    
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded shadow-md w-96 space-y-6"
      >
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
          Login
        </h2>
        <div>
          <label htmlFor="email" className="block font-medium mb-1">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full  py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            required
          />
        </div>
        <div>
          <label htmlFor="password" className="block font-medium mb-1">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            className="w-full py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white font-semibold py-2 rounded-md hover:bg-gradient-to-r hover:from-pink-600 hover:via-purple-600 hover:to-blue-600 transition-colors"
        >
          Login
        </button>
        <p className="mt-4 text-gray-600">
          Don't have an account?{" "}
          <a href="/registration" className="text-blue-500 font-medium">
            Create new account
          </a>
        </p>
        <div 
        onClick={()=>signIn('github',{
          callbackUrl:'http://localhost:3000/build-pc'
        })}
        className="flex items-center justify-center text-white">
            <AiFillGithub className="text-center text-3xl bg-pink-500 w-16 h-8 rounded-full"/>
        </div>
      </form>
    </div>
  );
}