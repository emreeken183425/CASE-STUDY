const mongoose=require("mongoose")

const authorSchema=new mongoose.Schema({
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
    copmlated:{
        type:Boolean,
        default:false
    }
},{collation:"Author",timestamps:true})



const author=mongoose.model("author",authorSchema)

module.exports=author