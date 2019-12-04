const express = require("express");
const router = express.Router();
const {
  employeeEntry,
  getOneEmployee,
  updateEmployee,
  deleteEmployee,
  getEmployees
} = require("./Controller");

// custom middleware......🔥
const method = (req, res, next) => {
  console.log("**** get Employee List");
  next();
};
router.route("/register").post(employeeEntry);
router.route("/").get(method, getEmployees);
router
  .route("/:id")
  .delete(deleteEmployee)
  .patch(updateEmployee)
  .get(getOneEmployee);

module.exports = router;
