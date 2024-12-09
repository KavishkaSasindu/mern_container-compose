const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

const employeeRouter = require("./router/EmployeRoute")

dotenv.config();

const PORT = process.env.PORT || 5000

// mongodb connection
mongoose.connect(
  `${process.env.MONGO_URI}`
).then(()=>{
    console.log("DB is connected");
    app.listen(PORT,()=>{
        console.log(`server is running on port ${PORT}`)
    })
}).catch(error=>{
    console.log(error.message);
});


app.use(employeeRouter)