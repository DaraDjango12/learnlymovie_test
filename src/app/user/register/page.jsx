"use client";
import React, { useState } from "react";
import { Card, Button, Input, Typography } from "@material-tailwind/react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import * as yup from "yup";
import { useFormik, Formik, Form, Field } from "formik";

const Register = () => {
  const userSchema = yup.object().shape({
    firstName: yup.string().required(),
    lastName: yup.string().min(3).max(30).required(),
    email: yup
      .string()
      .email("Please enter a valid email")
      .required("Please input your email"),
    country: yup.string().required("please enter a country"),
    city: yup.string().required("please enter a city"),

    password: yup.string().min(4).required(),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password")], "Password does not match")
      .required("please Enter a password confirmation"),
  });

  const initialValues={
    firstName: "",
    lastName: "",
    email: "",
    country: "",
    city: "",
    password: "",
    confirmPassword: "",
  }

  

  const { values, handleBlur, handleChange, handleSubmit, errors } = useFormik({
    initialValues:initialValues, 
    validationSchema: userSchema,
    onSubmit: (values) => {
      console.log("vale", values.email);
      const userEmail =values.email
      const userPassword=values.password
      const data={userEmail,userPassword}
      // const data = {
      //   values.email,values.password
        
        
      // };
      const local = localStorage.getItem("userDetails")
      ? JSON.parse(localStorage.getItem("userDetails"))
      : [];

    const localCopy = [...local, data];

    localStorage.setItem("userDetails", JSON.stringify(localCopy));

      

    },
  });

  const handleSubmits = async (event) => {
    event.preventDefault();
    

    const isValid = await userSchema.isValid(formData);
    console.log(isValid);
    const users = [];
    if (email && password) {
      const user = {
        email,
        password,
      };
      users.push(user);

      // Store the user data in local storage
      localStorage.setItem("users", JSON.stringify(users));

      toast.success("Registration successful.");
      router.push("/movie");
    } else {
      toast.error("Please provide an email and password.");
    }

    // Perform user registration here (e.g., send data to your API)
  };

  return (
    <section className="flex flex-row justify-center items-center gap-6 ">
      <ToastContainer />
      <Card
        color="transparent"
        shadow={false}
        className="bg-slate-100 px-12 shadow-2xl rounded-xl"
      >
        <Typography
          variant="h4"
          color="blue-gray"
          className="text-center text-[3rem]"
        >
          Register
        </Typography>
        <Typography color="gray" className="mt-1 text-[2rem] text-center">
          Nice to meet you! Enter your details to register.
        </Typography>
        <Formik initialValues={initialValues}
        validationSchema={userSchema}
        
        >
        
        <form
          onSubmit={handleSubmit}
          className="mt-8 mb-2 w-80 max-w-screen-lg mx-auto sm:w-96"
        >
          <div className="mb-1 flex flex-col gap-6">
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              FirstName
            </Typography>
            <Input
              required
              size="lg"
              name="firstName"
              value={values.firstName}
              onBlur={handleBlur}
              onChange={handleChange}
              placeholder="firstName"
              className=" !border-t-blue-gray-200 h-[2.5rem] rounded-xl  focus:!border-t-gray-900 px-4"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            <p>
              {errors.firstName && (
                <small className="text-[red]">{errors.firstName}</small>
              )}
            </p>

            <div>
              <p>lastName</p>
              <Input
                className=" !border-t-blue-gray-200 h-[2.5rem] rounded-xl  focus:!border-t-gray-900 px-4"
                name="lastName"
                value={values.lastName}
                onBlur={handleBlur}
                onChange={handleChange}
              />
              <p>
                {errors.lastName && (
                  <small className="text-[red]">{errors.lastName}</small>
                )}
              </p>
            </div>
            <div>
              <p>Email</p>
              <Input
                className=" !border-t-blue-gray-200 h-[2.5rem] rounded-xl  focus:!border-t-gray-900 px-4"
                placeholder="kolade@email.com"
                name="email"
                value={values.email}
                onBlur={handleBlur}
                onChange={handleChange}
              />
              <p>
                {errors.email && (
                  <small className="text-[red]">{errors.email}</small>
                )}
              </p>
            </div>

            <div>
              <p>What country do you live in</p>
              <Input
                className=" !border-t-blue-gray-200 h-[2.5rem] rounded-xl  focus:!border-t-gray-900 px-4"
                name="country"
                value={values.country}
                onBlur={handleBlur}
                onChange={handleChange}
              />
              <p>
                {errors.country && (
                  <small className="text-[red]">{errors.country}</small>
                )}
              </p>
            </div>

            <div>
              <p>What city do you live in</p>
              <Input
                className=" !border-t-blue-gray-200 h-[2.5rem] rounded-xl  focus:!border-t-gray-900 px-4"
                name="city"
                value={values.city}
                onBlur={handleBlur}
                onChange={handleChange}
              />
              <p>
                {errors.city && (
                  <small className="text-[red]">{errors.city}</small>
                )}
              </p>
            </div>

            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Password
            </Typography>
            <Input
              type="password"
              required
              size="lg"
              placeholder="****"
              name="password"
              value={values.password}
              onBlur={handleBlur}
              onChange={handleChange}
              className="h-[2.5rem] rounded-xl px-6 "
            />
            <p>
              {errors.password && (
                <small className="text-[red]">{errors.password}</small>
              )}
            </p>
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Confirm Password
            </Typography>
            <Input
              type="password"
              required
              size="lg"
              name="confirmPassword"
              placeholder="****"
              value={values.confirmPassword}
              onBlur={handleBlur}
              onChange={handleChange}
              className="h-[2.5rem] rounded-xl px-6 "
            />
            <p>
              {errors.confirmPassword && (
                <small className="text-[red]">{errors.confirmPassword}</small>
              )}
            </p>
          </div>

          <input
            type="submit"
            className="mt-6 bg-gray-700 hover-bg-gray-900 h-[2.5rem] rounded-xl w-full"
          />
          <Typography
            color="gray"
            className="mt-4  px-6 rounded py-[3rem] text-center font-normal"
          >
            Already have an account?{" "}
            <a
              href="/user/login"
              className="font-medium text-[green] hover:text=[purple]"
            >
              Login
            </a>
          </Typography>
        </form>
        </Formik>
      </Card>
    </section>
  );
};

export default Register;
