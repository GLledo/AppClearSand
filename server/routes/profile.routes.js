const express = require("express")
const router = express.Router()
const User = require("../models/User.model")

router.get('/edit-user/:id', (req, res, next) => {

    const userId = req.params.id
    
    User.findById(userId)
    .then(theUser => res.json(theUser))
    .catch(err => next(err))
  })

router.post('/edit', (req, res, next) => {
  
  const {username, bio, imgurl}  = req.body
  
  User.findByIdAndUpdate(req.user._id, { username, bio, imgurl } , {new : true})
      .then(theUser =>res.json(theUser))
      .catch(err => next(err))
    })
  
router.get('/' , (req, res, next) => {
    
    User.findById(req.user._id)
      .populate('property')
      .populate({
        path : 'comeup',
        populate : {
          path : 'useridcreator'
        }
      })
      .then(theUser =>res.json(theUser))
      .catch(err => next(err))

})

module.exports = router