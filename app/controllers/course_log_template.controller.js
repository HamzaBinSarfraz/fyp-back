const CourseLog = require("../models/course_log_template.model");

exports.create = (req, res) => {
    var course = new CourseLog(req.body);
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
    CourseLog
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
    CourseLog.findByIdAndDelete(req.params.id)
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

