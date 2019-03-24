const bla = require("../../utility/verify_token.middleware");

module.exports = app => {
    const CourseReg = require("../controllers/course_registration.controller");

    app.post("/coursereg", bla.jwtVerify, CourseReg.create);
    app.get("/coursereg", bla.jwtVerify, CourseReg.findAll);
    app.delete("/coursereg/:id", bla.jwtVerify, CourseReg.delete);
};
