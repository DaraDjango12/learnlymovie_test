import Image from "next/image";
import SlideShow from "./components/Slideshow/SlideShow";
// import { Button } from "@material-tailwind/react";
// import { Card, Input, Button, Typography } from "@material-tailwind/react";

export default function Home() {
  return (
    <main className="flex min-h-screen  flex-col items-center p-24">
      <h1 className="text-[3rem] md:text-[4rem]">So you love movies ?</h1>
      <div className="flex flex-column md:flex-row justify-between my-8 gap-12">
        <div className=" rounded-[2rem] px-16 bg-[purple] text-[white] hover:bg-slate-400 py-4">
        <a href="/user/login" className="font-medium  text-gray-900">
              Login
            </a>
        </div>
        <div className=" rounded-[2rem] px-16 bg-[purple] hover:bg-slate-400 text-[white] py-4">
          <a href="/user/register" className="font-medium  text-gray-900">
            Register
          </a>
        </div>
      </div>

      <div>
        <SlideShow />
      </div>
    </main>
  );
}
