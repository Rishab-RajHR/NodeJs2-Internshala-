const express = require('express');
const app = express();
const bodyparser = require('body-parser');
const port = process.env.PORT || 8080;


app.use(bodyparser.urlencoded({
  extended:true
}))

app.get('/user',(req,res)=>{
    res.sendFile(__dirname + '/index.html');
})

app.post('/users', (req,res)=>{
    console.clear();
    console.log(req.body);
    res.send(`DONE:User ${req.body.user} ID ${req.body.id}`);
})

const myObj = {
  users: [
    {
      id: 1,
      name: "Alx"
    },
    {
      id: 2,
      name: "John"
    },
    {
      id: 3,
      name: "Tovino"
    }
  ]
};


console.log(myObj);
console.log(myObj.users.some((ele)=>ele.id == 1));
app.get('/users/:id',(req,res)=>{
  console.log(req.params)
   let myJson = [];
   if(myObj.users.some((ele)=>ele.id == req.params.id)){
       myJson =  myObj.users.filter((ele)=>ele.id == 1)
   }
     res.json(myObj);
})

app.get('/users', (req, res) => {
    res.sendFile(__dirname + '/index.html');
})

app.listen(port, ()=>{
     console.log(`Ready listening on ${port}`);
})