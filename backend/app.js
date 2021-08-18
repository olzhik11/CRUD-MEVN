const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const routes = require('./routes/index')
const mongoose = require('mongoose')
const PORT = process.env.PORT || '5000'
const path = require('path')
const passport = require('passport')
const cookieParser = require('cookie-parser')
require('dotenv').config()

const app = express()

//Different Middlewares
app.use(bodyParser.json())
   .use(bodyParser.urlencoded({ extended: true }))
   .use(cors())
    .use(cookieParser())

//passport usage
const strategy = require('./config/passport')
passport.use(strategy)
app.use(passport.initialize())

if (process.env.NODE_ENV !== 'development'){
    app.use(express.static(path.join(__dirname,'../frontend/dist')))
    app.get('/', (req, res) => {
        res.sendFile(path.join(__dirname, '../frontend/dist/index.html'))
    })
    const dbURL = process.env.LOCAL_MONGODB_URI
}


const dbURL = process.env.LOCAL_MONGODB_URI
mongoose.connect(dbURL, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true})
        .then(()=> {console.log("Connected to the Database")
                    app.listen(PORT, () => {console.log(`Server started on the port: ${PORT}`)})})
        .catch((err) => {console.log("Some problems with Database", err)})

app.use('/', routes)

