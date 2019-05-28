const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/bbs", {
    useNewUrlParser: true
});

// 注册schema
require("../models/post.model.js");
require("../models/user.model.js");
require("../models/comment.model.js");

const db = mongoose.connection;
db.on("error", (err)=>{
    console.log("mongodb err: ");
    console.log(err);
});
db.on("open", ()=>{
    console.log("mongodb connected!");
});

module.exports = db;
