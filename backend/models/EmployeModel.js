const mongoose = require("mongoose");

const EmployeModel = mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    }
});

const employee = mongoose.model("employe",EmployeModel);

module.exports = employee;