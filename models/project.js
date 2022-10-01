const mongoose = require('mongoose')

const projectSchema = new mongoose.Schema({
  id:Number,
  framework:{
    type:String,
    required:true
  },
  title:{
    type:String,
    required:true
  },
  description:{
    type:String,
    required:true,
    minLength:20
  },
  date:{
    type:Date,
    default:Date.now
  }
})

projectSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

module.exports = mongoose.model('Project',projectSchema)