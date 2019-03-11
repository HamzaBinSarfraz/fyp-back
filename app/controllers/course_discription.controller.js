const CourseDiscription = require("../models/course_discription.model");

exports.create = (req, res) => {
    var course = new CourseDiscription(req.body);
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


exports.findAll = (req, res) => {
    CourseDiscription
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

