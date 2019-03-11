const Course = require("../models/course_display_for_visit.model");

exports.create = (req, res) => {
    var course = new Course(req.body);
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
    Course
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

