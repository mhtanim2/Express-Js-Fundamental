const express=require('express');
const bodyParser=require('body-parser');
const multer = require('multer');
const upload=multer();
const port=3030;
const app=express();

app.use(bodyParser.json());
app.use(upload.array());
app.use(express.static('public'));

app.post("/",(req,res)=>{
    const readFile=req.body;
    const getFile=JSON.stringify(readFile);
    res.send(getFile);
})

app.post("/info",(req,res)=>{
    const getBody=req.body;
    const FirstName=getBody.FirstName;
    const LastName=getBody.LastName;
    const id=getBody.id;
    const address=getBody.address;
    res.send(`Name: ${FirstName} ${LastName} ID: ${id} Address: ${address}`)
})


app.listen(port,(req,res)=>{console.log("Listening the port from: "+port);
})