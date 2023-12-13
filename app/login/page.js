"use client";
import React, { useState } from "react";
import Google from "../../components/home/icons/google";
import Link from "next/link";
import { signIn } from "next-auth/react";
import Heading from "../../components/heading"
const Login = () => {
  const [email, setemail] = useState("");
  const [password, setpasword] = useState("");
  const [progress,setprogress]=useState(false);
  const handleSubmit=async(e)=>{
   e.preventDefault()
   setprogress(true)
   await signIn('credentials',{email,password,callbackUrl:"/"})
   setprogress(false)
  }
  return (
    <div className=" flex pt-6 flex-col justify-center items-center">
      <Heading title={"Login"} />
      <form onSubmit={handleSubmit} className="flex flex-col gap-8 w-96 inset  shadow-xl p-12 rounded-xl ">
        <input
          type="text"
          placeholder="Email"
          className="text-field"
          value={email}
          onChange={({ target: { value } }) => setemail(value)}
        />
        <input
          type="password"
          placeholder="Password..."
          value={password}
          className="text-field"
          onChange={({ target: { value } }) => setpasword(value)}
        />
        <button type="submit" className="bg-primary p-2 rounded-full text-white">
          Login
        </button>
        <div onClick={()=>{signIn("google",{callbackUrl:"/"})}} className=" flex gap-4  rounded-full border-primary border-2 p-4 text-black">
          <Google />
          <h4>Sign In with Google</h4>
        </div>
        <h3 className="mx-auto text-secondary">Don't have account? <span><Link href={"/register"}>{" "}{progress?"loading...":"SignUp"}</Link></span></h3>
      </form>
    </div>
  );
};

export default Login;
