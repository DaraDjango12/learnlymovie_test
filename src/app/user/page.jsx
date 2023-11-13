import Image from "next/image";
import React from "react";
import image from "../../../public/assets/image/rose.png";

const Profile = () => {
  return (
    <div className="mx-auto mt-[1rem] w-full bg-slate-300 px-8 md:w-[30rem] md:flex md:justify-center md:items-center md:flex-col md:p-[2%] text-center">
      <p className="text-[2.5rem]">Welcome {"firstname"}</p>
      <h1>This is a free account</h1>
      <div className=" mx-auto h-[15rem] w-[15rem] my-[2rem]">
        <img
          src={image}
          alt="profile image"
          className="bg-[green] rounded-[50%] h-[100%] w-[100%] "
        />
      </div>

      <div className=" my-[2rem] justify-around">
        <p className="text-[1.2rem]"> {"location,country "} </p>
        <p className="text-[2rem]"> FirstName </p>
      </div>

      <p className="text-[1.4rem]">
      
        I am a calm and friendly lor I am a calm and friendly lor I am a calm
        and friendly lor I am a calm and friendly lor I am a calm and friendly
        lor I am a calm and friendly lor I am a calm and friendly lor I am a
        
      </p>

      <div className="flex gap-4">
        <div className="rounded-[2rem] w-[50%] mt-[1rem] px-16 bg-[purple] hover:bg-slate-400 text-[white] py-4">
          Edit
        </div>
        <div className="rounded-[2rem] w-[50%] mt-[1rem] px-16 bg-[purple] hover:bg-slate-400 text-[white] py-4">
          Delete
        </div>
      </div>
    </div>
  );
};

export default Profile;
