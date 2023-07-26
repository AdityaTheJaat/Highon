const mongoose = require("mongoose")

const postSchema = mongoose.Schema({
    description: {type: String, required: true},
    creator: {type: mongoose.Schema.Types.ObjectId, required: true},
    creatorName: {type: String},
    tags: {type: [String], required: true},
    likes: {
      total: { type: Number },   
      users: { type: [mongoose.Schema.Types.ObjectId], default: [] },
      usersName : { type: [String], default: [] },
    },
    location: {type:String},
    imagePost: {type:String},
    createdAt: {type: Date, default: new Date()},
})

module.exports = mongoose.model("Post", postSchema)
