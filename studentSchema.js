//import mongoose from 'mongoose';

const mongoose = require("mongoose")
const { Schema } = mongoose;

const student = new Schema({
    bookName: String,
    issuerName: String,
    dueDate: String
});

module.exports = mongoose.model("studentDetails",student,"SL-LAB")