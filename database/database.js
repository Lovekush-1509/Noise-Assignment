const mongoose = require("mongoose");
require("dotenv").config();
const MONGOURI = process.env.MONGO_URI || "mongodb+srv://lovekush2022ucb6052_db_user:22zpLpwNDQYItnXx@cluster0.mhaw5ge.mongodb.net/?appName=Cluster0"

function databaseConnect() {
  mongoose
    .connect(MONGOURI)
    .then(() => console.log("MongoDB Connected"))
    .catch((err) => console.error("Connection Error:", err));
  // console.log("the mongodb connected with the url",MONGOURI);
}

module.exports = databaseConnect;