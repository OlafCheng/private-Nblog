var express = require("express");
var router = express.Router();

var checkNotLogin = require("../middlewares/check").checkNotLogin;

// GET /signin 登录页
router.get("/", checkNotLogin, function (req, res, next) {
  res.render("signup");  
});

// POST /signin 登录页
router.post("/", checkNotLogin, function (req, res, next) {
  res.send(req.flash());  
});

module.exports = router;