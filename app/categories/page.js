'use client'
import React, { useEffect, useState } from 'react'
import MenuHeader from '../../components/menu-header';

const Categories = () => {
    const [category,setcategory]=useState("");
    const [allcategory,setallcategory]=useState([])
    const addCategory=()=>{
      fetch("/api/category",{
        method:"GET"
       }).then(data=>data.json()).then(data=>{
        console.log(data.categories.categories)
        setallcategory([...data.categories.categories])
        console.log(allcategory)
       })
    }
    useEffect(()=>{
 addCategory()
    },[])
const handleChange=()=>{
  if(category.length===0) return;
  fetch("/api/category",{
    method:"PUT",
    headers:{
      'Content-Type':'application/json'
    },
    body:JSON.stringify({
      categories:category
    })
  }).then(data=>data.json()).then((data)=>{
    addCategory()
    console.log(data)
  })
}
  return (
    <div className='flex gap-4 flex-col justify-center items-center w-full'>
    <MenuHeader isAdmin={true} />
    <h3 className=' text-xl font-extrabold'>Categories</h3>
    <div className='flex gap-4 md:flex-row flex-col justify-center items-center'>
        <input value={category} placeholder='Write New Category ....' className='text-field' onChange={({target:{value}})=>setcategory(value)} />
        <button className='bg-primary text-white rounded-xl md:w-36 w-full h-12' onClick={handleChange}>Create</button>
    </div>
    <div className='flex flex-col gap-4'>
    {
      allcategory.length>0?allcategory.map((elem)=>(
        <div className='md:w-80 w-full h-10 border-2 border-gray-400 rounded-xl p-2'>
        <h4 className='font-bold'>{elem}</h4>
        </div>
      )):null
    }
    </div>

    </div>
  )
}

export default Categories