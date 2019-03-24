const CourseMonitor = require("../models/course_monitoring_process.model");

exports.create = (req, res) => {
    var course = new CourseMonitor(req.body);
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
    CourseMonitor
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
    CourseMonitor.findByIdAndDelete(req.params.id)
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

