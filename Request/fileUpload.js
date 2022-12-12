const express=require("express")
const multer=require("multer")
const port=3000;
const app=express();

const storage=multer.diskStorage({
    destination: (req,file,callBack)=>{
        callBack(null,"./uploads")
    },
    filename:(req,file,callBack)=>{
        callBack(null,file.originalname);
    }
})

const upload=multer({storage:storage}).single("myfile")//key name=myFile

app.post("/",(req,res)=>{
    upload(req,res,(e)=>{
        if (e) {
            throw e;
        } else {
            res.send("File upload successful")
        }
    })
})

app.listen(port,()=>{
    console.log(`Server listening on port ${port}`)
})