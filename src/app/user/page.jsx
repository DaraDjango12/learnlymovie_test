import React from 'react'

const Profile = () => {
  return (
    <div>
    <p>Welcome `${ firstname}`</p>
    <h1>This is  free account</h1>


    <div>
      <div className='rounded-[2rem] px-16 bg-[purple] hover:bg-slate-400 text-[white] py-4'>Edit Profile</div>
      <div className='rounded-[2rem] px-16 bg-[purple] hover:bg-slate-400 text-[white] py-4'>Delete profile</div>
    </div>


    </div>
  )
}

export default Profile