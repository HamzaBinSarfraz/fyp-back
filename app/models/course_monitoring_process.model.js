const mongoose = require("mongoose");

var CourseMonitor = mongoose.Schema(
    {
        institution: String,
        program: String,
        catalogNumber: String,
        q1: String,
        q2: String,
        q3: String,
        q4: String,
        q5: String,
        siganture: String,
        programCoordinatorName: String,
        submitDate: String
    },
    {
        timestamp: true
    }
);

module.exports = mongoose.model("coursemonitor", CourseMonitor);
