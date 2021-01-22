import express from 'express' //for creating server and routes
import mongoose from 'mongoose' //for connecting to mongodb
import dotenv from 'dotenv'  //for environment variables
import userRoutes from './routes/users.js'

//setting up the server
dotenv.config()
const server = express()
const PORT = process.env.port || 5000

//connecting to the database
try {
    mongoose.connect(process.env.DB_URL, {useNewUrlParser: true, useUnifiedTopology: true}, () =>
    console.log("connected"));    
}catch (error) { 
    console.log("could not connect" + error);    
}

server.use('/users', userRoutes)

//Running the server on the port
server.listen(PORT, ()=>{
    console.log(`Server running on http://localhost:${PORT}`)
})
