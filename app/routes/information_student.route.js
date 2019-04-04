const bla = require("../../utility/verify_token.middleware");

module.exports = app => {
  const StudentInfo = require("../controllers/information_student.controller");

  app.post("/studentinfo", bla.jwtVerify, StudentInfo.createStudent);
  app.get("/studentinfo/:id", bla.jwtVerify, StudentInfo.findOneStudentInfo);
  app.get("/studentinfo", bla.jwtVerify, StudentInfo.findAllStudent);
  app.put("/studentinfo/:id", bla.jwtVerify, StudentInfo.updateStudentInfo);
  app.delete("/studentinfo/:id", bla.jwtVerify, StudentInfo.deleteStudentInfo);

  app.post('/studentinfo/search', bla.jwtVerify, StudentInfo.searchStudent);
};
