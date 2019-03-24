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

