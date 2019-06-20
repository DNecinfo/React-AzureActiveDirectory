const express = require("express");
const path = require("path");
const cors = require("cors");
var tediousExpress = require("express4-tedious");
const app = express();

app.use(cors());
app.use(require("cookie-parser")());
app.use(require("body-parser").urlencoded({ extended: true }));
app.use(
  require("express-session")({
    secret: "keyboard cat",
    resave: true,
    saveUninitialized: true,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 355
    }
  })
);

var port = process.env.PORT || 5000;
app.use(express.static(path.join(__dirname, "/client/build")));

//DB
var config = {
  authentication: {
    options: {
      userName: "amolmahajan",
      password: "aswqer123!"
    },
    type: "default"
  },
  server: "lpplus.database.windows.net",
  options: {
    database: "lpplusdb",
    encrypt: true
  }
};

app.use(function(req, res, next) {
  req.sql = tediousExpress(config);
  next();
});

app.get("/getMessage", function(req, res) {
  res.status(200).send({ message: "YAY! Congratulations! Your first endpoint is working" });
});

app.get("/getSchoolName", (req, res) => {
  console.log(req.query.username);
  req.sql("SELECT SchoolName from SchoolDetails WHERE UserName=" + "'" + req.query.username + "'").into(res);
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client/build/index.html"));
});

app.listen(port, () => {
  console.log("Listening " + port);
});
