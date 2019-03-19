const mongoose = require("mongoose");

var UserSchema = mongoose.Schema(
  {
    name: String,
    password: String,
    email: {
      type: String,
      require: true
    },
    // 0: admin, 1: student, 2: faculty
    role: {
      type: Number,
      enum: ['0', '1', '2']
    }
  },
  {
    timestamp: true
  }
);

module.exports = mongoose.model("user", UserSchema);
