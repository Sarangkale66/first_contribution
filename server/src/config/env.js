const dotenv = require("dotenv");
dotenv.config();

module.exports = {
  port: Number(process.env.PORT) || 3000 ,
  mongo_url : process.env.MONGO_URL || "mongodb://localhost:27017"
}