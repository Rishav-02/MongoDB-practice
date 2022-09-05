const dbConnect = require("./MongoDB.js");//import data from file

//Using aync/await   //async function always return promise
const readData = async () => {
  let db = await dbConnect();//return promise thats why use await
  let result = await db.find().toArray();//return promise thats why use await
  console.log(result);
};

readData();

//Using Promise

// dbConnect().then((res)=>{
// res.find().toArray().then((data)=>{
//  console.log(data);
// })
// });