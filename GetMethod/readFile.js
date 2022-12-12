const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const route = require("./userRoutes");

const port = 9999;
const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static("public"));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/readFile.html"));
});

app.get("/process", (req, res) => {
  const firstName = req.query.firstName;
  const lastName = req.query.lastName;
  const userPassword = req.query.password;
  const about=req.query.aboutYou;
  res.send(
    `The firstName: ${firstName}\n The last name: ${lastName}\n The Password: ${userPassword}
    The aboutYou: ${about}`
  );

});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
