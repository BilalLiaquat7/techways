const path = require("path");
const express = require("express");
const port = process.env.PORT || 8000;
const app = express()

const staticPath = path.join(__dirname, "../public");
// console.log(path.join(__dirname, "../public"));
app.use(express.static(staticPath))


//to set engine for dynamic content
app.set("view engine", "hbs");



app.get("/", (req,res) => {
    // res.send("Hello World from express");
    res.render("index", {
        Myname: "Mughal Tech",
    });
});

app.get("/about", (req,res) => {
    res.send("Welcome to About Page");
});

app.get("/contact", (req,res) => {
    res.send("Welcome to About Page");
});

app.get("/temp", (req,res) => {
    res.send({
        id: 1,
        name: "Bilal"
    }
    );
});

app.listen(port, () => {
    console.log("listening port 8000");
});