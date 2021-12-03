const express = require("express")
const app = express()
const mongoose = require("mongoose")
const url = "mongodb+srv://week12:week12@cluster0.i9rtd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
const mySchema = require('./studentSchema');

mongoose.connect(url).then(()=> console.log("Connected to DB"))
app.use(express.json())
app.post("/add-new-post",async(req,res)=> {
    const bookName = req.body.bookName;
    const issuerName = req.body.issuerName;
    const dueDate = req.body.dueDate; 

    try{
        const newStudent = new mySchema(
            {
                bookName:bookName,
                issuerName:issuerName,
                dueDate:dueDate
            }
        )
        const savedStudent = await newStudent.save()
        res.json(
            {"message" : "Details are saved", "data": savedStudent}
        )

    }catch(err){
        res.json(err);
    }

})
app.use("/",(req,res)=> {
    res.json(
        {"message" : "Server running"}
    )
})

app.listen(3001, ()=>console.log("Express Server Started"))