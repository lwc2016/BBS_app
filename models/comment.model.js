const mongoose = require("mongoose");

const CommentSchema = mongoose.Schema({
   post_id: {
       type: mongoose.Schema.Types.ObjectId,
       required: true
   },
   user: {
       type: mongoose.Schema.Types.ObjectId,
       ref: "User",
       required: true
   },
   content: {
       type: String,
       required: true
   },
   createdTime: {
       type: Date,
       default: new Date()
   }
});

module.exports = mongoose.model("Comment", CommentSchema);