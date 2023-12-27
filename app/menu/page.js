"use client"
import React, { useEffect, useState } from 'react'
import Forward from "../../components/home/icons/foward"
import Link from 'next/link'
import Header from '../../components/home/header'
import Heading from '../../components/heading'
import MenuHeader from '../../components/menu-header'
import NewItem from './new/page'
const Menu = () => {
  const [allitems,setitems]=useState([]);
  const [display,setdisplay]=useState(false)
  const [purpose,setpurpose]=useState("new");
  const [data,setdata]=useState({});
  useEffect(()=>{
     fetch("/api/items",{
      method:"GET",
      headers:{
        'Content-Type':"application/json"
      }
     }).then(data=>data.json()).then(data=>{
      console.log("message",data)
              setitems(data.message)
     })
  },[])
  if(display === true){
    return (<NewItem setdisplay={setdisplay} purpose={purpose} data={data} />)
  }else{
    return (      
      <div className='flex justify-center items-center flex-col'>
      <MenuHeader isAdmin={true} />
         <Heading title={"Add Items"} />
          <div onClick={()=>{setpurpose("new");setdisplay(true)}} className=' p-2 rounded-xl border-2 self-start '>Create New Menu Items <span className='pl-2'>{"->"}</span> </div>
          <div className='flex flex-col gap-4 lg:w-3/5 md:w-4/5 w-full'>
          {
            allitems?.map((elem)=>(
              <div  onClick={()=>{ setpurpose("from"); setdisplay(true);setdata(elem)}} className='grid md:grid-cols-[20%,30%,50%] md:grid-rows-1 grid-rows-3 border-b-2 items-center gap-2 h-auto'>
              <img src={elem.image}  className='w-24 h-24 rounded-full object-center'/>
              <h4 className='font-bold'>{elem.name}</h4>
              <p className='text-gray-600 text-sm'>{elem.desc}</p>
              </div>
            ))
          }
  
          </div>
          
      </div>
      
    )
  }
 
}

export default Menu