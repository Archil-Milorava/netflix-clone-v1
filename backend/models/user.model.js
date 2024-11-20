import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        default: ""
    },
    searchHistory:{
        type: Array,
        default: []
    }
})

const User = new mongoose.model('user', userSchema)

export default User