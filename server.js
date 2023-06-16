const express = require("express");
const app = express();
const userRoute = require("./routes/users");
const authRoute = require("./routes/auth");
const postRoute = require("./routes/posts");
const PORT = 3000;
const mongoose = require("mongoose");
require("dotenv").config();
// connect to db
mongoose
  .connect(process.env.MONGOURL)
  .then(() => {
    console.log("connect done...");
  })
  .catch((err) => {
    console.log(err);
  });

// ミドルウェア
app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/posts", postRoute);

app.listen(PORT, () => console.log("hello server!"));
