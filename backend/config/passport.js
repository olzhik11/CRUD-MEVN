const passport = require('passport')
const path = require('path')
const fs = require('fs')
const User = require('../models/user')
const JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt

const keyPath = path.join(__dirname, '/id_rsa_pub.pem')
const PUB_KEY = fs.readFileSync(keyPath, 'utf8')
const cookieExtractor = (req) => {
    let token = null;
    if (req && req.cookies)
    {
        token = req.cookies['jwt'];
    }
    return token;
};

const options = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: PUB_KEY,
    algorithm: ['RS256'],

}
const strategy = new JwtStrategy(options, (payload, done) => {
    User.findOne({_id: payload.sub})
        .then((user) => {
            if(user) {
                return done(null, user)
            }
            else{
                return done(null, false)
            }
        })
        .catch((err) => {done(err, null)})
})


module.exports = strategy