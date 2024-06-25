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

//importing all the routes
const userRoutes = require("./routes/userRoutes");

//rest objects
const app = express();

//middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

//routes
//user routes
app.use("/api/v1/user", userRoutes);

//port
const PORT = 8080 || process.env.PORT;

//listening server
app.listen(PORT, () => {
  console.log(`Server is running on Port ${PORT}`);
});
