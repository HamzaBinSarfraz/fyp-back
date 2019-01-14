const bla = require("../../utility/verify_token.middleware");

module.exports = app => {
    const StudentInfo = require("../controllers/student_information_one.controller");
  
    app.post("/info", bla.jwtVerify, StudentInfo.createStudent);
    app.get("/info/:id", bla.jwtVerify, StudentInfo.findOneStudentInfo);
    app.get("/info", bla.jwtVerify, StudentInfo.findAllStudent);
    app.put("/info/:id", bla.jwtVerify, StudentInfo.updateStudentInfo);
    app.delete("/info/:id", bla.jwtVerify, StudentInfo.deleteStudentInfo);
  };
  