const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
require("dotenv").config();

//task schema
const { Task } = require("./models/models");

const app = express();
app.use(express.json());

app.get("/tasks", async (req, res) => {
  try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

app.post("/task", async (req, res) => {
  try {
    const newTask = new Task({ ...req.body });
    const savedTask = await newTask.save();
    res.status(201).json(savedTask);
  } catch (error) {
    res.status(400).json({ error: "Bad request" });
  }
});

// Update the status of an existing task by ID
app.put("/task/:_id", async (req, res) => {
  const { _id } = req.params;
  const { status, title, description } = req.body;

  try {
    const updatedTask = await Task.findByIdAndUpdate(
      _id,
      { status, title, description }, // Combine the fields into one object
      { new: true }
    );
    if (!updatedTask) {
      res.status(404).json({ error: "Task not found" });
    } else {
      res.json(updatedTask);
    }
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

app.delete("/task/:_id", async (req, res) => {
  const { _id } = req.params;

  try {
    const deletedTask = await Task.findByIdAndRemove(_id);

    if (!deletedTask) {
      res.status(404).json({ error: "Task not found" });
    } else {
      res.json({ message: "Task deleted successfully" });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

const PORT = process.env.PORT || 3000;

const start = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    app.listen(3000, () => console.log("Server started on port 3000"));
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

start();
