var path = require("path");
var config = require("config-lite");
var express = require("express");
var session = require("express-session");
var MongoStore = require("connect-mongo")(session);
var flash = require("connect-flash");
var routes = require("./routes");
var pkg = require("./package");

var app = express();

// 设置模板目录
app.set("views", path.join(__dirname, "views"));
// 设置渲染模板
app.set("view engine", "ejs");

// 设置静态文件目录
app.use(express.static(path.join(__dirname, "public")));
// 设置 session 中间件
app.use(session({
  name: config.session.key,// 设置 cookie 中保存 sessionid 的字段名
  secret: config.session.secret,// 通过设置 secret, 使用 config 中的 secret 字段来计算 hash, 使产生的 sessionid 防篡改
  cookie: {
    maxAge: config.session.maxAge// 过期时间
  },
  store: new MongoStore({
    url: config.mongodb
  })
}));

// app 中间件, 用来显示通知
app.use(flash());

// 对 app 进行路由
routes(app);

// 设置模板全局常量
app.locals.blog = {
  title: pkg.name,
  description: pkg.description
};

// 添加模板必需的三个变量
app.use(function (req, res, next) {
  res.locals.user = req.session.user;
  res.locals.success = req.flash('success').toString();
  res.locals.error = req.flash('error').toString();
  next();
});

// 对 app 进行监听
console.log("Process path is: " + process.cwd());
console.log("process.env.NODE_ENV = " + process.env.NODE_ENV);
app.listen(config.port, () => {
  console.log(`${pkg.name} listening at port ${config.port}`);
});