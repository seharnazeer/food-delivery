"use client";
import React, { useState } from "react";
import Google from "../../components/home/icons/google"
import Link from "next/link";
import toast from "react-hot-toast";
import {useRouter} from "next/navigation";
import { signIn } from "next-auth/react";
import Heading from "../../components/heading"
const Register = () => {
  const [email, setemail] = useState("");
  const [password, setpasword] = useState("");
  const [username, setusername] = useState("");
  const router=useRouter();
  const handleSubmit=(e)=>{
  e.preventDefault()
   fetch("/api/register",{
    method:"post",
    headers:{
      'Content-Type':"application/json"
    },
    body:JSON.stringify({
      username,email,password
    })
   }).then(data=>data.json()).then(data=>{
    console.log(data)
   
    if(data.error){
      toast.error(data.error)
    }else{
      toast("Your account registered succesfully",{icon:"🙂"})
      router.push("/login")
    }
    
   })
  }
  return (
    <div className=" flex pt-6 flex-col justify-center items-center">
       <Heading title={"Register"} />
      <form onSubmit={handleSubmit} className="flex flex-col gap-8 w-96 inset  shadow-xl p-12 rounded-xl ">
        <input
          type="text"
          placeholder="Email"
          className="text-field"
          value={email}
          onChange={({ target: { value } }) => setemail(value)}
        />
        <input
          type="text"
          placeholder="Username"
          className="text-field"
          value={username}
          onChange={({ target: { value } }) => setusername(value)}
        />
        <input
          type="password"
          placeholder="Password..."
          value={password}
          className="text-field"
          onChange={({ target: { value } }) => setpasword(value)}
        />
        <button type="submit" className="bg-primary p-2  rounded-full text-white">
          Register
        </button>
        <div onClick={()=>signIn("google",{callbackUrl:"/"})} className=" flex gap-4  rounded-full border-primary border-2 p-4 text-black">
          <Google />
          <h4>Sign In with Google</h4>
        </div>
        <h3 className="mx-auto text-secondary">Have account? <span><Link href={"/login"}>{" "}SignIn</Link></span></h3>
      </form>
    </div>
  );
};

export default Register;
