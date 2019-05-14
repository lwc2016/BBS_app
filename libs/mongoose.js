const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/bbs", {
    useNewUrlParser: true
});

const db = mongoose.connection;

db.on("error", (err)=>{
    console.log("mongodb err: ");
    console.log(err);
});

db.on("open", ()=>{
    console.log("mongodb connected!");
});


module.exports = mongoose;