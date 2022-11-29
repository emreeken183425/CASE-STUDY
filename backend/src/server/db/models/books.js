const mongoose=require("mongoose")

const booksSchema=new mongoose.Schema({
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
    category:{
        type:String,
        required:true,
        trim:true 
    },
    publisher:{
        type:String,
        required:true,
        trim:true 
    },
    copmlated:{
        type:Boolean,
        default:false
    }
},{collation:"books",timestamps:true})



const books=mongoose.model("books",booksSchema)

module.exports=books