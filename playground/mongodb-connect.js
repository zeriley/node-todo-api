const { MongoClient, ObjectID } = require('mongodb')

const obj = new ObjectID()
console.log(obj)

MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, client) => {
    if (error) {
        return console.log('Unable to connect to MongoDB server', error)
    }
    console.log('Connected to MongoDB server')
    const db = client.db('TodoApp')

    // db.collection('Todos').insertOne({
    //     text: 'Something to do',
    //     completed: false
    // }, (err, result) => {
    //     if (err) {
    //         return console.log('Unable to insert todo', err)
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 2))
    // })

    // db.collection('Users').insertOne({
    //     name: 'Zane Riley',
    //     age: 32,
    //     location: 'Denver, CO'
    // }, (err, result) => {
    //     if (err) {
    //         return console.log('Unable to insert user', err)
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 2))
    // })

    client.close()
})