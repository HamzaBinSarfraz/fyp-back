const Faculty = require("../models/faculty_information_form.model");

exports.create = (req, res) => {
    var newFaculty = new Faculty(req.body);
    newFaculty
        .save()
        .then(data => {
            if (data) {
                return res.status(200).send({
                    status: true,
                    data: data
                });
            } else {
                return res.status(200).send({
                    status: false,
                    message: "unable to create user"
                });
            }
        })
        .catch(err => {
            return res.status(200).send({
                status: false,
                message: err.message
            });
        });
};


exports.findAll = (req, res) => {
    Faculty
        .find()
        .then(data => {
            if (data) {
                return res.status(200).send({
                    status: true,
                    data: data
                });
            } else {
                return res.status(200).send({
                    status: false,
                    message: "unable to create user"
                });
            }
        })
        .catch(err => {
            return res.status(200).send({
                status: false,
                message: err.message
            });
        });
};

exports.delete = (req, res) => {
    Faculty.findByIdAndDelete(req.params.id)
        .then(data => {
            res.status(200).json({
                status: true,
                message: "Deleted successfully ..."
            })
        })
        .catch(err => {
            res.status(200).json({
                status: false,
                message: err.message
            })
        })
}

exports.updateFaculty = (req, res) => {
    Faculty.update({
        _id: req.parmas.id
    },
        {
            $set: {
                institution: req.body.institution,
                program: req.body.program,
                facultySize: req.body.facultySize,
                noOfFaculty: req.body.noOfFaculty,
                fullProfrssor: req.body.fullProfrssor,
                associateProfessor: req.body.associateProfessor,
                assistantProfessor: req.body.associateProfessor,
                leacures: req.body.leacures,
                teaching: req.body.teaching,
                facultySize1: req.body.facultySize1,
                noOfFaculty1: req.body.noOfFaculty1,
                fullProfrssor1: req.body.fullProfrssor1,
                associateProfessor1: req.body.associateProfessor1,
                assistantProfessor1: req.body.assistantProfessor1,
                leacures1: req.body.leacures1,
                teaching1: req.body.teaching1,
                totalFaculty: req.body.totalFaculty,
                resigned: req.body.resigned,
                retired: req.body.retired,
                terminated: req.body.terminated,
                newInduction: req.body.newInduction,
                totalFaculty1: req.body.totalFaculty1,
                resigned1: req.body.resigned1,
                retired1: req.body.retired1,
                terminated1: req.body.terminated1,
                newInduction1: req.body.newInduction1,
                totalFaculty2: req.body.totalFaculty2,
                resigned2: req.body.resigned2,
                retired2: req.body.retired2,
                terminated2: req.body.terminated2,
                newInduction2: req.body.newInduction2,
                totalFaculty3: req.body.totalFaculty3,
                resigned3: req.body.resigned3,
                retired3: req.body.retired3,
                terminated3: req.body.terminated3,
                newInduction3: req.body.newInduction3
            }
        })
        .then(data => {
            return res.status(200).send({
                status: true,
                message: "updated"
            })
        })
        .catch(err => {
            return res.status(200).send({
                status: false,
                message: err.message
            })
        })
}

