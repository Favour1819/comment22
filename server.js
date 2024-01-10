// import your database connection 
require ('./dbconfig/dbconfig')

// import express

const  express = require("express")

// create the application instance 
const app = express();
app.use(express.json())
//use the json format
const router = require('./Router/poemrouter')
app.use(router)

app.get("/api/v1",(req,res) =>(
   res.send ("welcome to poem API")
));

//
const port = 2000
app.listen(port,()=>(
    console.log (`server is listening on port:${port}`)
));


