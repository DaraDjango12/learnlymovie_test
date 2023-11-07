"use client";
import React, { useState } from "react";
import { Card, Button, Input, Typography } from "@material-tailwind/react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = () => {
    if (email && password) {
      const user = {
        email,
        password,
      };

      // Store the user data in local storage
      localStorage.setItem("user", JSON.stringify(user));

      toast.success("Registration successful.");
      router.push("/movie");
    } else {
      toast.error("Please provide an email and password.");
    }

    // Perform user registration here (e.g., send data to your API)
  };

  return (
    <section className="flex h-[90vh] flex-row justify-center items-center gap-6 p-24">
      <ToastContainer />
      <Card
        color="transparent"
        shadow={false}
        className="bg-slate-100 p-12 shadow-2xl rounded-xl"
      >
        <Typography variant="h4" color="blue-gray" className="text-center text-[3rem]">
          Register
        </Typography>
        <Typography color="gray" className="mt-1 text-[2rem] text-center">
          Nice to meet you! Enter your details to register.
        </Typography>
        <form className="mt-8 mb-2 w-80 max-w-screen-lg mx-auto sm:w-96">
          <div className="mb-1 flex flex-col gap-6">
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Your Email
            </Typography>
            <Input
              required
              size="lg"
              placeholder="name@mail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className=" !border-t-blue-gray-200 h-[2.5rem] rounded-xl  focus:!border-t-gray-900 px-4"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Password
            </Typography>
            <Input 
            type="password"
            required
              size="lg"
              placeholder="****"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="h-[2.5rem] rounded-xl px-6 "
              

            />


{/* className=" !border-t-blue-gray-200 h-[2.5rem] rounded-xl  focus:!border-t-gray-900 px-4"
              labelProps={{
                className: "before:content-none after:content-none",
              }} */}

              
              


          </div>
          {/* <div></div> */}
          <Button
            className="mt-6 bg-gray-700 hover-bg-gray-900 h-[2.5rem] rounded-xl w-full"
            onClick={handleRegister}
          >
            Register
          </Button>
          <Typography
            color="gray"
            className="mt-4  px-6 rounded py-[3rem] text-center font-normal"
          >
            Already have an account?{" "}
            <a href="/user/login" className="font-medium text-[green] hover:text=[purple]">
              Login
            </a>
          </Typography>
        </form>
      </Card>
    </section>
  );
};

export default Register;
