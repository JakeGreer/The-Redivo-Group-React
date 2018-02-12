const router = require("express").Router();
const postRoutes = require("./post");
const blogRoutes = require('./blog')
const mailRoutes = require('./mailer')

//appends /user to routes
//route looks like /api/user/

router.use("/user", postRoutes);
router.use("/blog", blogRoutes);
router.use("/mail", mailRoutes);

module.exports = router