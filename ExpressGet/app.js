const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

app.get('/user',(req,res)=>{
    res.sendFile(__dirname + '/index.html');
})

app.post('/users', (req,res)=>{
    console.clear();
    console.log('ready');
    res.send('done');
})

app.listen(port, ()=>{
     console.log(`Ready listening on ${port}`);
})