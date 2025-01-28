const mongoose = require('mongoose');

const InterviewSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  lovedOne: { type: String, required: true },
  favoriteThings: { type: String, required: true },
});

module.exports = mongoose.model('Interview', InterviewSchema);
