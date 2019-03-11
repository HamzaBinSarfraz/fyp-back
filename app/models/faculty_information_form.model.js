const mongoose = require("mongoose");

var Faculty = mongoose.Schema({


    institution: String,
    program: String,
        facultySize: String, 
        noOfFaculty: String, 
        fullProfrssor: String,
        associateProfessor: String,
        assistantProfessor: String,
        leacures: String,
        teaching: String,
        facultySize1: String, 
        noOfFaculty1: String, 
        fullProfrssor1: String,
        associateProfessor1: String,
        assistantProfessor1: String,
        leacures1: String,
        teaching1: String,
        totalFaculty: String, 
        resigned: String, 
        retired: String,
        terminated: String,
        newInduction: String,
        totalFaculty1: String, 
        resigned1: String, 
        retired1: String,
        terminated1: String,
        newInduction1: String,
        totalFaculty2: String, 
        resigned2: String, 
        retired2: String,
        terminated2: String,
        newInduction2: String,
        totalFaculty3: String, 
        resigned3: String, 
        retired3: String,
        terminated3: String,
        newInduction3: String
}, {
    timestamp: true
});

module.exports = mongoose.model("facultyinfo", Faculty);