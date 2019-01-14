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
        institution: req.body.institution,
        campus: req.body.campus,
        degree_program: req.body.degree_program,
        admission_session: req.body.admission_session,
        roll_number: req.body.roll_number,
        cnic: req.body.cnic,
        name: req.body.name,
        gender: req.body.gender,
        father_name: req.body.father_name,
        uni_reg_no: req.body.uni_reg_no,
        credit_examptd: req.body.credit_examptd,
        semester: req.body.semester,
        hssc: req.body.hssc,
        total: req.body.total,
        remarks: req.body.remarks
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
