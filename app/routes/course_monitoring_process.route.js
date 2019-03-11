const bla = require("../../utility/verify_token.middleware");

module.exports = app => {
    const CourseMonitor = require("../controllers/course_monitoring_process.controller");

    app.post("/coursemonitor", bla.jwtVerify, CourseMonitor.create);
    app.get("/coursemonitor", bla.jwtVerify, CourseMonitor.findAll);
};
