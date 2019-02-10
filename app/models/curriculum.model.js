const mongoose = require("mongoose");

var Curriculum = mongoose.Schema({
    semester_one: [{
        course_code: String, 
        course_title: String, 
        credit_hour: String
    }], 
    semester_two: [{
        course_code: String, 
        course_title: String, 
        credit_hour: String
    }], 
    semester_three: [{
        course_code: String, 
        course_title: String, 
        credit_hour: String
    }], 
    semester_four: [{
        course_code: String, 
        course_title: String, 
        credit_hour: String
    }], 
    semester_five: [{
        course_code: String, 
        course_title: String, 
        credit_hour: String
    }], 
    semester_six: [{
        course_code: String, 
        course_title: String, 
        credit_hour: String
    }], 
    semester_seven: [{
        course_code: String, 
        course_title: String, 
        credit_hour: String
    }], 
    semester_eight: [{
        course_code: String, 
        course_title: String, 
        credit_hour: String
    }], 
    elective_courses: [{
        course_code: String, 
        course_title: String, 
        credit_hour: String
    }]
}, {
    timestamp: true
});

module.exports = mongoose.model("curriculum", Curriculum);