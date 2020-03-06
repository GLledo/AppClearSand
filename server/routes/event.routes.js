const express = require('express');
const router  = express.Router();

const User = require('../models/User.model')
const Event = require('../models/Event.model')
const Beach = require('../models/Beach.model')

router.post('/new', (req, res, next) => {

    const {imgurl, description, title, dateevent} = req.body.event
    const {useridcreator} = req.user._id
    const {beach} = req.body.id
    
    const user = {
      useridcreator,
      imgurl,
      description,
      beach,
      title,
      dateevent
    }

    Event.create(user)
    .then(eventID =>{

      const promise1 = User.findByIdAndUpdate(req.user._id, {$push: {property: eventID._id}}, { new: true })
      const promise2 = Beach.findByIdAndUpdate(req.body.id, {$push: {event: eventID._id}}, { new: true })
      return Promise.all([promise1,promise2])

      })
    .then(x => {
      const message = {msg: "Tu id de evento se ha guardado en tu usuario y en la playa"}
        res.status(200).json(message)
      })
    .catch(err => console.log(err))

  })

  router.get('/getOneEvent/:id', (req, res, next) => {

    Event.findById(req.params.id)
      .populate({ path: "userid", select: "username" })
      .then(theEvent => res.json(theEvent))
      .catch(err => console.log(err))

  })

  router.post('/addUser/:id', (req, res, next) => {

    let userComeUp = {}
    req.user.comeup.includes(req.params.id) ? userComeUp = {$pull: {comeup: req.params.id}} : userComeUp = {$push: {comeup: req.params.id}}
    
    const promise1 = User.findByIdAndUpdate(req.user._id, userComeUp, {new: true})

    const promise2 =  Event.findById(req.params.id )
      .then(theEvent => {

        let eventComeUp = {}
        theEvent.userid.includes(req.user._id) ? eventComeUp = {$pull: {userid: req.user._id}} : eventComeUp = {$push: {userid: req.user._id}}  
        return Event.findByIdAndUpdate(req.params.id, eventComeUp, {new: true})
      })
                        
    Promise.all([promise1,promise2])
      .then(x => {
        const message = {msg: "Tu id de evento se ha guardado en tu usuario y en el evento se ha guardado tu id usuario"}
        res.status(200).json(message)
      })
      .catch(err => console.error(err))
    
  })

  

module.exports = router