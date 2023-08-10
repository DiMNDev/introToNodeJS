require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 3000;
const connectDB = require("./db/connect");

app.use(express.json());
app.use("/", require("./routes"));

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(PORT, () => {
      console.log(`Server listening on port: ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
