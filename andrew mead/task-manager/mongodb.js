// crud operation

//const mongodb = require("mongodb");
// const MongoClient = mongodb.MongoClient;
// const ObjectId = mongodb.ObjectID
const { MongoClient, ObjectId } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';

const id = new ObjectId();
// console.log(id)
// console.log(id.getTimestamp())
// console.log(id.id.length)
// console.log(id.toHexString().length)
MongoClient.connect(connectionURL, { useNewUrlParser: true, useUnifiedTopology: true }, (error, client) => {
    if (error) {
        console.log('Unable to connect my database!')
    }

    // console.log('Databse is connected')

    const db = client.db(databaseName);

    //================================insertOne============================================

    // db.collection('users').insertOne({
    //     _id: id,
    //     name: 'Andrew',
    //     age: 27
    // }, (error, result) => {
    //     if (error) {
    //         return console.log('unable to insert user')
    //     }

    //     console.log(result.ops)
    //     console.log(result.insertedCount)
    //     console.log(result.insertedId)
    // })

    //================================///////////////////============================================

    //     db.collection('users').insertMany([{
    //             name: 'Gen',
    //             age: 23,
    //             description: "I am gen",
    //             completed: false
    //         },
    //         {
    //             name: 'John',
    //             age: 25,
    //             description: "I am john",
    //             completed: false
    //         },
    //         {
    //             name: 'Andrew',
    //             age: 25,
    //             description: "I am john",
    //             completed: false

    //         }

    //     ], (error, result) => {
    //         if (error) {
    //             return console.log('unable to insert user')
    //         }

    //         console.log(result.ops)
    //         console.log(result.insertedCount)
    //         console.log(result.insertedIds)
    //  

    //================================insertMany============================================
    // db.collection('tasks').insertMany([{
    //         description: "node js",
    //         completed: true
    //     },
    //     {
    //         description: "angular",
    //         completed: true
    //     },
    //     {
    //         description: "react",
    //         completed: true
    //     }
    // ], (error, result) => {
    //     if (error) {
    //         return console.log('unable to inser task')
    //     }

    //     console.log(result.ops)

    // })


    //================================Find One============================================
    // db.collection('users').findOne({ name: 'Gen' }, (error, user) => {
    //     if (error) {
    //         return console.log('unable to fetch')
    //     }

    //     console.log(user)
    // })

    //================================Find One============================================

    // db.collection('users').findOne({ _id: new ObjectId('5d830e2c0921ae2e08f2276a') }, (error, user) => {
    //     if (error) {
    //         return console.log('unable to fetch')
    //     }

    //     console.log(user)
    // })

    //================================Find ============================================

    // db.collection('users').find({ age: 27 }).toArray((error, users) => {
    //     //     console.log(users)
    // })

    // db.collection('users').find({ age: 27 }).count((error, users) => {
    //     //   console.log(users)
    // })

    // db.collection('tasks').findOne({ _id: new ObjectId('5d830fcc028f0c0d481f06ef') }, (error, users) => {
    //     if (error) {
    //         return console.log('unable to fetch')
    //     }
    //     console.log(users)
    // })

    // db.collection('tasks').find({ completed: true }).toArray((error, users) => {
    //     if (error) {
    //         return console.log('unable to fetch')
    //     }
    //     console.log(users)
    // })


    //================================UpdateOne============================================

    // db.collection('users').updateOne({
    //     _id: new ObjectId("5d831f91ff0f132d401ad11a")
    // }, {
    //     $set: {
    //         name: 'Mike'
    //     },
    //     $inc: {
    //         age: 1
    //     }
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })



    //================================UpdateMany============================================

    // db.collection('tasks').updateMany({
    //     completed: false
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // }).then((result) => {
    //     // console.log(result)
    //     console.log(result.modifiedCount)
    // }).catch((error) => {
    //     console.log(error)
    // })

    //================================deleteMany============================================


    // db.collection('users').deleteMany({
    //     age: 27
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })

    //================================deleteOne============================================

    db.collection('users').deleteOne({
        age: 28
    }).then((result) => {
        console.log(result)
        console.log(result.deletedCount)
    }).catch((error) => {
        console.log(error)

    })

})