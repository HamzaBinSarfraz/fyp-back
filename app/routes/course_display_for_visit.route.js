const bla = require("../../utility/verify_token.middleware");

module.exports = app => {
    const Course = require("../controllers/course_display_for_visit.controller");

    app.post("/coursedisplay", bla.jwtVerify, Course.create);
    app.get("/coursedisplay", bla.jwtVerify, Course.findAll);
    app.delete("/coursedisplay/:id", bla.jwtVerify, Course.delete);
};
