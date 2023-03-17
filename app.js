const express = require("express");
const app = express();

const port = 8080;

app.set("view engine", "ejs");
app.set("/views", "views");
app.use("/static", express.static(__dirname + "/static")); // dirname: 현재위치의

app.get("/", function (request, response) {
  //   response.send("<h1>안녕하세요</h1>
  //   ");
  response.render("test.ejs");
});

/* request: 클라이언트가 서버에게 보내는 요청
response: 서버가 클라이언트에게 보내는 응답 */

app.get("/login", (req, res) => {
  res.render("login");
});

app.listen(port, () => {
  console.log(port + "is open!");
});

app.get("/login/register", (req, res) => {
  res.render("register");
});
