import { Router } from 'express'
import User from '../models/users.js'

//middleware to get users by their id
const getuser = async (req, res, next) =>{
    let user 
    try {
        user = await User.findById(req.params.id)
        if(user == null){
            return res.status(404).send("user not found")
        }
        
    } catch (error) {
        res.send("Error" + error)
    }

    res.user = user
    next()
}


const router = Router()

//getting all

router.get('/', async (req,res)=>{
    try {
        const users = await User.find()
        res.json(users)
    } catch (error) {
        res.status(500).json({message : error.message})
    }
})

//getting one
router.get('/:id', getuser, async (req,res)=>{
    res.send(res.user)
})
//creating one
router.post('/', async (req,res)=>{
    const user = new User({
        firstName : req.body.firstName,
        lastName : req.body.lastName,
        age : req.body.age,
        promember : req.body.promember
    })
    try {
        const newUser = await user.save()
        //res.status(200).json(newUser)
        res.send("User saved")

    } catch (error) {
        res.status(400).json(error)
    }
})
//updating one 
router.patch('/:id',getuser, async (req,res)=>{
    const {firstName, lastName, age, promember} = req.body
    if(firstName) res.user.firstName = firstName
    if(lastName) res.user.lastName = lastName
    if(age) res.user.age = age
    if(promember != res.user.promember) res.user.promember = promember
    try {
        await res.user.save()
        res.send("Changes saved successfully\n" + res.user)
    } catch (error) {
        res.send("Error"+error)
    }
})


//deleting one
router.delete('/:id',getuser, async (req,res)=>{
    try {
        await res.user.remove()
        res.send("user removed")
    } catch (error) {
        res.send("error"+error)
    }
})




export default router


