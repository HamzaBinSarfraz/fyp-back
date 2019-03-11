const mongoose = require("mongoose");

var CourseDiscription = mongoose.Schema(
    {
        institution: String,
        program: String, 
        courseCode: String,
        courseTitle: String,
        assessment: String,
        courseCoordinator: String,
        url: String,
        currentCatalog: String,
        textBook: String,
        referenceMaterial: String,
        courseGoals: String,
        topics: String,
        laboratory: String,
        programmingAssignment: String,
        classTime: [
            {
                theory: String,
                problemAnalysis: String,
                solDesign: String,
                socialIssues: String
            }
        ],
        instructorName: String,
        instructorSig: String,
        date: String

    },
    {
        timestamp: true
    }
);

module.exports = mongoose.model("coursediscription", CourseDiscription);
