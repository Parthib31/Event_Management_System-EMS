const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    username : {type : String, required : true},
    email : {type : String, required : true},
    password : {type : String, required : true},
    
},{
    versionkey: false,
})

const noteModel = mongoose.model("user", userSchema);

module.exports = {noteModel};