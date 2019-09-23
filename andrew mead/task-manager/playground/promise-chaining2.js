require('../src/db/mongoose')
const Task = require('../src/models/task')

// Task.findByIdAndDelete('5d8383f7ab664435c04b8376').then((task) => {
//     console.log(task)
//     return Task.countDocuments({ completed: false })
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })



const deleteTask = async(id) => {
    const task = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({ completed: false })
    return count
}


deleteTask('5d83838d4384882ab4e0e2c7').then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})