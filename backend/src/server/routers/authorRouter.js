const router =require("express").Router()
const authorcontroller=require("../controllers/authorcontroller")



router.post("/author",authorcontroller.authorAdd)

router.get("/author",authorcontroller.authorGetAll )


module.exports=router