const express = require("express");
const router = express.Router()
const Task = require('../models/task')


//// ============Add async await=================

router.post('/tasks', async(req, res) => {
    const task = new Task(req.body)
    try {
        await task.save()
        res.status(201).send(task)
    } catch (e) {
        res.status(400).send(err)
    }
})

//// ============Get async await=================

router.get('/tasks', async(req, res) => {
    try {
        const tasks = await Task.find({})
        res.send(tasks)
    } catch (e) {
        res.status(500).send(e)
    }
})


//// ============Single Task id=================


router.get('/tasks/:id', async(req, res) => {
    const _id = req.params.id
    console.log(_id)
    try {
        const task = await Task.findById(_id)
        if (!task) {
            return res.status(404).send("Task is not found")
        }
        res.send(task)
    } catch (e) {
        res.status(500).send("Request Id is not Found")
    }
})



//// ============Upodate async await=================
router.patch('/tasks/:id', async(req, res) => {
    const updates = Object.keys(req.body)
    const allowedUpdates = ['description', 'completed']
    const isValidOperation = updates.every((update) => {
        return allowedUpdates.includes(update)
    })

    if (!isValidOperation) {
        return res.status(400).send({ error: 'Invalid Updates' })
    }
    //console.log(req.params.id)
    try {

        const task = await Task.findById(req.params.id)

        updates.forEach((update) => {
            task[update] = req.body[update]
        })
        await task.save()


        if (!task) {
            return res.status(404).send()
        }
        return res.send(task)
    } catch (e) {
        res.status(400).send(e)
    }
})





router.delete('/tasks/:id', async(req, res) => {
    try {
        const task = await Task.findByIdAndDelete(req.params.id)

        if (!task) {
            return res.status(404).send("Id is not found")
        }

        res.send(task)
    } catch (e) {
        res.status(400).send(e)
    }
})






module.exports = router