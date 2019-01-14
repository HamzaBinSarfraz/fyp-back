const bla = require("../../utility/verify_token.middleware");

module.exports = app => {
  const User = require("../controllers/user.controller");
  // Create a new user
  app.post("/signup", User.createUser);
  app.post("/login", User.userLogin);
  app.get("/login", bla.jwtVerify, User.findAllUser);
  app.get("/login/:userId", bla.jwtVerify, User.findOneUser);
  // app.get('/skills', User.findPostBySkills);
};
