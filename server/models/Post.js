const mongoose = require("mongoose")

const postSchema = mongoose.Schema({
    title: {type: String, required: true},
    message: {type: String, required: true},
    creator: {type: mongoose.Schema.Types.ObjectId, required: true},
    tags: {type: [String], required: true},
    likes: {
      total: { type: Number },   
      users: { type: [mongoose.Schema.Types.ObjectId], default: [] },
      usersName : { type: [String], default: [] },
    },
    createdAt: {type: Date, default: new Date()},
})

module.exports = mongoose.model("Post", postSchema)
