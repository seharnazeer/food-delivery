"use client"
import React, { useState } from 'react'
import Heading from "../../components/heading"
import { useSession } from 'next-auth/react'
import Edit from "../../components/home/icons/edit"
const Page = () => {
  const [edit,setedit]=useState("")
    const session=useSession();
  console.log(session)
  if(session.status === 'loading'){
    return(
        <h2>loading...</h2>
    )
  }else{
  return (
    <div className='flex flex-col items-center'>
        <Heading title="Profile" />
        <section  className='flex gap-6'>
         <div className='flex flex-col gap-6 justify-center items-center'>
        <img src={session.data.user?.image} className='w-24 h-24' />
        <button className='bg-primary p-4 rounded-full text-white'>Change Avatar</button>
        </div>
        <div className='flex flex-col gap-4'>
        <div className='flex gap-2 items-center'>
            <input disabled={edit!=="name"?true:false} type='text' placeholder='name' className='profile-field' />
            <div onClick={()=>{console.log("hey");setedit("name")}}>
            <Edit  />
            </div>
            </div>
            <div className='flex gap-2 items-center'>
            <input disabled={edit!=="email"?true:false} type='text' placeholder='email' className='profile-field' />
            <Edit onClick={()=>setedit("email")}/>
            </div>
            <div className='flex gap-2 items-center'>
            <input type='text' disabled={edit!=="street"?true:false} placeholder='street name' className='profile-field' />
            <Edit />
            </div>
            <div className='flex gap-2 items-center'>
            <input type='text' placeholder='Name' className='profile-field' />
            <Edit />
            </div>
        </div>
        </section>
    </div>
  )

  }
}

export default Page