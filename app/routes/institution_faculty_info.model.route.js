const bla = require("../../utility/verify_token.middleware");

module.exports = app => {
    const Institute = require("../controllers/institution_faculty_info.model.controller");
    
    app.post("/institution_faculty_info", bla.jwtVerify, Institute.create);
    app.get('/institution_faculty_info', bla.jwtVerify, Institute.findI);
    app.get('/institution_faculty_info/:id', bla.jwtVerify, Institute.findId);
    app.put('/institution_faculty_info/:id', bla.jwtVerify, Institute.updateInstitute);
    app.delete('/institution_faculty_info/:id', bla.jwtVerify, Institute.deleteI);
};