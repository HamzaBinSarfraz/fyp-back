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


exports.findI = (req, res) => {
    InstitutionFaculty.find()
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

exports.findId = (req, res) => {
    InstitutionFaculty.findOne({
            _id: req.params.id
        })
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

exports.updateInstitute = (req, res) => {
    InstitutionFaculty.update({
            _id: req.params.id
        }, {
            $set: {
                university: req.body.university,
                campus: req.body.campus,
                date: req.body.date,
                sr_no: req.body.sr_no,
                cnic: req.body.cnic,
                nameOfFacultyMember: req.body.nameOfFacultyMember,
                gender: req.body.gender,
                regNo: req.body.regNo,
                degree: req.body.degree,
                creadit: req.body.creadit,
                dateOfAward: req.body.dateOfAward,
                nameOfUni: req.body.nameOfUni,
                country: req.body.country,
                fullTime: req.body.fullTime
            }
        }).then(data => {
            return res.status(200).send({
                status: true,
                message: "Updated ... "
            })
        })
        .catch(err => {
            return res.status(200).send({
                status: false,
                message: err.message
            })
        })
}

exports.deleteI = (req, res) => {
    InstitutionFaculty.deleteOne({
            _id: req.params.id
        })
        .then(data => {
            return res.status(200).send({
                status: true,
                message: "deleted ... "
            })
        })
        .catch(err => {
            return res.status(200).send({
                status: false,
                message: err.message
            })
        })
}

exports.searchI = (req, res) => {
    var search = req.body.searchtext;
    console.log(search);
    // regex to find records that start with letter any name , example "e"
    InstitutionFaculty.aggregate([{
            $match: {
                $or: [{
                    cnic: {
                        $regex: "^" + search,
                        $options: "i"
                    },
                }, ]

            }
        },

    ]).exec(function (err, result) {
        if (err) {
            return res.status(200).send({
                success: false,
                message: err.message
            });
        } else {
            if (result > 0) {
                return res.status(200).send({
                    success: true,
                    message: "no record found"
                });
            } else {
                return res.status(200).send({
                    success: true,
                    data: result
                });
            }
        }
    });
}