import mongoose from 'mongoose' //for connecting to mongodb


const connectdb = async()=>{
    try{
        const conn = await mongoose.connect(process.env.DB_URL, {
            useNewUrlParser : true,
            useUnifiedTopology : true,
        })
        console.log(`DB connection on ${conn.connection.host}`)
    }
    catch(err){
        console.log("Could not connect to db" + err)
        process.exit(1)
    }
}

export default connectdb