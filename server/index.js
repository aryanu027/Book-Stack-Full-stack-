const express = require("express");
const app = express();
const BodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb" }));
app.use(BodyParser.urlencoded({ extended: true }));
const postMessage = require("./models/postMEssage");
app.get("/notes", async (req, res) => {
  try {
    const PostMessage = await postMessage.find();
    res.status(200).json(PostMessage);
  } catch (error) {
    res.status(404).send("Note not found");
  }
});
//
app.post("/notes", async (req, res) => {
  const { title, author, selectedFile, read } = req.body;
  const newNote = new postMessage({ title, author, selectedFile, read });
  try {
    await newNote.save();
    res.status(201).json(newNote);
  } catch (error) {
    res.status(409).send("Note not created");
  }
});
//
app.delete("/notes/:id", async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).send("Book ID not valid");
  }
  await postMessage.findByIdAndDelete(id);
  res.json({ message: "Deleted Successfully!" });
});
//
const CONNECTION_URL =
  "mongodb+srv://aryan12:xdLYHHytVkGR9ghG@cluster0.vxbnxjf.mongodb.net/?retryWrites=true&w=majority";
mongoose
  .connect(CONNECTION_URL)
  .then(() => {
    app.listen(2500, () => {
      console.log("listening on port 2500");
    });
  })
  .catch((err) => console.log(err));
