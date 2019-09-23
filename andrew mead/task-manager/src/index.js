const express = require("express");
require('./db/mongoose')
const userRouter = require('./router/user')
const taskRouter = require('./router/task')
const bcrypt = require('bcryptjs');
const app = express();

const port = process.env.PORT || 3000;




app.use(express.json()) // it parse the data in body

app.use(userRouter)
app.use(taskRouter)

const myFunction = async() => {

    const password = 'jl789949478487478c877b8bb788787huh';
    const hashedPassword = await bcrypt.hash(password, 8)

    console.log(password);
    console.log(hashedPassword)

    const isMatch = await bcrypt.compare('jl789949478487478c877b8bb788787huh', hashedPassword)
    console.log(isMatch)

}

myFunction()


// app.post('/users', (req, res) => {
//   const user = new User(req.body)
//     user.save().then(() => {
//         res.status(201).send(user)
//     }).catch((err) => {
//         res.status(400).send(err)
//     })
// })


//// ============ async await=================



// app.post('/tasks', (req, res) => {
//     const task = new Task(req.body)
//     task.save().then(() => {
//         res.status(201).send(task)
//     }).catch((err) => {
//         res.status(400).send(err)
//     })
// })

//// ============ async await=================



// app.get('/users', (req, res) => {
//     User.find({}).then((users) => {
//         res.send(users)
//     }).catch((err) => {
//         res.status(500).send(err)
//     })
// })


//// ============ async await=================



// app.get('/tasks', (req, res) => {
//     Task.find({}).then((users) => {
//         res.send(users)
//     }).catch((err) => {
//         res.status(500).send(err)
//     })
// })


//// ============ async await=================



// app.get('/users/:id', (req, res) => {
//     const _id = req.params.id
//         //  console.log(req.params)

//     User.findById(_id).then((user) => {
//         if (!user) {
//             console.log("ccccccc")
//             return res.status(404).send()
//         }
//         res.send(user)
//     }).catch((err) => {
//         res.status(500).send("Request Id is not Found")
//     })
// })

//// ============ async await=================



// app.get('/tasks/:id', (req, res) => {
//     const _id = req.params.id
//         //  console.log(req.params)

//     Task.findById(_id).then((task) => {
//         if (!task) {
//             console.log("ccccccc")
//             return res.status(404).send()
//         }
//         res.send(task)
//     }).catch((err) => {
//         res.status(500).send("Request Id is not Found")
//     })
// })


//// ============ async await=================


//// ============ async await=================



//// ============ async await=================


app.listen(port, () => {
    console.log("srver is up " + port)
})