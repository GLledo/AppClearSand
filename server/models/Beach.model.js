const mongoose = require('mongoose')
const Schema   = mongoose.Schema

const beachSchema = new Schema({
  beachname:String,
  event: [{
    type: Schema.Types.ObjectId,
    ref: 'Event'
  }],
  imgurl:String,
  description: String,
  //TO-DO
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

module.exports = mongoose.model('Event', beachSchema)
