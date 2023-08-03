import { signIn } from "next-auth/react";
import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { AiFillGithub } from "react-icons/ai";

export default function Signup() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };


  const handleSubmit = async (event) => {
    event.preventDefault();

    if (data.meta.requestStatus === "fulfilled") {
      toast.success("User created successfully");
      // navigate("/all-books");
    }

    setFormData({
      email: "",
      password: "",
    });
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded shadow-md w-96 space-y-6"
      >
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
          Registration
        </h2>
        <div>
          <label htmlFor="userName" className="block font-medium mb-1">
            Full Name
          </label>
          <input
            type="text"
            id="userName"
            name="userName"
            className="w-full py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
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
            className="w-full py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
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
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white font-semibold py-2 rounded-md hover:bg-gradient-to-r hover:from-pink-600 hover:via-purple-600 hover:to-blue-600 transition-colors"
        >
          Sign Up
        </button>

        <p className="mt-4 text-gray-600">
          Already have an account?{" "}
          <a href="/login" className="text-blue-500 font-medium">
            Login
          </a>
        </p>
        <div
          onClick={() =>
            signIn("github", {
              callbackUrl: "http://localhost:3000",
            })
          }
          className="flex items-center justify-center text-white"
        >
          <AiFillGithub className="text-center text-3xl bg-pink-500 w-16 h-8 rounded-full" />
        </div>
      </form>
      <Toaster />
    </div>
  );
}
