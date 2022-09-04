const dbConnect = require("./MongoDB"); //import from other file
const MongoDB = require("mongodb"); //used in delete method
const express = require("express");

const app = express();

// After express version 4.6 to use (req.body) we use express.json() instead of body-parser() 
//The express.json() function is a built-in middleware function in Express. It parses incoming requests with JSON payloads and is based on body-parser.
app.use(express.json()); //request to get body in post method if we will not use this function then we can parses req.body 


// ******** get method *********

//GET is used to request data from a specified resource.
//Note that the query string (name/value pairs) is sent in the URL of a GET request:
app.get("/", async (req, res) => {
  let getdata = await dbConnect();
  const getresult = await getdata.find().toArray();
  res.send(getresult);
});


// ***** post method *****

//POST is used to send data to a server to create a resource.
//Here, req.body is a data that we create in raw-JSON with section 'Body' on postman
app.post("/", async (req, res) => {
  // console.log(req.body);//This is the data that we create on Postman and print that data on console(nodejs).
  // res.send(req.body);//return the same data that we create on postman.

  let postdata = await dbConnect();
  //Create data using post method
  let postresult = await postdata.insertOne(req.body); //req.body return data to nodejs which we insert in Postman/reactjs
  res.send(postresult);//send the HTTP response and set header information(Content-Type)
});


// ******** put method *********

//PUT is used to send data to a server to create/update a resource.
//post method is also use to update data but put method is standard method for update
/* The difference between POST and PUT is that PUT requests are idempotent. That is, calling the same PUT request multiple times will always produce the same result. In contrast, calling a POST request repeatedly have side effects of creating the same resource multiple times. */

app.put("/:brand", async (req, res) => {
  // console.log(req.body);//This console show data that we request( i.e create in postman ) that come from postman to Nodejs.
  let putdata = await dbConnect();
  const putresult = await putdata.updateOne(
    // {name: "Redmi note 4"} change price.
    //{name: req.body.name} 1st method to update price with using name "Realme 6 pro".
    { brand: req.params.brand },//This is Query params to use this change the route to "/:brand"
    { $set: req.body }
    );
  // res.send(putresult);
  res.send({ result: "update" });
});


// ********* Delete method *******

// here MongoDB.ObjectId used to change data into ObjectId (because _id is in form of ObjectId)
app.delete("/:id", async (req, res) => {
  console.log(req.params.id);//To run  http://localhost:2000/62c529c4011f80400e9d4f4b in postman. this id is passed at the time to send request to delete that data in Postman.
  const deletedata = await dbConnect();
  const deleteresult = await deletedata.deleteOne({
  _id: new MongoDB.ObjectId(req.params.id)});//these are dynamic data that we create on postman with route id
  res.send(deleteresult);
});

app.listen(2500);//change the port according to need,i.e 2000 or 2500.



/* HEAD is almost identical to GET, but without the response body.

In other words, if GET/users returns a list of users, then HEAD/users will make the same request but will not return the list of users.

HEAD requests are useful for checking what a GET request will return before actually making a GET request - like before downloading a large file or response body. */