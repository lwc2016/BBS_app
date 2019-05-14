const mongoose = require("mongoose");

const PostSchema = mongoose.Schema({
    title: {
        type: String,
        max: 30,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    createdTime: {
        type: Date,
        default: new Date()
    }
});


module.exports = mongoose.model("Post", PostSchema);