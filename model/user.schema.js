const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    address: {
        type: String
    },
    age: {
        type: String,
        required: true
    },
    bloodGroup: {
        type: String
    },
    city: {
        type: String
    },
    country: {
        type: String
    },
    emergencyNumber: {
        type: String
    },
    email: {
        type: String
    },
    guardian: {
        type: String
    },
    guardianName: {
        type: String
    },
    guardianEmail : {
        type : String
    },
    govIdType :{
        type : String
    },
    govIdNumber: {
        type: String
    },
    maritialStatus: {
        type: String
    },
    name: {
        type: String,
        required: true
    },
    nationality: {
        type: String
    },
    occupation: {
        type: String
    },
    pincode: {
        type: String
    },
    religion: {
        type: String
    },
    sex: {
        type: String,
        required: true
    },
    state: {
        type: String
    },
    number:{
        type:String
    }

})

const user = mongoose.model('testUser', schema)
module.exports =  user