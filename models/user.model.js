const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
   username: {
       type: String,
       max: 20,
       required: true
   },
   nickname: {
       type: String,
       max: 20,
       required: true
   },
   password: {
       type: String,
       max: 100,
       required: true
   },
   createdTime: {
       type: Date,
       default: new Date()
   }
});

module.exports = mongoose.model("User",  UserSchema);