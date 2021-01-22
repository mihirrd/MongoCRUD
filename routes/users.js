import express, { Router } from 'express'
import Users from '../models/users.js'

const router = Router()

//getting all
router.get('/', async (req,res)=>{
    try {
        const users = await Users.find()
        res.json(users)
    } catch (error) {
        res.status(500).json({message : error.message})
    }
})

//getting one
router.get('/:id',(req,res)=>{
    res.send(req.params.id)
})
//creating one
router.post('/',(req,res)=>{})
//updating one 
router.patch('/:id',(req,res)=>{})
//deleting one
router.delete('/:id', (req,res)=>{})


export default router


