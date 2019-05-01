const express = require("express");
const path = require("path");
const app = express();

//Settings
app.set("port", 3000);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname + "/views"));
app.engine("html", require("ejs").renderFile);

app.listen(port=app.get("port"), ()=>{
    console.log("Server en puerto ", port);
});

//Middlewares


//Static files
app.use(express.static(path.join(__dirname + "/public")));

//Routes
app.use(require("./routes/index"));