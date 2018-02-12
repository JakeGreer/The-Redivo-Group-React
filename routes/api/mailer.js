const router = require("express").Router();
const mailer = require("../../controllers/mailController.js");

router
    .route("/send")
    .post(posts.sendMail)

module.exports = router