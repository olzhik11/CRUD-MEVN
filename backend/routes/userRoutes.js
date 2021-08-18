const router = require('express').Router()
const User = require('../models/index').userSchema
const passport = require('passport')
const userController = require('../controllers/userController')
const auth = passport.authenticate('jwt', {session: false})

const isAuth = () => {
    passport.authenticate('jwt', {session: false})
}

router.post('/user/login', userController.loginUser)

router.post('/user/register', userController.registerUser)

router.get('/user/:username', auth, userController.userPage)

module.exports = router