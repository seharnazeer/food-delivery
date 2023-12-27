import mongoose from "mongoose";
import User from "../../../Models/User";
import { getServerSession } from "next-auth";
import authOptions from "../auth/[...nextauth]/route";
import { NextResponse } from "next/server";
export async function PUT(req){
    const body=await req.json();
    console.log(body,[body.key],{
        [body.key]:body?.value
   })
    mongoose.connect(process.env.MONGO_DB_URI)
    const {user}=await getServerSession(authOptions);
    
   const userdetail=await User.findOneAndUpdate({email:user.email},
         { [body.key]:body.value },{new:true})
   console.log(userdetail)
    return NextResponse.json({response:userdetail})

}
export async function GET(req){

    mongoose.connect(process.env.MONGO_DB_URI)

    const {user}=await getServerSession(authOptions);
    
   const userdetail=await User.findOne({email:user.email})
    return NextResponse.json({response:userdetail})

}