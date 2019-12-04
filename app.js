const express = require("express");
const app = express();
const morgan = require("morgan");
require("dotenv").config({ path: "Config.env" });
app.use(express.json());
app.use(morgan("dev"));
const mongoose = require("mongoose");
const conn = require("./connection");
const employeeRouter = require("./Router");
const {
  employeeEntry,
  getOneEmployee,
  updateEmployee,
  deleteEmployee,
  getEmployees
} = require("./Controller");
// 🔥  Middleware.... 🔥
app.use((req, res, next) => {
  req.requestTime = new Date();
  next();
});
app.use((req, res, next) => {
  console.log(" I'M Middle ware🔥 ");
  next();
});
// 🚀 Router 🚀

app.use("/api/employee", employeeRouter);

app.listen(process.env.PORT || 3000, () => {
  console.log(
    `Application Running on ${process.env.PORT} port and ${process.env.NODE_ENV} environment....`
  );
});
