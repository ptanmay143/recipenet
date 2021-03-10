const express = require("express");
const app = express();
const body_parser = require("body-parser");

app.set("view engine", "pug");
app.use(express.static(__dirname + "/public"));
app.use(body_parser.text());

app.get("/", (req, res) => {
    res.render("index", {
        page: "index",
        title: "Home"
    });
});
app.get("/tool", (req, res) => {
    res.render("tool", {
        page: "tool",
        title: "Tool"
    });
});
app.get("/recommendation", (req, res) => {
    const dataset = require("./data/data.json");
    const childProcess = require("child_process");
    const command = "python py-calculate-similarity.py";
    console.log("Python input:", req.query.input);
    const python = childProcess.spawnSync("conda", [
        command, req.query.input
    ], {
        shell: true
    });
    output = python.stdout.toString();
    output = output.slice(0, 4);
    console.log("Python output:", output);
    console.log("Similar recipe id:", +output);
    const recipe = dataset.find(p => p.id === +output);
    res.render("recommendation", {
        page: "recommendation",
        title: "Recommendation",
        recipe: recipe
    });
});
app.get("/about", (req, res) => {
    res.render("about", {
        page: "about",
        title: "About"
    });
});

app.listen(9876);
