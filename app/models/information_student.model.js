const mongoose = require("mongoose");

var StudentInfoSchema = mongoose.Schema({
  university: String,
  campus: String, 
  degree_program: String, 
  admission_session_from: String,
  admission_session_to: String,
  student_name: String,
  father_name: String,
  gender: String,
  roll_no: String,
  admission_date: String,
  nationality: String,
  cnic: {
    type: String,
    unique: true
  },
  date_of_birth: String,
  mailing_address: String,
  city_mail_address: String,
  hssc_degree_name: String,
  hssc_total_marks: String,
  hssc_obtained_marks: String
}, {
  timestamp: true
});

module.exports = mongoose.model("studentinfo", StudentInfoSchema);