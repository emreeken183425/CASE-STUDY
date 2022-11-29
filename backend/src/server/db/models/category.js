const mongoose=require("mongoose")

const categorySchema=new mongoose.Schema({
    name:{
       type:String,
       required:true,
       trim:true 
    },
    decription:{
        type:String,
        required:true,
        trim:true 
    }
},{collation:"category",timestamps:true})



const category=mongoose.model("books",categorySchema)

module.exports=category