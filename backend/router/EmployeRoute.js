const express = require("express");
const router = express.Router();
const EmployeController = require("../controllers/EmployeeController")

router.get("/api",EmployeController.getData);
router.post("/api/add",EmployeController.addEmployee);


module.exports = router