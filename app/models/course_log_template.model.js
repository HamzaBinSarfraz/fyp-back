const mongoose = require("mongoose");

var CourseLog = mongoose.Schema(
    {
        institution: String,
        program: String,
        catalogNumber: String,
        instructorName: String,
        date: String,
        duration: String,
        topicsCovered: String,
        evaluationInstruments: String,
        siganture: String,
        instructorSignature: String,
        submitDate: String
    },
    {
        timestamp: true
    }
);

module.exports = mongoose.model("courselog", CourseLog);
