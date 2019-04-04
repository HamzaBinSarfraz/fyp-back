const bla = require("../../utility/verify_token.middleware");

module.exports = app => {
    const Institute = require("../controllers/institution_faculty_info.model.controller");

    app.post("/institution_faculty_info", bla.jwtVerify, Institute.create);
};