 
const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const commentSchema = new Schema({
  event: {
    type: Schema.Types.ObjectId,
    ref: 'Event'
  },
  userid: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  text: String,
  likes: Number,
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

module.exports = mongoose.model('Comment', commentSchema)