import mongoose from "mongoose";
import Item from "../../../Models/Items";
import { NextResponse } from "next/server";

export async function POST(req){
    const body=await req.json();
    await mongoose.connect(process.env.MONGO_DB_URI);
    const newuser=await Item.create(body.data);
    return NextResponse.json({message:"Item created successfully!"})
} 
export async function GET(req){
    await mongoose.connect(process.env.MONGO_DB_URI);
    const allItem=await Item.find();
    return NextResponse.json({message:allItem})
}
export async function PUT(req){
    const body=await req.json();
    const updateItem=await Item.findByIdAndUpdate(body.id,{...body.data})
    console.log(updateItem);
    return NextResponse.json({message:updateItem})
}