import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    id:{
        type : String,
        required : true
    },
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
    profession:{
        type : String,
        required : true
    },
    promember:{
        type : Boolean,
        required : true,
        default : false
    }
})
const Users = mongoose.model('Users', userSchema)
export default Users
