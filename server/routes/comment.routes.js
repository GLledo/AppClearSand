const express = require('express');
const router  = express.Router();
const Comment = require("../models/Comment.model")
const Event = require("../models/Event.model")

router.post('/new-comment', (req, res, next) => {
    
  const {text,event}  = req.body

  const comment ={
      text,
      event,
      userid: req.user._id
  }

  Comment.create(comment)
      .then(theComment => Event.findByIdAndUpdate(req.body.event,{$push:{comment: theComment._id}},{new: true}).populate({
        path : 'comment',
        populate : {
          path : 'userid'
        }
      }))
      .then(x => res.json(x))
      .catch(err => next(err))
})

module.exports = router