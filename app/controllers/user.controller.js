const UserSchema = require("../models/user.model");
const jwt = require("jsonwebtoken");
const key = require("../../config/db.config").secret;

var token = jwt.sign({ foo: "bar" }, key, { expiresIn: "365d" });

exports.createUser = (req, res) => {
  var newUser = new UserSchema({
    name: req.body.name,
    password: req.body.password,
    email: req.body.email,
    role: req.body.role
  });
  newUser
    .save()
    .then(data => {
      if (data) {
        return res.status(200).send({
          status: true,
          data: data,
          token: token
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

exports.userLogin = (req, res) => {
  UserSchema.findOne({
    email: req.body.email
  }).then(data => {
    
    if (data) {
      return res.status(200).send({
        status: true,
        data: data, 
        token: token
      });
    } else {
      return res.status(200).send({
        status: false,
        message: "user not found"
      });
    }
  })
  .catch(err => {
    return res.status(200).send({
      status: false,
      message: err.message
    });
  })
};

exports.findOneUser = (req, res) => {
  UserSchema.findById(req.params.userId)
    .then(post => {
      if (!post) {
        return res.status(200).send({
          status: false,
          message: "user not found with id " + req.params.userId
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
          message: "user not found with id " + req.params.userId
        });
      }
      return res.status(200).send({
        status: false,
        message: "Error retrieving Activity with id " + req.params.userId
      });
    });
};

exports.findAllUser = (req, res) => {
  UserSchema.find()
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
