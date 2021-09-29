const mongoose = require("mongoose");
require("dotenv").config();

//DB CONNECTION

const connectToMongo = () => {
  mongoose
    .connect(process.env.DATABASE, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("DB CONNECTED");
    });
};

module.exports = connectToMongo;
