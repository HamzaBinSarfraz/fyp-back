const mongoose = require("mongoose");

var CourseReg = mongoose.Schema(
    {
        institution: String,
        program: String,
        preRegPolicyWhen: String,
        preRegPolicyHow: String,
        lateRegPolicy1: String,
        lateRegPolicy2: String,
        minAndMaxCreditHours: String,
        processToEnsure: String,
        deanSiganture: String,
        submitDate: String
    },
    {
        timestamp: true
    }
);

module.exports = mongoose.model("coursereg", CourseReg);
