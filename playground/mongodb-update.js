const { MongoClient, ObjectID } = require('mongodb')

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server')
  }
  console.log('Connected to MongoDB server')
  const db = client.db('TodoApp')

  db.collection('Users').findOneAndUpdate({name: 'Kyle Fritz'}, 
    {
      $set: {name: 'Zane'},
      $inc: {age: 1}
    },
    {returnOriginal: false})
    .then(doc => console.log(JSON.stringify(doc, undefined, 2)))

  client.close()
})