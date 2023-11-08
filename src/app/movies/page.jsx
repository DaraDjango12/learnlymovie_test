"use client"
import React,{useEffect} from 'react'
import { useRouter } from 'next/navigation';
import { MovieApi } from '@/utils/Apicalls';

function isAuthenticated() {
  const userToken = localStorage.getItem("user");
  return !!userToken;
}


const Movies = () => {

  
  const getMovieApi=async()=>{
    try {
      const response =await MovieApi()
      console.log('response',response)
    } catch (error) {
      console.log(error.message)
    }
  }
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated()) {
      router.push("user/login");
    }
  }, [router]);

  useEffect(()=>{{
    getMovieApi()
  }},[])


  return (
    <div>Movies</div>
  )
}

export default Movies