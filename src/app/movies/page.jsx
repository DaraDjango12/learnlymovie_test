"use client"
import React,{useEffect} from 'react'
import { useRouter } from 'next/navigation';

function isAuthenticated() {
  const userToken = localStorage.getItem("user");
  return !!userToken;
}

const Movies = () => {
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated()) {
      router.push("/login");
    }
  }, [router]);


  return (
    <div>Movies</div>
  )
}

export default Movies