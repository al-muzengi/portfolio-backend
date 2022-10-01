const {url} = require('./utils/config')
const express = require('express')
const app = express()
const cors = require('cors')
const router = require('./controllers/projects')
const mongoose = require('mongoose')


app.use(express.json())

mongoose.connect(url).then( () => {
  console.log(`Connected to the database`)
}).catch(error => next(error))

app.use(cors())
app.use('/api/projects',router)


module.exports = app