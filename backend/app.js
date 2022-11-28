const express=require("express")
const app = express()
require("dotenv").config()
require("./src/config/databaseconnection")
const port=process.env.PORT || 5001
const authorRouter=require("./src/server/routers/authorRouter")

app.use(express.json())

app.use("/api",authorRouter)

app.get("/",(req,res)=>{
    res.send("hoş geldiniz")
})


app.listen(port,()=>{
    console.log(`Server ${port} portundan başlatıldı `);
})