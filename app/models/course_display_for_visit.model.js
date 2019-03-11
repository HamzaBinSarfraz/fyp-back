const mongoose = require("mongoose");

var CourseDisplay = mongoose.Schema(
    {
        viceChancellor: String,
        signature: String,
        date: {
            type: String
        }
    },
    {
        timestamp: true
    }
);

module.exports = mongoose.model("coursedisplay", CourseDisplay);
