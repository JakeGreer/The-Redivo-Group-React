// ******************************************************************************
// apiRoutes.js - This file holds the api routes

// ******************************************************************************
// *** Dependencies
// ==============================================================================
const router = require("express").Router()
const blog = require("../../controllers/blogController.js")

// api routes
    router
        .route('/create')
        .post(blog.create)
    
    router
        .route('/get/:num/:limit')
        .get(blog.findPages)

    router
        .route('/getall')
        .get(blog.findAll)

    router
        .route('/update/:?')
        .post(blog.update)

    router
        .route('/remove/:?')
        .post(blog.destroy)

        

module.exports = router
