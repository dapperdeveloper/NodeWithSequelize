const express = require("express");
const DB = require("./config/DB");
const User = require("./model/Users");
const app = express();
const cors = require('cors')

// Json decode
app.use(cors())
app.use(express.json());
// Router
const userRoute = require("./routes/UserRoute");
app.use("/api/users", userRoute);

app.listen(1000, async () => {
  try {
    await DB.authenticate();
    await DB.sync();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
  console.log("server is running");
});

