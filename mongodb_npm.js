
const { MongoClient } = require("mongodb");

//Connection URL
const url = "mongodb://localhost:27017";
const client = new MongoClient(url);

//Database Name
const dbName = "E-commerce";

async function getData() {
    // Use connect method to connect to the server
  let result = await client.connect();
  let db = result.db(dbName);
  let collection = db.collection("product");

  //This line is to Find Documents with a Query Filter here is ` brand:'Google' ` and for find all documents use only find() function.
  let response = await collection.find({brand:'Google'}).toArray();
  //The toArray() method is used to convert the given collection into a normal array. An array containing the values will be returned if the collection is an object.
  console.log(response);
}

getData();
