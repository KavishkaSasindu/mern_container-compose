const EmployeModel = require("../models/EmployeModel");


const getData = async(request,response)=>{
    try {
        const employeData = await EmployeModel.find({});
        if(!employeData){
            return response.status(404).json({
                message:"error fetching",
            })
        }else{
            return response.status(200).json({
                message:"data is fetching",
                data:employeData
            })
        }
    } catch (error) {
        console.log(error.message);
    }
}

const addEmployee = async(request,response)=>{
    try {
        const employeData = await request.body;
        console.log(employeData);
        if(!employeData){
            return response.status(501).json({
                message:"data not request"
            })
        }else{
            const addData = await EmployeModel.create(employeData);
            if(!addData){
                return response.status(500).json({
                    message:"data is not added to database"
                })
            }
        }
    } catch (error) {
        return response.status(500).json({
            message:"error occure",
            error:error.message
        })
    }
}

module.exports = {getData,addEmployee}