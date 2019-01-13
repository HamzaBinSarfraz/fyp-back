const mongoose = require("mongoose");

var UserSchema = mongoose.Schema(
  {
    name: String,
    password: String,
    email: {
      type: String,
      require: true
    }
  },
  {
    timestamp: true
  }
);

module.exports = mongoose.model("user", UserSchema);
