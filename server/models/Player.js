const mongoose = require('mongoose');

const Player = mongoose.model('Players', new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  description: {
    type: String
  },
  debut_date: {
    type: Date
  },
  best_score: {
    type: Number,
    required: true
  },
  hundred: {
    type: Number
  },
  fifty:{
    type:Number
  }
}));

exports.Player=Player;