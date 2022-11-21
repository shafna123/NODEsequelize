const express = require('express');
const path = require('path');
const app = express();
const parser = require('body-parser');
// app.get("/", (req,res)=>{
// res.send("Hi from express app!");
// });




// app.get("/about", (req,res)=>{
//     res.send("<h1>About us page</h1>");
// });



// app.get("/", (req,res)=>{ 
//     res.json({
//         status: 'success'
//     })
//     });

// app.use("/",(req,res,next)=>{
//     console.log("Request received");
//     next();
// });



// app.use("/",(req,res,next)=>{
//     console.log("Request received in second middleware");
//     next();
// });

// app.get("/about", (req,res)=>{
//     res.send("<h1>About us page</h1>");
// });

app.use(parser.urlencoded({extended: false}));
app.use ('/static',express.static(path.join(__dirname, 'static')));

app.get("/employee/create",(req,res)=>{
    var loc = path.join(__dirname, 'views', 'index.html');
    res.sendFile(loc);
 });


app.post("/employee/create", (req,res)=>{
    console.log(req.body.name,req.body.email);
    res.json(req.body);
});


app.listen(80);
