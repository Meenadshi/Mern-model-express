const mongoose = require('mongoose')

const employeeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    service:{
        type: Number,
        required: true
    },
    joiningDate:{
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('employeeModel',employeeSchema);