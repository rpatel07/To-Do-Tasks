import express from "express";
import bodyParser from "body-parser";

const app = express();
const taskList = [];

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.listen(3000, () => {
    console.log("Listening on port 3000");
});

app.get("/", (req, res) => {
    res.render("index", { th: taskList });
});

app.post("/add", (req, res) => {
    const task = req.body.task;
    taskList.push(task);
    res.redirect("/");
});

app.post("/delete/:i", (req, res) => {
    const taskId = req.params.i;
    taskList.splice(taskId, 1);
    res.redirect("/");
});

