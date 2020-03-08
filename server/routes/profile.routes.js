const express = require("express")
const router = express.Router()
const User = require("../models/User.model")

router.get('/edit-user', (req, res, next) => {

    const userId = req.user.id
  
    User.findById(userId)
    .then(theUser => res.json(theUser))
    .catch(err => console.log(err))
  })

router.post('/edit-user/:id', (req, res, next) => {

const userId = req.params.id
const picture = req.file.url
const { username } = req.body
  
User.findByIdAndUpdate(userId, { username, picture })
    .then(theUser => res.json(theUser))
    .catch(err => console.log(err))
  })
  
router.get('/' , (req, res, next) => {
    
    console.log(req.user._id)
    User.findById(req.user._id)
      .populate('property')
      .populate('comeup')
      .then(theUser =>res.json(theUser))
      .catch(err => console.log(err))

})
  //, uploadCloud.single('picture')
module.exports = router