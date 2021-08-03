const express = require('express')
const postController = require('../controllers/controller')
const router = express.Router()
const db = require('../models/index')
const Post = db.schema

router.get('/', postController.welcome)

router.get('/posts', postController.getAllPosts)

router.get('/posts/:id', postController.getById)

router.put('/posts/:id', postController.updateOne)

router.post('/posts', postController.createPost)

router.delete('/posts/:id', postController.deleteOne)

router.delete('/posts', postController.deleteAll)

module.exports = router