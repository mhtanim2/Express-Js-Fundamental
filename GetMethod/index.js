const express = require("express");
const path=require('path');
const bodyParser=require('body-parser');
const route=require('./userRoutes')

var app = express();
const port=process.env.port||8000;  

app.use(express.static('public'));  
app.use(bodyParser.urlencoded({extended:false}))
app.use(express.json());
app.use("/api/vi",route);
app.use(bodyParser.json());

app.get("/",(req,res)=>{
   res.sendFile(path.join(__dirname+'/index.html'))
});


app.listen(port,()=>{
   console.log(`Server is Working on port: ${port}`);
   
})
