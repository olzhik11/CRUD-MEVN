const fs = require('fs')
const crypto = require('crypto')
const path = require('path')
const jsonwebtoken = require('jsonwebtoken')
const keyPath = path.join(__dirname, '../config/id_rsa_priv.pem')
const moment = require('moment')

const PRIV_KEY = fs.readFileSync(keyPath, 'utf8')

function validPassword(password, hash, salt) {
    const hashVerify = crypto.pbkdf2Sync(password, salt, 10000, 64, 'sha512').toString('hex');
    return hash === hashVerify;
}
function genPassword(password) {
    const salt = crypto.randomBytes(32).toString('hex');
    const genHash = crypto.pbkdf2Sync(password, salt, 10000, 64, 'sha512').toString('hex');

    return {
        salt: salt,
        hash: genHash
    };
}
function issueJWT(user) {
    const _id = user._id;
    const expiresIn = 0
    const payload = {
        sub: _id,
        iat: Date.now(),
    };

    const signedToken = jsonwebtoken.sign(payload, PRIV_KEY, { expiresIn: expiresIn, algorithm: 'RS256' });
    return {
        token: "Bearer " + signedToken,
        expires: expiresIn
    }
}

module.exports = {
    issueJWT,
    genPassword,
    validPassword
}