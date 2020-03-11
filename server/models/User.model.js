const mongoose = require('mongoose')
const Schema   = mongoose.Schema

const userSchema = new Schema({
  username: String,
  password: String,
  imgurl: String,
  property:[{
    type: Schema.Types.ObjectId,
    ref: 'Event'
  }],
  imgBg: String,
  comeup:[{
    type: Schema.Types.ObjectId,
    ref: 'Event'
  }],
  bio: String
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

module.exports = mongoose.model('User', userSchema)
