const mongoose=require("mongoose")

const booksModels=new mongoose.Schema({
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
})