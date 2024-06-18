const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    title : {type : String, required : true},
    description : {type : String, required : true},
    date : {type : Date, required : true},
    location : {type : String, required : true}
},{
    versionkey: false,
})

const noteModel = mongoose.model("user", userSchema);

module.exports = {noteModel};