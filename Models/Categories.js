import { timeStamp } from "console";
import { Schema,model,models } from "mongoose";
 const category=new Schema({
    categories:[{
        type: String
    }],
    email:{
        type:String,
        required:true,
        unique:true

    },

 },{timeStamp:true})

const Category=models?.Category || model("Category",category)
 export default  Category