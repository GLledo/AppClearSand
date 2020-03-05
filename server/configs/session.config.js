 
const passport = require('passport')
const mongoose     = require('mongoose')
const session = require('express-session')
const MongoStore = require('connect-mongo')(session)
require('./passport.config')

module.exports = app => {
    // Enable authentication using session + passport
    app.use(session({
        secret: 'Whatever',
        resave: true,
        saveUninitialized: true,
        store: new MongoStore( { mongooseConnection: mongoose.connection })
    }))
    app.use(passport.initialize())
    app.use(passport.session())
}