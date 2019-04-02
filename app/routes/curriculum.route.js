const bla = require("../../utility/verify_token.middleware");

module.exports = app => {
    const curriculum = require("../controllers/curriculum.controller");

    app.post("/curriculum", bla.jwtVerify, curriculum.create);
    app.get("/curriculum", bla.jwtVerify, curriculum.getAll);
    app.delete("/curriculum/:id", bla.jwtVerify, curriculum.delete);

    app.get('/curriculum/:id', bla.jwtVerify, curriculum.getOne);

    app.put('/curriculum/:id', bla.jwtVerify, curriculum.updateOne);
};