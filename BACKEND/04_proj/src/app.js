const express = require('express')
const multer = require('multer')

const app = express()
app.get(express.json())

const upload = multer({storage:multer.memoryStorage()})

app.post('/creat-post', async(req, res)=>{
    console.log(req.body);
})

module.exports = app;