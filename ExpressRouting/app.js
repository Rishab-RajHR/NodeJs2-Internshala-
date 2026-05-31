const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

app.get('/',(req,res)=>{
    res.send('<h1>Test</h1>');
})

app.get('/info',(req,res)=>{
    res.send('<h1>Info</h1>');
})

// Pattern Matching
app.get('/ab?cd',(req,res)=>{
    res.send('<h1>ABC</h1>');
})

app.get('/ab+cd',(req,res)=>{
    res.send('<h1>ABCDE</h1>')
})

// Reg exp
app.get('/z/',(req,res)=>{
   res.send('<h1>ZZZZZZZZ</h1>')
})

// Route Parameters
app.get('/users/:id/:val'),(req,res)=>{
    res.send(req.params)
    console.log(req.params.id)
}

app.listen(port,()=>{
    console.log(`Ready listening on ${port}`);
})