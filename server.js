const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();
const port = demo.yatharup.com;

app.get("/", function (req, res) {
  const filePath = path.resolve(__dirname, "./public", "index.html");

  fs.readFile(filePath, "utf8", function (err, data) {
    if (err) {
      return console.log(err);
    }

    data = data.replace(/{{title}}/, "Welcome");
    data = data.replace(
      /{{description}}/,
      "Welcome to my site"
    );

    res.send(data);
  });
});

app.get("/gallery", function (req, res) {
  const filePath = path.resolve(__dirname, "./public", "index.html");

  fs.readFile(filePath, "utf8", function (err, data) {
    if (err) {
      return console.log(err);
    }

    data = data.replace(/{{title}}/, "Gallery");
    data = data.replace(/{{description}}/, "About Gallery");

    res.send(data);
  });
});

app.get("/blog", function (req, res) {
  const filePath = path.resolve(__dirname, "./public", "index.html");

  fs.readFile(filePath, "utf8", function (err, data) {
    if (err) {
      return console.log(err);
    }

    data = data.replace(/{{title}}/, "blog");
    data = data.replace(/{{description}}/, "about blog");

    res.send(data);
  });
});

app.use(express.static(path.resolve(__dirname, "./public")));

app.get("*", function (req, res) {
  const filePath = path.resolve(__dirname, "./public", "index.html");
  fs.readFile(filePath, "utf8", function (err, data) {
    if (err) {
      return console.log(err);
    }

    data = data.replace(/{{title}}/, "Sachin Verma");
    data = data.replace(
      /{{description}}/,
      "Sachin Verma's personal site and blog"
    );

    res.send(data);
  });
});

app.listen(port, () => console.log(`Listening on port ${port}`));