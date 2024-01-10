// import express
const express = require("express");
const router = express.Router();
const {externalData,getAll,getOne,update,deleteOne}=require("../controller/poemcontroller")
//create your routes
//fetch exernal data
router.get("/external-data",externalData)
router.get ('/getall',getAll)
router.get('/getOne/:id',getOne)
router.put('/update/:id', update)
router.delete('/delete/:id',deleteOne)
// export router


module.exports=router;