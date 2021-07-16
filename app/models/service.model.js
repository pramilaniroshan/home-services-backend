const mongoose = require('mongoose');

const ServiceSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  user_id: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  published_date: {
    type: Date,
    default: Date.now
  },
  updated_date: {
    type: Date,
    default: Date.now
  },
  image:{
   type: String
  }
  
});

module.exports = Service = mongoose.model('Service', ServiceSchema);