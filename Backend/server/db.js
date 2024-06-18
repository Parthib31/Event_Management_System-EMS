const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();
const connect = mongoose.connect(process.env.mongoURL);

module.exports = {connect};