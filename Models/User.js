import { timeStamp } from "console";
import { Schema,model,models } from "mongoose";
 const user=new Schema({
    name:{
        type:String
    },
    country:{
        type:String
    },
    city:{
        type:String
    },
    street:{
        type:String
    },
    postal:{
        type:String
    },
    phone:{
        type:String
    },
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
    },
    image:{
        type:String
    },
    admin:{
        type:Boolean,
        default:false
    }
 },{timeStamp:true})

const User=models?.User || model("User",user)
 export default  User