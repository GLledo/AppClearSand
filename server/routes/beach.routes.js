const express = require('express');
const router  = express.Router();
const Beach = require('../models/Beach.model')
const Event = require('../models/Event.model')
let moment = require('moment')

router.get('/getFiveBeaches', (req, res, next) => {
  
  Beach.find()
  .then(allBeaches => {
        const arrBeach = []
        for(let i = 0; i < 5; i++){arrBeach.push(allBeaches[Math.floor(Math.random()*allBeaches.length)])}
        res.json(arrBeach)
    })
  .catch(err => console.log(err))

});

router.get('/getOneBeach/:id', (req, res, next) => {

  Beach.findById(req.params.id)
    .populate({
      path : 'event',
      populate : {
        path : 'useridcreator'
      }
    })
    .then(theBeach =>res.json(theBeach))
    .catch(err => console.log(err))

})

router.get('/getAllComunidad/:comunidad' , (req, res, next) => {

 console.log("aqui entra bien")
  Beach.find({
    "Comunidad_Autonoma": {
        $regex: `.*${req.params.comunidad}.*`,
        $options: 'i'
    }
  })
  .then(allBeaches => res.json(allBeaches))
  .catch(err => console.log(err))

})

module.exports = router