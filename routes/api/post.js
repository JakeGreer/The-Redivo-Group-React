const router = require("express").Router();
const posts = require("../../controllers/postController.js");

router
    .route("/search")
    .post(posts.search)

// router
//     .route('/autocomplete')
//     .get(posts.autoc)

module.exports = router