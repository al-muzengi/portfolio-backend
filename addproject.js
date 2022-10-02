const mongoose = require('mongoose')
const url = process.env.MONGODB_URI

mongoose.connect(url).then( () => {
  console.log(`Connected to the database`)
}).catch(error => next(error))

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

const Project = mongoose.model('Project',projectSchema)
const project = new Project({
    id:7,
    framework:"Node",
    title:"Portfolio Application",
    description:"Backend configuration. Data validation and access through a REST API. Data required for the Projects and About routes stored in MONGODB Atlas for the fullstack version. "
  
})
project.save().then(result => {
  console.log(`Project Info saved.`)
  mongoose.connection.close()
}).catch(error => next(error))
