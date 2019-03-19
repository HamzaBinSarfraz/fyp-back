const mongoose = require("mongoose");

var UserSchema = mongoose.Schema(
  {
    name: String,
    password: String,
    email: {
      type: String,
      require: true
    },
    role: {
      type: String,
      enum: ['0', '1', '2']
    }
  },
  {
    timestamp: true
  }
);

module.exports = mongoose.model("user", UserSchema);
