const env = require("./config/env")
const app = require("./app");
const connectDB = require("./config/db");
connectDB();

app.listen(env.port, ()=>{
  console.log("server running on port", env.port);
});