const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");
const {connect} = require("./db");

const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.json({extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/event", eventRouter);
app.use("/user", userRouter);
app.get("/api", (req, res)=>{
    res.json({message:"hello from server!"});
})

const port = process.env.PORT;

app.listen(port, async()=>{

    try{
        await connect;
        console.log("Database Successfully connected");
    }catch(err){
        console.error(err);
    }

    console.log("App is listening on the port ",port);
})