const express = require('express');
const app = express() //to create server's instance

// req - it is use to pull any data from frontend to backend
// res - to provide response for the req came from backend to frontend, we use res 

// GET => To get/fetch data from server 
// POST => To post/send data to server
// PATCH => when the data is already present on server, we want to update it 
// DELETE => when we want to delete data from server

app.get("/",(req, res)=>{
    res.send("Hello World")
})

app.get("/about",(req, res)=>{
    res.send("About Page")
})

app.get("/contact",(req, res)=>{
    res.send("Contact Page")
})

app.listen(3000) // to start server