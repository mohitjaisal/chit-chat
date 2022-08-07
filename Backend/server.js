const express = require("express");


const app = express();

app.get('/', (req,res)=>{
    res.send("Welcome MJ");
})
app.listen(1919, console.log("Enjoy the server at PORT: 1919 :D Mohit Jaisal!!"));
