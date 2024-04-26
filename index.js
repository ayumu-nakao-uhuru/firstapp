const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.set("view engine","ejs");

app.use("/public", express.static("public"));
const routers = require("./routes");
app.use(routers);
const app = require('./app'); 
// localhost:3000で起動
const server = app.listen(3000, () => {
    console.log("Listening on localhost port 3000");
});
module.exports = server;