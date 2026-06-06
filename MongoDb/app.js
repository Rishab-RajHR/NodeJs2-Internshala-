const express = require('express');
const bodyParser = require('body-parser');
const { MongoClient } = require('mongodb');
const router = express.Router();
const app = express();
const url = require('./secret.js');

const client = new MongoClient(url);


async function connectDB() {
  try {
    await client.connect();
    console.log('Connected to MongoDB');
    await client.close();
  } catch (err) {
    console.error(err);
  }
}

connectDB();

app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/public/index.html');
})

app.listen(8080, ()=>{
    console.log('Server Ready');
})