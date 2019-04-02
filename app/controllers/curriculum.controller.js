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

exports.getOne = (req, res) => {
    Curriculum.findOne({
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

exports.updateOne = (req, res) => {
    Curriculum.update({
        _id: req.params.id
    }, {
        $set: {
            institution: req.body.institution,
            program: req.body.program,
            date: req.body.date,

            computingCoreCoursesCreditHours: req.body.computingCoreCoursesCreditHours,
            majorBaseCoreCreditHours: req.body.majorBaseCoreCreditHours,
            majorBaseElectiveCreditHours: req.body.majorBaseElectiveCreditHours,
            supportinSciencesCreditHours: req.body.supportinSciencesCreditHours,
            generalElectivesCreditHours: req.body.generalElectivesCreditHours,
            universityElectivesCreditHours: req.body.universityElectivesCreditHours,

            computingCoreCoursesCumulativeCreditHours: req.body.computingCoreCoursesCumulativeCreditHours,
            majorBaseCoreCumulativeCreditHours: req.body.majorBaseCoreCumulativeCreditHours,
            majorBaseElectiveCumulativeCreditHours: req.body.majorBaseElectiveCumulativeCreditHours,
            supportinSciencesCumulativeCreditHours: req.body.supportinSciencesCumulativeCreditHours,
            generalElectivesCumulativeCreditHours: req.body.generalElectivesCumulativeCreditHours,
            universityElectivesCumulativeCreditHours: req.body.universityElectivesCumulativeCreditHours,

            courseCode: req.body.courseCode,
            courseTitle: req.body.courseTitle,
            creditHour: req.body.creditHour,
            prerequiste: req.body.prerequiste,

            courseCode1: req.body.courseCode1,
            courseTitle1: req.body.courseTitle1,
            creditHour1: req.body.creditHour1,
            prerequiste1: req.body.prerequiste1,

            courseCode2: req.body.courseCode2,
            courseTitle2: req.body.courseTitle2,
            creditHour2: req.body.creditHour2,
            prerequiste2: req.body.prerequiste2,

            courseCode3: req.body.courseCode3,
            courseTitle3: req.body.courseTitle3,
            creditHour3: req.body.creditHour3,
            prerequiste3: req.body.prerequiste3,

            courseCode4: req.body.courseCode4,
            courseTitle4: req.body.courseTitle4,
            creditHour4: req.body.creditHour4,
            prerequiste4: req.body.prerequiste4,

            courseCode5: req.body.courseCode5,
            courseTitle5: req.body.courseTitle5,
            creditHour5: req.body.creditHour5,
            prerequiste5: req.body.prerequiste5
        }
    })
}

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