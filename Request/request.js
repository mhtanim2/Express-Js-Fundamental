const express=require("express")
const app=express();
const bodyParser=require("body-parser");
const multer=require("module");
const multer=multer()
app.use(express.static('public'));
const port=8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
//write data in body and display
/* app.post("/",(req,res)=>{
    let jsonData=req.body;
    let data=JSON.stringify(jsonData);
    res.send(data);
}) */

//write multiple data in body and display
app.use(multer.array());

app.post("/",(req,res)=>{
    let jsonData=req.body;
    let data=JSON.stringify(jsonData);
    app.json()
    res.send(data);
});

//get request manage
/* app.get("/",(req,res)=>{
    let firstName=req.query.firstName;
    let middleName=req.query.middleName;
    let lastName=req.query.lastName;
    res.pl,/(`${firstName} ${middleName} ${lastName}`)
}) */

//post request manage

//request in body query
/* app.post("/",(req,res)=>{
    let firstName=req.query.firstName;
    let middleName=req.query.middleName;
    let lastName=req.query.lastName;
    res.send(`${firstName} ${middleName} ${lastName}`)
}) */

//request in header
/* app.post("/",(req,res)=>{
    let userName=req.header("userName")
    let pass=req.header("pass")
    res.send(`Username: ${userName} Password: ${pass}`)
}) */

//listening the servers
app.listen(port,()=>{
    console.log(`Server listening on port ${port}`);
});