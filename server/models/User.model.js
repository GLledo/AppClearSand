const mongoose = require('mongoose')
const Schema   = mongoose.Schema

const userSchema = new Schema({
  username: String,
  password: String,
  imgUrl: String,
  property:[{
    type: Schema.Types.ObjectId,
    ref: 'Event'
  }],
  comeup:[{
    type: Schema.Types.ObjectId,
    ref: 'Event'
  }]
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

module.exports = mongoose.model('User', userSchema)
