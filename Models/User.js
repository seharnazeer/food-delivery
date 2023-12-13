import { timeStamp } from "console";
import { Schema,model,models } from "mongoose";
 const user=new Schema({
    email:{
        type:String,
        required:true,
        unique:true

    },
    password:{
        type:String,
        required:true,
    },
    username:{
        type:String,
        required:true
    }
 },{timeStamp:true})

const User=models?.User || model("User",user)
 export default  User