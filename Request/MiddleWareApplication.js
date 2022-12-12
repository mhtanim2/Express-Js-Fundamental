/*There are two types of middle ware: 
1. App level middle Wave
2. Route level middle ware */
const express = require("express");
const port = 3000;
const app = express();
app.use((req, res, next) => {
  console.log("This is middleware");
  next();
});

app.post("/", (req, res) => {
  res.send("This is running");
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
