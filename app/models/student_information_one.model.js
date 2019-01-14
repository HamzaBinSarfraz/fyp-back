const mongoose = require("mongoose");

var StudentInfoOneSchema = mongoose.Schema(
  {
    institution: String,
    program_evaluated: String,
    matric_number_2012_2013: String,
    matric_number_2013_2014: String,
    matric_number_2014_2015: String,
    fsc_number_2012_2013: String,
    fsc_number_2013_2014: String,
    fsc_number_2014_2015: String,

    program_intake_2010_2011: String,
    program_intake_2011_2012: String,
    program_intake_2012_2013: String,
    program_intake_2013_2014: String,
    program_intake_2014_2015: String,

    student_to_teacher_2010_2011: String,
    student_to_teacher_2011_2012: String,
    student_to_teacher_2012_2013: String,
    student_to_teacher_2013_2014: String,
    student_to_teacher_2014_2015: String,

    out_of_class: String,

    date: Date
  },
  {
    timestamp: true
  }
);

module.exports = mongoose.model("studentinfoone", StudentInfoOneSchema);
