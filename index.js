import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'


dotenv.config()
const server = express()
const PORT = process.env.port || 5000
try {
    mongoose.connect(process.env.DB_URL, {useNewUrlParser: true, useUnifiedTopology: true}, () =>
    console.log("connected"));    
}catch (error) { 
    console.log("could not connect");    
}



server.listen(PORT, ()=>{
    console.log(`Server running on http://localhost:${PORT}`)
})
