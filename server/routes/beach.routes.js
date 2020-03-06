const express = require('express');
const router  = express.Router();
const Beach = require('../models/Beach.model')
const Event = require('../models/Event.model')

router.get('/getFiveBeaches', (req, res, next) => {
  
  Beach.find()
  .then(allBeaches => {
        const arrBeach = []
        for(let i = 0; i < 5; i++){  arrBeach.push(allBeaches[Math.floor(Math.random()*allBeaches.length)])}
        res.json(arrBeach)
    })
  .catch(err => console.log(err))

});

router.get('/getOneBeach/:id', (req, res, next) => {

  Beach.findById(req.params.id)
    .populate("event")
    .then(theBeach => res.json(theBeach))
    .catch(err => console.log(err))

})

router.get('/getAllComunidad/:comunidad' , (req, res, next) => {

  console.log(req.params.comunidad)

  Beach.find({
    "Comunidad_Autonoma": {
        $regex: `.*${req.params.comunidad}.*`,
        $options: 'i'
    }
  })
  .then(allBeaches => {
    console.log(allBeaches)
    res.json(allBeaches)
  })
  .catch(err => console.log(err))

})

module.exports = router