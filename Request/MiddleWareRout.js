/*There are two types of middle ware: 
1. App level middle Wave
2. Route level middle ware */
const express = require("express");
const port = 3000;
const app = express();

app.post("/", (req, res) => {
  res.send("This is running");
});

//using only for rout
app.use("/info", (req, res, next) => {
  console.log("This is middleware");
  next();
});

app.post("/info", (req, res) => {
  res.send("This is Info");
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
