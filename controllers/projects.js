const router = require('express').Router()
const Project = require('../models/project')

router.get('/',(req,res) => {
  Project.find({}).then(data => {
    res.json(data)
  })
})


module.exports = router