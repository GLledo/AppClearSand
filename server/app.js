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
app.use('/api/beach', require('./routes/beach.routes'))
app.use('/api/event', require('./routes/event.routes'))
app.use('/api/files', require('./routes/files.routes.js'))

//heroku
app.use((req,res) => {
    res.sendFile(__dirname + "/public/index.html")
})

module.exports = app
