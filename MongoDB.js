//The MongoClient class is a class that allows for making Connections to MongoDB.

// const { MongoClient } = require("mongodb");
const MongoClient = require('mongodb').MongoClient;

//Connection URL
const url = "mongodb://localhost:27017";
const client = new MongoClient(url);

//Database Name
const dbName = "E-commerce";

async function dbConnect() {
  //Use connect method to connect to the server
  let result = await client.connect();//Connect to MongoDB using a url
  let db = result.db(dbName);
  return db.collection("product");
}

//The module is similar to variable that is used to represent the current module and exports is an object that is exposed as a module.

// Adding the code below to allow importing
// the functions in other files
module.exports = dbConnect;//i.e export file