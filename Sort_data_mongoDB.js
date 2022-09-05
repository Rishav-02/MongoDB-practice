const dbConnect = require("./MongoDB.js");//import data from file

//Using aync/await
const sortData = async () => {
  let db = await dbConnect(); 
  let result = await db.find().sort({name: 1}).toArray();//sort ascending as of alphabet number and if sort({name: -1}) then it sort in descending order.
  console.log(result);
};//First find data then sort from that data 

sortData();

//The limit() method takes one parameter, a number defining how many documents to return.
//limit(2) restrict the database and return only 2 file from first.

