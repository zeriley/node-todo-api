const { MongoClient, ObjectID } = require('mongodb')

MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, client) => {
    if (error) {
        return console.log('Unable to connect to MongoDB server', error)
    }
    console.log('Connected to MongoDB server')
    const db = client.db('TodoApp')

    // db.collection('Todos').find({_id: ObjectID('5aeccd6e42b3f5132c2f3a1e')}).toArray().then(docs => {
    //     console.log('Todos', JSON.stringify(docs, undefined, 2))
    // }).catch(err => {
    //     console.log('Unable to fetch todos', err)
    // })

    // db.collection('Todos').find().count().then(count => {
    //     console.log('Todos count:', count)
    // }).catch(err => {
    //     console.log('Unable to fetch todos', err)
    // })

    db.collection('Users').find({name: 'Zane Riley'}).toArray().then(docs => {
        console.log('Users', docs)
    })

    client.close()
})