const express = require('express');
const router  = express.Router();

const User = require('../models/User.model')
const Event = require('../models/Event.model')
const Beach = require('../models/Beach.model')

router.post('/new', (req, res, next) => {

    Event.create({
      useridcreator: req.user._id,
      imgurl: req.body.event.imgurl,
      description: req.body.event.description,
      beach: req.body.id,
      title: req.body.event.title,
      dateevent: req.body.event.dateevent
    })
    .then(eventID =>{
          const promise1 = User.findByIdAndUpdate(req.user._id, {
          $push: {
            property: eventID._id
          }
          }, { new: true })

          const promise2 = Beach.findByIdAndUpdate(req.body.id, {
            $push: {
              event: eventID._id
            }
          }, { new: true })

          Promise.all([promise1,promise2])
          .then(x => {
            const message = {
              msg: "Tu id de evento se ha guardado en tu usuario y en la playa"
            }
  
          res.status(200).json(message)
  
          })
          .catch(err => console.error('Error al meter mas events ids al usuario o a la playa', err))
      })

    .catch(err => console.log(err))
  })

  router.get('/getOneEvent/:id', (req, res, next) => {
    Event.findById(req.params.id)
      .then(theEvent => res.json(theEvent))
      .catch(err => console.log(err))
  })

module.exports = router