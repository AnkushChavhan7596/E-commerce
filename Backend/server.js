const express = require("express");

const app = express();

const port = process.env.PORT || 8800;

const cors = require("cors");

const dotenv = require("dotenv").config();

// ###################################################################################################################
// database
const mongoose = require("./db/database");

// ###################################################################################################################
// models
const userModel = require("./models/userModel");

// ###################################################################################################################
// middlewares
app.use(express.json());
app.use(cors());

// ###################################################################################################################
// routes
app.get("/", (req, res) => {
  res.send("Hello from the Server");
});

app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/user", require("./routes/userRoutes"));
app.use("/api/product", require("./routes/productRoutes"));

// ###################################################################################################################
app.listen(port, () => {
  console.log(`Server is listenining on port : http://localhost:${port}`);
});
