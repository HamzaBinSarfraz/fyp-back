const StudentInfoSchema = require("../models/information_student.model");

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
        university: req.body.university,
        campus: req.body.campus, 
        degree_program: req.body.degree_program, 
        admission_session: req.body.admission_session,
        student_name: req.body.student_name,
        father_name: req.body.father_name,
        gender: req.body.gender,
        roll_no: req.body.roll_no,
        admission_date: req.body.admission_date,
        nationality: req.body.nationality,
        cnic: req.body.cnic,
        date_of_birth: req.body.date_of_birth,
        mailing_address: req.body.mailing_address,
        city_mail_address: req.body.city_mail_address,
        hssc_degree_name: req.body.hssc_degree_name,
        hssc_total_marks: req.body.hssc_total_marks,
        hssc_obtained_marks: req.body.hssc_obtained_marks
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

