// import React from "react";
// import { ChevronDownIcon } from '@heroicons/react/16/solid'

import { useForm } from "react-hook-form";
import { Mail, User } from "lucide-react";
import profileImage from "../assets/profile.jpeg";
import { useNavigate} from "react-router-dom";

export default function Auth() {
  const { register, handleSubmit, reset } = useForm();
  const navigate = useNavigate();
  const submitData = (data) => {
    console.log(data);
    alert("form submitted successfully");
    reset();
    navigate("/")
  };

  return (
    <div className="bg-white h-screen overflow-hidden">
      <div className="grid  grid-cols-2  h-screen ">
        {/* Image */}

        <div className="h-full">
          <img
            src={profileImage}
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
        {/* form */}
        <div className="bg-pink-50 flex h-screen items-center justify-center px-6">
          <form onSubmit={handleSubmit(submitData)} className="w-full max-w-md">
            <h2 className=" text-3xl text-center font-bold pb-5">Profile</h2>
            <p className="text-sm/6 mt- text-left text-gray-400">
              This information will be displayed publicly so be careful what you
              share.
            </p>
            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-2">
                <label className="font-semibold">Username</label>
                <div className="relative">
                  <User className="absolute left-3 top-5 text-pink-300" />
                </div>
                <input
                  type="text"
                  required
                  className="border p-3 rounded-2xl bg-white pl-10"
                  placeholder="Rajesh Hamal"
                  {...register("userName")}
                ></input>
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-semibold">Email</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-5 text-pink-300" />
                </div>
                <input
                  type="email"
                  className="border p-3 rounded-2xl bg-white pl-10"
                  placeholder="rajesh@example.com"
                  {...register("email")}
                  required
                ></input>


              </div>
              <div className="flex flex-col gap-2">
                <label className="font-semibold">Password</label>
                <input
                  type="password"
                  required
                  className="border p-3 rounded-2xl bg-white"
                  placeholder="Enter your password"
                  {...register("password")}
                ></input>
              </div>

              <button
                type="submit"
                className="rounded-lg border px-5 py-2 self-center bg-pink-700 text-white">
                NEXT
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
