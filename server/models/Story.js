const mongoose = require("mongoose")

const storySchema = mongoose.Schema({
    title: {type: String, required: true},
    message: {type: String, required: true},
    creator: {type: mongoose.Schema.Types.ObjectId, required: true},
    tags: {type: [String], required: true},
    selectedFile: {type: String, required: true},
    likes: {type: [String], required: true},
    createdAt: {type: Date, default: new Date()},
})

module.exports = mongoose.model("Story", storySchema)
