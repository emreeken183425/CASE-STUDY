const mongoose=require("mongoose")

const publisherSchema=new mongoose.Schema({
    name:{
       type:String,
       required:true,
       trim:true 
    },
    decription:{
        type:String,
        required:true,
        trim:true 
    },
    date:{
        type:Number,
        required:true,
        trim:true 
    }
},{collation:"publisher",timestamps:true})



const publisher=mongoose.model("books",publisherSchema)

module.exports=publisher