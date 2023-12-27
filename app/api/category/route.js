import Category from "../../../Models/Categories";
import { getServerSession } from "next-auth";
import authOptions from "../auth/[...nextauth]/route";
import mongoose from "mongoose";
import { NextResponse } from "next/server";
export async function PUT(req){
    const body=await req.json();
    console.log(body)
    mongoose.connect(process.env.MONGO_DB_URI)
    const {user}=await getServerSession(authOptions);
   const updateValue= await Category.findOneAndUpdate({email:user.email},{
        $push:{
            categories:body.categories
        }
    },{new:true})
    return NextResponse.json({categories:updateValue})

}

export async function GET(req){

    mongoose.connect(process.env.MONGO_DB_URI)
    const {user}=await getServerSession(authOptions);
    const updateValue=await Category.findOne({email:user.email})
    return NextResponse.json({categories:updateValue})

}
export async function POST(req){
    mongoose.connect(process.env.MONGO_DB_URI)
    const {user}=await getServerSession(authOptions);
    await Category.create({email:user.email})
    return NextResponse.json({"ok":"ok"})

}