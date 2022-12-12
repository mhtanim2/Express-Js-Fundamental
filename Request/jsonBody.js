const express=require('express');
const bodyParser=require('body-parser')
const port=3300;
const app=express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}))


app.post("/",(req,res)=>{
    const bodyData=req.body;
    const bodyString=JSON.stringify(bodyData);
    res.send(bodyString)
})
app.post("/info",(req,res)=>{
    const getBody=req.body;
    const FirstName=getBody.FirstName;
    const LastName=getBody.LastName;
    const id=getBody.id;
    const address=getBody.address;
    res.send(`Name: ${FirstName} ${LastName} ID: ${id} Address: ${address}`)

})


app.listen(port,()=>{
    console.log("Listening the port from: "+port);
})