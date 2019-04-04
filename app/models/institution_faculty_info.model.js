const mongoose = require("mongoose");

var InstitutionFaculty = mongoose.Schema({

    university: String,
    campus: String,
    date: String,
    sr_no: String,
    cnic: String,
    nameOfFacultyMember: String,
    gender: String,
    regNo: String,
    degree: String,
    creadit: String,
    dateOfAward: String,
    nameOfUni: String,
    country: String,
    fullTime: String


}, {
    timestamp: true
});

module.exports = mongoose.model("InstitutionFacukty", InstitutionFaculty);