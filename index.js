const express = require("express");
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.djg6r.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;



const app = express();
app.use(bodyParser.json());
app.use(cors());
const port = 5000;


const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  const products = client.db("emaJohnStore").collection("products");
  // perform actions on the collection object
//   console.log("Database Connected")
    app.post('/addProduct',(req,res)=>{
        const product = req.body;
        console.log(product)
        products.insertOne(product)
        .then(result => {
            console.log(result)
        })
    })
});


app.get('/',(req,res)=>{
    res.send('Hello Mongo')
})

app.listen(port);


