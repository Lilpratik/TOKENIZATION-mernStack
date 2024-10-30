const mongoose = require('mongoose');

const db = mongoose
    .connect("mongodb+srv://pratikmohite343:vNDYdyEihO4eqq5g@cluster0.jka04.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
    .then(() => console.log("MongoDB Connected..."))
    .catch((err) => console.log("Could not connect to MongoDB", err));

module.exports = db;