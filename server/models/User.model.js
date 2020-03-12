const mongoose = require('mongoose')
const Schema   = mongoose.Schema

const userSchema = new Schema({
  username: String,
  password: String,
  imgurl: {
    type: String,
    default: 'https://cdn2.iconfinder.com/data/icons/4web-3/139/header-account-image-line-512.png'
  },
  property:[{
    type: Schema.Types.ObjectId,
    ref: 'Event'
  }],
  imgBg: String,
  comeup:[{
    type: Schema.Types.ObjectId,
    ref: 'Event'
  }],
  bio: {
    type: String,
    default: '.....'
  },
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

module.exports = mongoose.model('User', userSchema)
