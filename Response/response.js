const express = require("express");
const port = 4040;
const app = express();
//response status code
//send means body and others
app.get("/", (req, res) => {
  res.status(203).send("This is home page..");
});

app.post("/name", (req, res) => {
  res.send("This is Mr. Tan..");
});

app.put("/contact", (req, res) => {
  res.send("This is contact page..");
});

app.delete("/info", (req, res) => {
  res.send("This is info page..");
});

let obj = [
  {
    Name: "Jin",
    Roll: "244",
    Address: "Khulna",
  },
  {
    Name: "Tan",
    Roll: 245,
    Address: "Dhaka",
  },
  {
    Name: "Jon",
    Roll: "243",
    Address: "Rajshahi",
  },
];

//json response
app.get("/infos", (req, res) => {
  res.status(202);
  res.json(obj).end();
  //res.send("This is json file"); Not working
});

//Download response
app.get("/download", (req, res) => {
  res.download("./package.json");
});

//response redirect--it changes the direction of the url
app.get("/Bangladesh", (req, res) => {
  res.redirect("http://localhost:4040/India");
});
app.get("/India", (req, res) => {
  res.send("This is India");
  res.status(202).end();
});

//Header==key value payer
app.get("/header", (req, res) => {
  res.append("name", "Jin");
  res.append("id", "191002161");
  res.status(292).send("Hello the is header!");
});

//cookies==key value payer
app.post("/cookies", (req, res) => {
  res.cookie("Name", "Jis");
  res.cookie("No", "dgl");
  res.status(203).send("Congratulations, run successfully!");
});

//cleaning cookies
app.get("/clearCookies", (req, res) => {
  res.clearCookie("Name");
  res.clearCookie("No");
  res.status(203).send("Congratulations, cookies cleared successfully!");
});

app.listen(port, () => {
  console.log(`The Server is running on port- ${port}`);
});
