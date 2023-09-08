const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

//task schema
const {Task} = require("./models/models.tasks");

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

// Create a new task
app.post("/task", async (req, res) => {
  const { title, description, status } = req.body;

  try {
    const newTask = new Task({ title, description, status });
    const savedTask = await newTask.save();
    res.status(201).json(savedTask);
  } catch (error) {
    res.status(400).json({ error: "Bad request" });
  }
});

// Update the status of an existing task by ID
app.put("/task/:id", async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  try {
    const updatedTask = await Task.findByIdAndUpdate(
      id,
      { status },
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













const PORT = process.env.PORT || 300;

console.log(process.env.MONGO_URL);

// mongoose.connect(process.env.MONGO_Url, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => {
//     console.log(`Connected to MongoDB`);
//     app.listen(PORT, () => {
//       console.log(`Server Running on Port: http://localhost:${PORT}`);
//     });
//   })
//   .catch((error) => {
//     console.log(`${error} did not connect`);
//   });

// const start = async () => {
//   try {
//     await mongoose.connect(
//       process.env.CONNECTION_URL
//     );
//     app.listen(3000, () => console.log("Server started on port 3000"));
//   } catch (error) {
//     console.error(error);
//     process.exit(1);
//   }
// };
