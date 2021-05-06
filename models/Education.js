const mongoose = require('mongoose');
const { Schema } = mongoose;

// Creating a new Schema for Person
const EducationSchema = new Schema({
  // Here, we set the names of properties
  degree: {
    // The type
    type: String,
    // And if is required or not
    required: true
  },
  college:{
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
  courses:[
    {
      type: String
    }
  ]
});

// Here, we export the model of persons
module.exports = mongoose.model('Educations', EducationSchema);
