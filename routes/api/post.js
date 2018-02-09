const router = require("express").Router();
const posts = require("../../controllers/postController.js");

router
  .route("/browse")
  .post(posts.findPosts)