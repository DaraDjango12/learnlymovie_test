"use client";
import React, { useEffect, useState, useNavigate } from "react";
import { useRouter } from "next/navigation";
import { MovieApi } from "@/utils/Apicalls";
import image from "../../../public/assets/image/rose.png";

function isAuthenticated() {
  const userToken = localStorage.getItem("user");
  return !!userToken;
}

const Movies = () => {
  const [items, setItems] = useState([]);

  const getMovieApi = async () => {
    try {
      const response = await MovieApi();
      console.log("response", response.data.hits);
      setItems(response.data.hits);
    } catch (error) {
      console.log(error.message);
    }
  };
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated()) {
      router.push("user/login");
    }
  }, [router]);

  useEffect(() => {
    {
      getMovieApi();
    }
  }, []);

  console.log("items", items);

  const HandleClick = (singleMovie) => {
    console.log("singleMovie", singleMovie);
    router.push(`/movies/${singleMovie.id}`);
    dispatch({ type: "ITEM", payload: { data: singleMovie } });
  };

  return (
    <div className="max-w-screen">
      <div className=" h-[6rem] bg-[purple] flex justify-center items-center ">
        <h2 className=" text-[1.5rem] text-[white]">Available Movies</h2>
      </div>
      <div className=" mx-auto h-[15rem] w-[15rem] my-[2rem]">
        <a href="/user">
          <img
            src={image}
            alt="profile image"
            className="bg-[green] rounded-[50%] h-[100%] w-[100%] "
          />
        </a>
      </div>
      <a href="/user" >
      <div className="rounded-[2rem] px-16 bg-[purple] w-[70vw] md:w-[25vw] mx-auto hover:bg-slate-400 text-[white] py-4 text-center">
        User Profile
      </div>
      </a>

      <div className="py-[2rem] md:px-[5%] max-w-screen flex-wrap flex gap-12 justify-center items-center">
        {items.map((item, Index) => (
          <section
            key={Index}
            className="w-[12rem] h-[17rem] m-4 shadow-lg"
            onClick={() => HandleClick(item)}
          >
            <div className="h-[10rem] m-auto rounded-[50%] ">
              <img
                className="w-[100%] h-[100%] "
                src={item.userImageURL}
                alt={item.id}
              />
            </div>
            <div className="p-4">
              <p className="text-[1.5rem] text-[green] ">{item.tags}</p>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default Movies;
