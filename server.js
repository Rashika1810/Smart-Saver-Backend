const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const dotenv = require("dotenv");
const colors = require("colors");
const connectDb = require("./config/connectDb");

// configure dotenv file
dotenv.config();

//database connection
connectDb();

//rest objects
const app = express();

//middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

//routes
app.get("/", (req, resp) => {
  resp.send("<h1>Server in started</h1>");
});

//port
const PORT = 8080 || process.env.PORT;

//listening server
app.listen(PORT, () => {
  console.log(`Server is running on Port ${PORT}`);
});
