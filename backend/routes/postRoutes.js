const express = require('express')
const postController = require('../controllers/postController')
const router = express.Router()
const Post = require('../models/index').postSchema
const passport = require('passport')
const auth = passport.authenticate('jwt', {session: false})

router.get('/', postController.welcome)

router.get('/posts', postController.getAllPosts)

router.get('/posts/:id', auth, postController.getById)

router.put('/posts/:id', auth, postController.updateOne)

router.post('/posts', postController.createPost)

router.delete('/posts/:id', auth, postController.deleteOne)

router.delete('/posts', auth, postController.deleteAll)

module.exports = router