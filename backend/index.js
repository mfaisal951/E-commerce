const port = 4000;
const express = require("express");
const app = express();

const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const path = require("path");
const cors = require("cors");

app.use(express.json());
app.use(cors());


// Data Base Connection with mongoose 

mongoose.connect("mongodb+srv://muhammadfaisal:F@is@l1122@cluster0.ial5pwf.mongodb.net/", )

// Api Creation

app.listen(port, ()=>{
    if(!error){
        console.log("server is running on port" +port)
    }
    else{
        console.log("error in server :" +error)
    }
})