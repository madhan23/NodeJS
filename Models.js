const mongoose = require("mongoose");
var dataSchema = new mongoose.Schema({
  EmpId: {
    type: Number,
    unique: true,
    required: [true, "A empID field is mandatory"]
  },
  Name: { type: String, required: [true, "A Name field is mandatory"] },
  Role: { type: String, required: [true, "A Role field is mandatory"] },
  YearOfJoining: {
    type: Date,
    required: [true, "A YearOfJoining field is mandatory"]
  }
});
module.exports = mongoose.model("Virtusa", dataSchema);
