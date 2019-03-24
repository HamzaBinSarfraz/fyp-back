const bla = require("../../utility/verify_token.middleware");

module.exports = app => {
    const Course = require("../controllers/course_log_template.controller");

    app.post("/courselog", bla.jwtVerify, Course.create);
    app.get("/courselog", bla.jwtVerify, Course.findAll);
    app.delete("/courselog/:id", bla.jwtVerify, Course.delete);
};
