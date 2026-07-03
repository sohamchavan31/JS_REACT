const mongoose = require('mongoose');

async function connectDB() {
    await mongoose.connect("mongodb+srv://back-tut:6Phpw7buMuWBKUAN@backend-tutorial.sv3zu8o.mongodb.net/halley")

    console.log("connected to DB");
    
}

module.exports = connectDB 