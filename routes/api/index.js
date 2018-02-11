const router = require("express").Router();
const postRoutes = require("./post");
const blogRoutes = require('./blog')

//appends /user to routes
//route looks like /api/user/

router.use("/user", postRoutes);
router.use("/blog", blogRoutes);

module.exports = router