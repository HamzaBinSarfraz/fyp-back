const mongoose = require("mongoose");

var Curriculum = mongoose.Schema({
    institution: String,
    program: String,
    date: String,

    computingCoreCoursesCreditHours: String,
    majorBaseCoreCreditHours: String,
    majorBaseElectiveCreditHours: String,
    supportinSciencesCreditHours: String,
    generalElectivesCreditHours: String,
    universityElectivesCreditHours: String,

    computingCoreCoursesCumulativeCreditHours: String,
    majorBaseCoreCumulativeCreditHours: String,
    majorBaseElectiveCumulativeCreditHours: String,
    supportinSciencesCumulativeCreditHours: String,
    generalElectivesCumulativeCreditHours: String,
    universityElectivesCumulativeCreditHours: String,

    courseCode: String,
    courseTitle: String,
    creditHour: String,
    prerequiste: String,

    courseCode1: String,
    courseTitle1: String,
    creditHour1: String,
    prerequiste1: String, 

    courseCode2: String,
    courseTitle2: String,
    creditHour2: String,
    prerequiste2: String, 

    courseCode3: String,
    courseTitle3: String,
    creditHour3: String,
    prerequiste3: String, 

    courseCode4: String,
    courseTitle4: String,
    creditHour4: String,
    prerequiste4: String, 

    courseCode5: String,
    courseTitle5: String,
    creditHour5: String,
    prerequiste5: String
}, {
    timestamp: true
});

module.exports = mongoose.model("curriculum", Curriculum);