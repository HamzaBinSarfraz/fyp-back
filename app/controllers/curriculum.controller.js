const Curriculum = require("../models/curriculum.model");

exports.create = (req, res) => {
    var course = new Curriculum(req.body);
    course
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

exports.getAll = (req, res) => {
    // let curriculum = new Curriculum(req.body);
    Curriculum
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
                    message: "unable to create curriculum"
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
    Curriculum.findByIdAndDelete(req.params.id)
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