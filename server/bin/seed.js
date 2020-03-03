require('dotenv').config()
const mongoose = require('mongoose');
const Beach = require('../models/Beach.model');

//importamos la indormacion del json
const beaches = require("./clearsand-4e9e0-PLAYAS-export-1.json")

console.log(beaches)

const connect = mongoose.connect(`${process.env.DB}`, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(x => console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`))
    .catch(err => console.log(`Error en la conexion de DB: ${err}`))
    .then(x => {
        Beach.collection.drop()
    })
    .then(() => Beach.insertMany(beaches))
    .then((beaches) => {
        console.log(`Inserted ${beaches.length} beaches`)
        return
    })
    .catch(err => console.log(`Error: ${err}`))
    .finally(() => mongoose.disconnect())