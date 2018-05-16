const express = require('express')
const bodyParser = require('body-parser')

const mongoose = require('./db/mongoose')
const Todo = require('./models/todo')
const User = require('./models/user')

const app = express()
const port = 4000

app.use(bodyParser.json())

app.post('/todos', (req, res) => {
  let todo = new Todo({
    text: req.body.text
  })

  todo.save()
    .then(doc => res.send(doc))
    .catch(e => res.send(e).status(500))
})

app.listen(port, () => {
  console.log(`Started on port ${port}`)
})