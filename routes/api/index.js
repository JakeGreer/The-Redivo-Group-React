const router = require("express").Router();
const postRoutes = require("./post");

//appends /user to routes
//route looks like /api/user/

router.use("/user", postRoutes);

module.exports = router