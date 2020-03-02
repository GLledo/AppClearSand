const mongoose = require('mongoose')
const Schema   = mongoose.Schema

const eventSchema = new Schema({
  userid: [{
    type: Schema.Types.ObjectId,
    ref: 'User'
  }],
  comment: [{
    type: Schema.Types.ObjectId,
    ref: 'Comment'
  }],
  imgurl:String,
  description: String,
  beach:{
    type: Schema.Types.ObjectId,
    ref: 'Beach'
  }
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

module.exports = mongoose.model('Event', eventSchema)
