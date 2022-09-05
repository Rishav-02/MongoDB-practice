const dbConnect = require("./MongoDB");

//The 'await' expression causes 'async' function execution to pause until a 'Promise' is settled (that is, fulfilled or rejected), and to resume execution of the 'async' function after fulfillment. When resumed, the value of the 'await' expression is that of the fulfilled 'Promise'.

const updateData = async () => {
  let data = await dbConnect();
  const result = await data.updateOne(
    { brand: "Samsung" },
    { $set: { category: "TV 55inch" } }
  );
  console.log(data); //return promise to resolve this promise use await keyword and if we use await then function must be async.
  console.log(result); //return promise
};

updateData();
