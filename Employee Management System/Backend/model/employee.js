const mongoose = require('mongoose');
var mongoDB = 'mongodb://127.0.0.1/employee';
mongoose.connect(mongoDB);


const employeeSchema=mongoose.Schema({
    profileUrl:String,
    name:String,
    email:String,
    bio:String,
    highlight:Boolean,
})

module.exports=mongoose.model("employee",employeeSchema)