const employee = require("./Models");
exports.employeeEntry = async (req, res) => {
  try {
    const record = await employee.create(req.body);
    res.status(201).json({
      requestInfo: req.requestTime,
      status: "success",
      data: {
        employee: record
      }
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err
    });
  }
};
exports.getEmployees = async (req, res) => {
  try {
    const employeeList = await employee.find();
    if (!employeeList)
      return res.status(400).json({ message: "No employee Records found..." });
    res.status(200).json({
      requestInfo: req.requestTime,
      status: "success",
      data: {
        employeeList
      }
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err
    });
  }
};
exports.getOneEmployee = async (req, res) => {
  try {
    const employeeList = await employee.find({ EmpId: req.params.id });
    console.log(employeeList.join("").length);
    if (!employeeList.join("").length)
      return res.status(400).json({ message: "No employee Records found..." });
    res.status(200).json({
      status: "success",
      data: {
        employeeList
      }
    });
  } catch (err) {
    res.status(500).json({
      status: "error",
      message: "Internal server Error"
    });
  }
};

exports.deleteEmployee = async (req, res) => {
  console.log({ EmpId: req.params.id });
  try {
    const deleteRecord = await employee.findOneAndDelete({
      EmpId: req.params.id
    });
    if (deleteRecord)
      return res
        .status(204)
        .json({ message: " employee Records deleted successfully ..." });
    else
      return res
        .status(400)
        .json({ message: "No employee Records are found..." });
  } catch (err) {
    res.status(500).json({
      status: "error",
      message: "Internal server Error"
    });
  }
};

exports.updateEmployee = async (req, res) => {
  try {
    const updateRecoed = await employee.findOneAndUpdate(req.body);
    console.log(updateRecoed);
    if (updateRecoed)
      return res
        .status(200)
        .json({ message: "Employee Record updated successfully..." });
    else
      return res
        .status(400)
        .json({ message: "No employee Records found to update..." });
  } catch (err) {
    res.status(500).json({
      status: "error",
      message: "Internal server Error"
    });
  }
};
