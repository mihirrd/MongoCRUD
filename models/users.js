import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    firstName:{
        type : String,
        required : true
    },
    lastName:{
        type : String,
        required : true
    },
    age:{
        type : Number,
        required : true
    },
    promember:{
        type : Boolean,
        required : true,
        default : false
    }
})
const User = mongoose.model('Users', userSchema)
export default User
