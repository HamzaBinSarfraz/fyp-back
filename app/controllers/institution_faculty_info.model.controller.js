const InstitutionFaculty = require("../models/institution_faculty_info.model");

exports.create = (req, res) => {
    var newInstitution = new InstitutionFaculty(req.body);
    newInstitution.save()
    .then(data => {
        return res.status(200).send({
            status: true, 
            data: data
        })
    })
    .catch(err => {
        return res.status(200).send({
            status: false, 
            message: err.message
        })
    })
}
