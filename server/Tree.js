const mongoose = require('mongoose')

const TreeSchema = new mongoose.Schema({
    popularName:String,
    scientificName:String,
    height:String,
    picture:String,
    family:String,
    origin:String
})


mongoose.model("tree",TreeSchema)