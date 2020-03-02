require('dotenv').config()
   
// Database connection
require('./configs/mongoose.config')

const express = require('express')
const app = express()

// Configs
require('./configs/middleware.config')(app)
require('./configs/local.config')(app)
require('./configs/session.config')(app)
require('./configs/hbs.config')
require('./configs/passport.config')(app)
require('./configs/passport')(app)

// URLS
app.use('/api/', require('./routes/index.routes'))
app.use('/api/auth', require('./routes/auth.routes'))

module.exports = app
