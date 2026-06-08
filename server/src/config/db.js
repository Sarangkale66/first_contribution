const env = require("./env")
const mongoose = require("mongoose");

async function connectDB() {
  try {
    await mongoose.connect(env.mongo_url);
    console.log("mongodb connected");
  } catch (err) {
    console.error(err);
  }
}

module.exports = connectDB;