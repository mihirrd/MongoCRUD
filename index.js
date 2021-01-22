import express from 'express' //for creating server and routes
import dotenv from 'dotenv'  //for environment variables
import connectdb from './db.js'
import userRoutes from './routes/users.js'


//setting up the server
dotenv.config({path : './config/config.env'})
const server = express()
const PORT = process.env.port || 5000

//connecting to the database
connectdb()

server.use('/users', userRoutes)

//Running the server on the port
server.listen(PORT, ()=>{
    console.log(`Server running on http://localhost:${PORT}`)
})
