import Image from 'next/image'
import React from 'react'
import image from '../../../public/assets/image/rose.png'

const Profile = () => {
  return (
    <div className='mx-auto mt-[2rem] w-full px-8 md:px-[10%] text-center  '>
    <p className='text-[1.5rem]'>Welcome { 'firstname'}</p>
    <h1>This is a free account</h1>
    <div className='mx-auto rounded-[50%] h-[5rem] w-[5rem] my-[2rem]'>
      <img src={image} alt="profile image" className=' h-[100%] w-[100%] '/>
    </div>

    <div className='flex my-[2rem] justify-around'>
    <p className='text-[2rem]'> Firstname</p>
    <p className='text-[2rem]'> lastname</p>
    </div>


    <div>
      <div className='rounded-[2rem] px-16 bg-[purple] hover:bg-slate-400 text-[white] py-4'>Edit Profile</div>
      <div className='rounded-[2rem] mt-[3rem] px-16 bg-[purple] hover:bg-slate-400 text-[white] py-4'>Delete profile</div>
    </div>


    </div>
  )
}

export default Profile