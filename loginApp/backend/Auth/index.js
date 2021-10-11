const passport = require("passport");
const User = require("../models/user");

passport.serializeUser(function (email, done) {
  done(null, email);
});

passport.deserializeUser(function (email, done) {
  done(null, email);
});

const LoginStrategy = require("./LoginStrategy");
passport.use("local-login", LoginStrategy);
module.exports = passport;
