const express = require("express");
const Authentication = express.Router();

const Login = require("./login");

Authentication.use("", Login);

module.exports = Authentication;
