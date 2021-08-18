const User = require('../models/index').userSchema
const passport = require('passport')
const genPassword = require('../lib/utils').genPassword
const issueJWT = require('../lib/utils').issueJWT
const validPassword = require('../lib/utils').validPassword
const loginUser = (req, res) => {
    User.findOne({username: req.body.username})
        .then((user) => {
            if (!user) {
                return res.status(401).json({isAuth: false, message: "No such user."})
            }
            const isValid = validPassword(req.body.password, user.hash, user.salt)
            if (isValid) {
                const jwt = issueJWT(user)
                res.json({isAuth: true, username: user.username, token: jwt.token, expiresIn: jwt.expires}).status(200)
            }else {
                res.status(401).json({isAuth: false, message: "Incorrect password."})
            }

        })
}

const registerUser = (req, res) => {
     User.findOne({username: req.body.username})
         .then((user) => {
             console.log(user)
             if (user.username === req.body.username) {
                 console.log('here')
                 return res.status(401).json({message: 'Username already taken.'})

             }
         })
         .catch((err) => console.log(err))


    const Hash = genPassword(req.body.password)
    const newUser = new User({
        username: req.body.username,
        hash: Hash.hash,
        salt: Hash.salt
    })
    newUser.save()
        .then((user) => {
            console.log({success: true, user: user})
            res.status(200).json({user: user})
        })
        .catch((err) => {console.log(err)})
}
const protectedRoute = (req, res) => {
    res.status(200).json({isAuth: true, message: "You are authorized."})
}

const userPage = (req, res) => {
    if (!req.body){
        return res.status(200).json({message: 'Undefined'})
    }
    User.findOne({username: req.params.username})
        .then((user) => res.status(200).json({message: 'success', user: user }))
        .catch((err) => {console.log(err)})
}

module.exports = {
    loginUser,
    registerUser,
    protectedRoute,
    userPage
}