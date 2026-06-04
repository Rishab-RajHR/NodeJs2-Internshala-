const express = require('express');
const app = express();
const router = express.Router();
const bodyparser = require('body-parser');
const myObj = require('./users');
const port = process.env.PORT || 8080;
const users = require('./user');


app.use('/users',users);

// app.route('/users')
// .get((req,res) => res.send('Test GET'))
// .post((req,res) => res.send('Test 2'))
// .put((req,res) => res.send('Test 3'))

// const myObj = require('./users')


// const logOutput = (req,res,next) =>{
//       console.log('Middleware in action');
//       console.log(req.params);
//       next();
// }

app.use(logOutput);

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

app.post('/users', (req,res) =>{
     console.log(req.body);
      res.sendFile(__dirname + '/index.html');
})

app.get('/users', (req, res) => {
    res.sendFile(__dirname + '/index.html');
})

app.listen(port, ()=>{
     console.log(`Ready listening on ${port}`);
})