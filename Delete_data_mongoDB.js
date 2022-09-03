const dbConnect = require("./MongoDB"); //dbConnect is variable so take any name as per our wish

const deleteData = async () => {
  const data = await dbConnect();
  const result = await data.deleteOne({ brand: "LG" });
//   console.log(data); //return promise
  console.log(result); //return promise

  if(result.acknowledged){
    console.log("Data Deleted");
  }
};

deleteData(); //function call
