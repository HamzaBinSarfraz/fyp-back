const bla = require("../../utility/verify_token.middleware");

module.exports = app => {
    const Faculty = require("../controllers/faculty_information_form.model.controller");

    app.post("/faculty", bla.jwtVerify, Faculty.create);
    app.get("/faculty", bla.jwtVerify, Faculty.findAll);
};
