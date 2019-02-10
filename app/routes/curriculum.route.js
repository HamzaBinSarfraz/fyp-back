const bla = require("../../utility/verify_token.middleware");

module.exports = app => {
    const curriculum = require("../controllers/curriculum.controller");

    app.get("/curriculum", bla.jwtVerify, curriculum.getAll);
};