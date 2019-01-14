const mongoose = require("mongoose");

var StudentInfoSchema = mongoose.Schema(
  {
    institution: String,
    campus: String,
    degree_program: String, 
    admission_session: String, 
    serial_number: String, 
    roll_number: String, 
    cnic: Number, 
    name: String, 
    gender: String, 
    father_name: String, 
    uni_reg_no: String, 
    credit_examptd: String, 
    semester: String, 
    hssc: String, 
    total: String, 
    remarks: String
  },
  {
    timestamp: true
  }
);

module.exports = mongoose.model("studentinfo", StudentInfoSchema);
