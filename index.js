const express = require("express");
const mongoose = require("mongoose");
const app = express();
require("dotenv").config();
const register = require("./routes/register");
const login = require("./routes/login");
const cors = require("cors");

const port = process.env.PORT || 4000;

const logger = (req, res, next) => {
  console.log(`${req.method}, ${req.url}`);
  next();
};

app.use(express.json());
app.use(cors());

app.use("/api/register", register);
app.use("/api/login", login);
app.use(logger);

mongoose
  .connect(process.env.DB, { useNewUrlParser: true })
  .then(() => console.log("Mongodb connected"))
  .catch((err) => console.log(err));
app.listen(port, () => console.log(`server started on port ${port}`));
