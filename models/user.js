import {model, models, Schema} from "mongoose";

const userSchema = new Schema({
    'username': {
        type: String,
        unique: [true, 'An account with this username already exists.'],
        required: [true, 'An username is required to proceed.']
    }, 
    'email': {
        type: String,
        unique: [true, 'An account with this email already exists.'],
        required: [true, 'An email is required to proceed.']
    },
    'image': {
        type: String,
    } 
})

const User = models.User || model('User', userSchema);

export default User;