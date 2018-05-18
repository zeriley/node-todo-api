const {ObjectID} = require('mongodb')

const mongoose = require('../server/db/mongoose')
const Todo = require('../server/models/todo')
const User = require('../server/models/user')

let id = '5afc887d555b5d3b9cc3a708'
let userId = '5afb48cde867ed152cf2159a'

if (!ObjectID.isValid(id)) {
  return console.log(`ID not valid ${id}`)
}

Todo
  .find({_id: id})
  .then(todos => console.log('Todos', todos))

Todo
  .findOne({_id: id})
  .then(todo => console.log('Todo', todo))

Todo
  .findById(id)
  .then(todo => console.log('Todo by Id', todo))

User
  .findById(userId)
  .then(user => {
    if (!user) {
      return console.log(`User not found for id: ${userId}`)
    }
    console.log('User', user)
  }).catch(e => console.log(e))