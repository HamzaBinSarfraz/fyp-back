const StudentInfoSchema = require("../models/student_information_one.model");

exports.createStudent = (req, res) => {
  var newStudentInfo = new StudentInfoSchema(req.body);
  newStudentInfo
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

exports.findOneStudentInfo = (req, res) => {
  StudentInfoSchema.findById(req.params.id)
    .then(post => {
      if (!post) {
        return res.status(200).send({
          status: false,
          message: "student not found with id " + req.params.id
        });
      }
      res.send({
        status: true,
        data: post
      });
    })
    .catch(err => {
      if (err.kind === "ObjectId") {
        return res.status(200).send({
          status: false,
          message: "student not found with id " + req.params.id
        });
      }
      return res.status(200).send({
        status: false,
        message: "Error retrieving Activity with id " + req.params.id
      });
    });
};

exports.findAllStudent = (req, res) => {
  StudentInfoSchema.find()
    .then(data => {
      if (data.length > 0) {
        return res.status(200).send({
          status: true,
          data: data
        });
      } else {
        return res.status(200).send({
          status: false,
          message: "no record found"
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

exports.updateStudentInfo = (req, res) => {
  StudentInfoSchema.update(
    {
      _id: req.params.id
    },
    {
      $set: {
        institution: req.body.institution,
        program_evaluated: req.body.program_evaluated,
        matric_number_2012_2013: req.body.matric_number_2012_2013,
        matric_number_2013_2014: req.body.matric_number_2013_2014,
        matric_number_2014_2015: req.body.matric_number_2014_2015,
        fsc_number_2012_2013: req.body.fsc_number_2012_2013,
        fsc_number_2013_2014: req.body.fsc_number_2013_2014,
        fsc_number_2014_2015: req.body.fsc_number_2014_2015,

        program_intake_2010_2011: req.body.program_intake_2010_2011,
        program_intake_2011_2012: req.body.program_intake_2011_2012,
        program_intake_2012_2013: req.body.program_intake_2012_2013,
        program_intake_2013_2014: req.body.program_intake_2013_2014,
        program_intake_2014_2015: req.body.program_intake_2014_2015,

        student_to_teacher_2010_2011: req.body.student_to_teacher_2010_2011,
        student_to_teacher_2011_2012: req.body.student_to_teacher_2011_2012,
        student_to_teacher_2012_2013: req.body.student_to_teacher_2012_2013,
        student_to_teacher_2013_2014: req.body.student_to_teacher_2013_2014,
        student_to_teacher_2014_2015: req.body.student_to_teacher_2014_2015,

        out_of_class: req.body.out_of_class,

        date: req.body.date
      }
    },
    {
      new: true
    }
  )
    .then(data => {
      return res.status(200).send({
        success: true,
        message: "record updated successfully"
      });
    })
    .catch(err => {
      return res.status(200).send({
        success: false,
        message: err.message
      });
    });
};

exports.deleteStudentInfo = (req, res) => {
  StudentInfoSchema.findByIdAndDelete({
    _id: req.params.id
  })
    .then(data => {
      return res.status(200).send({
        success: true,
        message: "record deleted successfully"
      });
    })
    .catch(err => {
      return res.status(200).send({
        success: false,
        message: err.message
      });
    });
};
