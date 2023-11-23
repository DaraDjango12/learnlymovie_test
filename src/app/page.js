"use client";

import { useState } from "react";
import Image from "next/image";
import SlideShow from "./components/Slideshow/SlideShow";
// import { Button } from "@material-tailwind/react";
// import { Card, Input, Button, Typography } from "@material-tailwind/react";
import Login from "./user/login/page";
import Register from "./user/register/page";
import { Button } from "@material-tailwind/react";

export default function Home() {
  const [ view, setView ] = useState(1);
  return (
    <main className="flex min-h-screen  flex-col items-center p-24">
      <h1 className="text-[1.5rem] md:text-[3rem]">So you love movies ?</h1>
      <div className="flex flex-column md:flex-row justify-between my-8 gap-12">
        <Button
          className=" rounded-[2rem] px-6 md:px-16 bg-[purple] text-[white] hover:bg-slate-400 py-4"
          onClick={() => {
            setView(1);
          }}
        >
          Login
          {/* <a href="/user/login" className="font-medium  text-gray-900">
              Login
            </a> */}
        </Button>
        <div
          className=" rounded-[2rem] px-6 md:px-16 bg-[purple] hover:bg-slate-400 text-[white] py-4"
          onClick={() => {
            setView(2);
          }}
        >
          Register
          {/* <a href="/user/register" className="font-medium  text-gray-900">
            Register
          </a> */}
        </div>
      </div>

      <div>
        {view === 1 ? <Login /> : <Register/>}
        

        {/* <SlideShow /> */}
      </div>
    </main>
  );
}
