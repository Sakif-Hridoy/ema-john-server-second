const express = require("express");
require('dotenv').config()
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.djg6r.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;



const app = express();
const port = 5000;


const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  const collection = client.db("emaJohnStore").collection("products");
  // perform actions on the collection object
  console.log("Database Connected")
});


app.get('/',(req,res)=>{
    res.send('Hello Mongo')
})

app.listen(port)


