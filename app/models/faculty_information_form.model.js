const mongoose = require("mongoose");

var Faculty = mongoose.Schema({


    institution: String,
    program: String,


    fullTimeFaculty: [{
        facultySize: String, 
        noOfFaculty: String, 
        fullProfrssor: String,
        associateProfessor: String,
        assistantProfessor: String,
        leacures: String,
        teaching: String
    }], 
    partTimeFaculty: [{
        facultySize: String, 
        noOfFaculty: String, 
        fullProfrssor: String,
        associateProfessor: String,
        assistantProfessor: String,
        leacures: String,
        teaching: String
    }], 
    fullTimeFacultyStability2011: [{
        totalFaculty: String, 
        resigned: String, 
        retired: String,
        terminated: String,
        newInduction: String
    }], 
    fullTimeFacultyStability2012: [{
        totalFaculty: String, 
        resigned: String, 
        retired: String,
        terminated: String,
        newInduction: String
    }], 
    fullTimeFacultyStability2013: [{
        totalFaculty: String, 
        resigned: String, 
        retired: String,
        terminated: String,
        newInduction: String
    }], 
    fullTimeFacultyStability2014: [{
        totalFaculty: String, 
        resigned: String, 
        retired: String,
        terminated: String,
        newInduction: String
    }], 

}, {
    timestamp: true
});

module.exports = mongoose.model("facultyinfo", Faculty);