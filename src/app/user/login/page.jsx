"use client";
import React, { useState } from "react";
import { Card, Input, Button, Typography } from "@material-tailwind/react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  const handleLogin = () => {

    // Get existing users from local storage or initialize an empty array
    const existingUsers = JSON.parse(localStorage.getItem('users')) || [];

    // Check if the entered username and password match any user
    const isValidUser = existingUsers.some(user => user.userEmail === email && user.userPassword === password);

    if (isValidUser) {
      // Redirect to the dashboard or home page
      toast.success("Login successful..")
      router.push('/movies');
    } else {
      alert('Invalid username or password. Please try again.');
      toast.error("Invalid email or password.");
    }


    
    
  };

  return (
    <section className="flex h-[90vh] flex-row justify-center text-[black] items-center gap-6 p-24">
      <ToastContainer />
      <Card
        color="transparent"
        shadow={false}
        className="bg-slate-100 p-12 shadow-2xl rounded-xl"
      >
        <Typography
          variant="h4"
          color="blue-gray"
          className="text-center text-[3rem]"
        >
          Login
        </Typography>
        <Typography color="gray" className="mt-1 text-[2rem] text-center">
          Welcome Back! Enter your details to Login
        </Typography>
        <form className="mt-8 mb-2 w-80 mx-auto first-letter: max-w-screen-lg sm:w-96">
          <div className="mb-1 flex flex-col gap-6">
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Your Email
            </Typography>
            <Input
              size="lg"
              placeholder="name@mail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className=" !border-t-blue-gray-200 h-[2.5rem] rounded-xl focus:!border-t-gray-900 px-4"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Password
            </Typography>
            <Input
              required
              type="password"
              size="lg"
              placeholder="****"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className=" !border-t-blue-gray-200 h-[2.5rem] rounded-xl focus:!border-t-gray-900 px-4"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
          </div>
          <div></div>
          <Button
            className="mt-6 w-full py-2 rounded-xl bg-gray-700 hover-bg-gray-900"
            fullWidth
            onClick={handleLogin}
          >
            Login
          </Button>
          <Typography color="gray" className="mt-4 text-center font-normal">
            Don&apos;t have an account?{" "}
            <a
              href="/user/register"
              className="font-medium  text-[green] hover:text=[purple]"
            >
              Register
            </a>
          </Typography>
        </form>
      </Card>
    </section>
  );
};

export default Login;
