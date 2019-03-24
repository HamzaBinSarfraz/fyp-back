const bla = require("../../utility/verify_token.middleware");

module.exports = app => {
    const Course = require("../controllers/course_discription.controller");

    app.post("/coursediscription", bla.jwtVerify, Course.create);
    app.get("/coursediscription", bla.jwtVerify, Course.findAll);
    app.delete("/coursediscription/:id", bla.jwtVerify, Course.delete);
};
