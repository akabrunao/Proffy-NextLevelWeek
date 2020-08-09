const express = require("express");
const server = express();

const {
  pageLanding,
  PageStudy,
  PageGiveClasses,
  saveClasses,
} = require("./pages");

//nunjucks
const nunjucks = require("nunjucks");
nunjucks.configure("src/views", {
  express: server,
  noCache: true,
});

server
  .use(express.urlencoded({ extended: true }))
  .use(express.static("public"))

  .get("/", pageLanding)

  .get("/study", PageStudy)

  .get("/give-classes", PageGiveClasses)
  .post("/save-classes", saveClasses)

  .listen(5500);
