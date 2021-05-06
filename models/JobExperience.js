const mongoose = require('mongoose');
const { Schema } = mongoose;

// Creating a new Schema for Person
const ExpSchema = new Schema({
  // Here, we set the names of properties
  title: {
    // The type
    type: String,
    // And if is required or not
    required: true
  },
  company:{
    type: String,
    required: true
  },
  address: {
    type: String, 
    required: true
  },
  date:{
    from: {
      type: String
    },
    to: {
      type: String
    }
  },
  responsibilities:[
    {
      type: String
    }
  ]
});

// Here, we export the model of persons
module.exports = mongoose.model('jobExperiences', ExpSchema);
