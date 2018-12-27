const mongoose = require("mongoose");

const createConnection = async () => {
  // console.log(
  //   process.env.MONGO_USER,
  //   process.env.MONGO_PASSWORD,
  //   process.env.MONGO_DB
  // );

  // console.log(
  //   `mongodb+srv://${process.env.MONGO_USER}:${
  //   process.env.MONGO_PASSWORD
  //   }@cluster0-yck10.mongodb.net/${process.env.MONGO_DB}?retryWrites=true`
  // );

  await mongoose
    .connect(
      `mongodb+srv://${process.env.MONGO_USER}:${
      process.env.MONGO_PASSWORD
      }@cluster0-yck10.mongodb.net/${process.env.MONGO_DB}?retryWrites=true`,
      { useNewUrlParser: true }
    )
    .catch(err => {
      console.log(JSON.stringify(err));
    });
};

module.exports = createConnection;
