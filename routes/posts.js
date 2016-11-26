var express = require("express");
var router = express.Router();

var checkLogin = require("../middlewares/check").checkLogin;

// GET /posts 所有用户或者特定用户的文章页
router.get("/", function(req, res, next) {
  res.send(req.flash());
});

// POST /posts 发表一篇文章
router.post("/", checkLogin, function(req, res, next) {
  res.send(req.flash());
});

// GET /posts/create 增加一篇文章
router.get("/create", checkLogin, function(req, res, next) {
  res.send(req.flash());
});

// GET /posts/:postid 单独的一片文章
router.get("/:postid", checkLogin, function(req, res, next) {
  res.send(req.flash());
});

// GET /posts/:postid/edit 更新文章
router.get("/:postid/edit", checkLogin, function(req, res, next) {
  res.send(req.flash());
});

// GET /posts/:postid/edit 更新文章
router.post("/:postid/edit", checkLogin, function(req, res, next) {
  res.send(req.flash());
});

// POST /posts/:postid/remove 删除一篇文章
router.post("/:postid/remove", checkLogin, function(req, res, next) {
  res.send(req.flash());
});

// POST /post/:postid/comment 创建一篇留言
router.post("/:postid/comment", checkLogin,function(req, res, next) {
  res.send(req.flash());
});

// POST /post/:post/comment/:commentid/remove 删除一条留言
router.post("/:postid/comment/:commentid/remove", checkLogin,function(req, res, next) {
  res.send(req.flash());
});

module.exports = router;