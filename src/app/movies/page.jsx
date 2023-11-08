"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { MovieApi } from "@/utils/Apicalls";

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

  return (
    <div className="max-w-screen">
      <div className=" h-[6rem] bg-[purple] flex justify-center items-center ">
        <h2 className=" text-[1.5rem] text-[white]">Available Movies</h2>
      </div>

      <div className="py-[2rem] md:px-[5%] max-w-screen flex-wrap flex gap-12 justify-center items-center">
        {items.map((item, Index) => (
          <section key={Index} className="w-[12rem] h-[17rem] m-4 shadow-lg ">
          <div className="h-[10rem] m-auto rounded-[50%] ">
          <img className="w-[100%] h-[100%] " src={item.userImageURL}  alt={item.id}/>
          </div>
          <div className="p-4">
            <p className="text-">{item.tags}</p>
          </div>
            
          </section>
        ))}
      </div>
    </div>
  );
};

export default Movies;
