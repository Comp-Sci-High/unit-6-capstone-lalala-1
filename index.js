
const mongoose = require("mongoose");
const express = require("express");

const app = express();

app.use(express.static(__dirname + "/public"));

app.use(express.json());

app.set("view engine", "ejs");

app.use((req, res, next) => {
    console.log(`${req.method}: ${req.path}`);
    next();
});

const studentSchema = new mongoose.Schema(
    {
        name: { type: String },
        Mathgrade: { type: String, default:0 },
        Scigrade: { type: Number, default: 0 },
        ELAgrade: { type: Number, default: 0 },
        Histgrade: { type: Number, default: 0 },
        CSgrade: { type: Number, default: 0 },
        numberOfF:{type: Number}
    }
);

const Student = mongoose.model("Student", studentSchema, "Students");

app.get("/", async (req, res) => {
    const students = await Student.find({});
    res.render("student.ejs", { students });
});

// Task 1: Write the DELETE route to delete by ID
// Complete tasks 2 & 3 in alma.ejs and script.js
app.delete("/delete/:_id", async (req, res) => {
    const response = await Student.findOneAndDelete({ _id: req.params._id })
    res.json(response);    
});

// Task 4: Write the PATCH route to update by ID 
app.patch("/student/:_id", async (req, res) => {
    const response = await Student.findOneAndUpdate({ _id: req.params._id }, 
    req.body, {new: true})
    res.json(response);
    });
    


async function startServer() {
    // Add your SRV string, make sure that the database is called SE12
    await mongoose.connect("mongodb+srv://SE12:CSH2025@cluster0.xfcbvkb.mongodb.net/grades?retryWrites=true&w=majority&appName=Cluster0");
 
    app.listen(3000, () => {
        console.log(`Server running.`);
    });
}

startServer();