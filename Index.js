//write basic express boiler plate code.
// with express.json() middleware


const express = require("express");
const app = express();

app.use(express.json());

//body {
    //title: string;
    //description : string;
//} to vaild this need to create the Zod for this.

app.post("/todo", function(req, res) {
    
})

app.get("/todo", function(req, res) {
})

app.put("/completed", function(req, res) {

})
