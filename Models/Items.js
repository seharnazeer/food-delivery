import { timeStamp } from "console";
import { Schema,model,models } from "mongoose";
 const item=new Schema({
     name:{
        type:String
     },
     desc:{
        type:String
     },
     sizes:[{
        name:{
            type:String
        },
        price:{
            type:Number
        }
     }],
     image:{
        type:String
     },
     category:{
        type:String
     }
 },{timeStamp:true})

const Item=models?.Item || model("Item",item)
 export default  Item