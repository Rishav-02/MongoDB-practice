//import the file 
const Mongo = require("./MongoDB");//Mongo is a variable to store data of file named 'MongoDB.js'.
//require returns an object with dbConnect() and stores it in the Mongo variable which is used to invoke the required.

//async function insertData(){ } it is also a syntax for first line.
const insertData = async () => {
  const db = await Mongo();
  const result = await db.insertOne({
    name: "One plus 9T",
    brand: "One Plus",
    price: 850,
    category: "mobile",
  });
  console.log(result);
  console.log("Data inserted"); //If we run program 5 times then the same data is inserting 5 times.
};

insertData(); //function call
