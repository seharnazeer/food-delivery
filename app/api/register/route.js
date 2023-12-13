import { NextResponse } from "next/server"
import User from "../../../Models/User"
import mongoose from "mongoose"
import bcrypt from "bcrypt"
export  async function POST(req){
    const body=await req.json();
    mongoose.connect(process.env.MONGO_DB_URI)
    const getUser=await User.findOne({email:body.email});
    console.log(getUser)
    if(!getUser){
        const notHashedPassword = body.password;
        const salt = bcrypt.genSaltSync(10);
        body.password = bcrypt.hashSync(notHashedPassword, salt);
    const createuser=await User.create(body)
    console.log(body)
    return NextResponse.json(createuser)
    }else{
        return NextResponse.json({error:"Email is already in use!"})
    }


}