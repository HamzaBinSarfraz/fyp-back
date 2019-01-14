module.exports = app => {
  const StudentInfo = require("../controllers/information_student.controller");

  app.post("/studentinfo", StudentInfo.createStudent);
  app.get("/studentinfo/:id", StudentInfo.findOneStudentInfo);
  app.get("/studentinfo", StudentInfo.findAllStudent);
  app.put("/studentinfo/:id", StudentInfo.updateStudentInfo);
  app.delete("/studentinfo/:id", StudentInfo.deleteStudentInfo);
};
