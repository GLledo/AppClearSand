const express = require('express');
const router  = express.Router();

const User = require('../models/User.model')
const Event = require('../models/Event.model')
const Beach = require('../models/Beach.model')
const Comment = require('../models/Comment.model')

let moment = require('moment')
let date = Date.now();

router.post('/new', (req, res, next) => {

    const {imgurl, description, title, dateevent} = req.body.event
    const {beach} = req.body.id

    const user = {
      useridcreator: req.user._id,
      imgurl,
      description,
      beach,
      title,
      dateevent: new Date (moment(new Date(dateevent)).format('YYYY-MM-DD'))
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
    .catch(err => next(err))

  })

  router.get('/getOneEvent/:id', (req, res, next) => {

    Event.findById(req.params.id)
      .populate('useridcreator')
      .populate({ path: "userid", select: "username" })
      .populate({
        path : 'comment',
        populate : {
          path : 'userid'
        }
      })
      .then(theEvent => res.json(theEvent))
      .catch(err => next(err))

  })

  router.post('/addUser/:id', (req, res, next) => {

    let userComeUp = {}
    req.user.comeup.includes(req.params.id) ? userComeUp = {$pull: {comeup: req.params.id}} : userComeUp = {$push: {comeup: req.params.id}}
    
    const promise1 = User.findByIdAndUpdate(req.user._id, userComeUp, {new: true})
    .populate('property')
    .populate({
      path : 'comeup',
      populate : {
        path : 'useridcreator'
      }
    })

    const promise2 =  Event.findById(req.params.id )
      .then(theEvent => {

        let eventComeUp = {}
        theEvent.userid.includes(req.user._id) ? eventComeUp = {$pull: {userid: req.user._id}} : eventComeUp = {$push: {userid: req.user._id}}  
        return Event.findByIdAndUpdate(req.params.id, eventComeUp, {new: true})
      
      })
                        
    Promise.all([promise1,promise2])
      .then(x => res.json(x[0]))
      .catch(err => next(err))
    
  })

  router.get('/getFiveEvents', (req, res, next) => {

    Event.find({dateevent : { $gte: moment(new Date(date)).format('YYYY-MM-DD')}}).sort({dateevent: 1})
      .populate({ path: "userid", select: "username" })
      .populate('useridcreator')
      .then(allEvent => {
        const arrEvent = []
        for(let i = 0; i < 5; i++){arrEvent.push(allEvent[i])}
        res.json(arrEvent)})
      .catch(err => next(err))

  })

module.exports = router