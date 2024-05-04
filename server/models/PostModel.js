const mongoose = require("mongoose");
const postSchema = new mongoose.Schema(
  {
    title: {
      required: true,
      type: String,
      unique: true,
    },
    desc: {
      required: true,
      type: String,
    },
    photo: {
      required: false,
      type: String,
    },
    username: {
      required: true,
      type: String,
    },
    categories: {
      type: Array,
      required: false,
    },
  },
  { timestamps: true }
);

const Post = new mongoose.model("Post", postSchema);
module.exports = Post;
