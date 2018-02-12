const router = require("express").Router();
const mailer = require("../../controllers/mailController.js");

router
    .route("/send")
    .post(mailer.sendMail)

module.exports = router