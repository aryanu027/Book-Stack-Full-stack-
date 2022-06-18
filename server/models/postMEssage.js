const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
  title: String,
  author: String,
  read: String,
  selectedFile: String,
  createdAt: {
    type: Date,
    default: new Date(),
  },
});
let PostMessage = mongoose.model("PostMessage", postSchema);
module.exports = PostMessage;
