let express = require("express");
let path = require("path");
let cookieParser = require("cookie-parser");
let bodyParser = require("body-parser");
let app = express();

app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// 处理post请求
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// 设置跨域和相应数据格式
app.all("/*", function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With, mytoken");
  res.header("Access-Control-Allow-Headers", "X-Requested-With, Authorization");
  res.setHeader("Content-Type", "application/json;charset=utf-8");
  res.header(
    "Access-Control-Allow-Headers",
    "Content-Type,Content-Length, Authorization, Accept,X-Requested-With"
  );
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By", " 3.2.1");
  if (req.method == "OPTIONS") res.send(200);
  /*让options请求快速返回*/ else next();
});

// 初始化统一响应机制
const resextra = require("./modules/resextra");
app.use(resextra);

// 初始化 后台登录 passport 策略
// admin_passport = require("./modules/passport");
// 设置登录模块的登录函数衔接 passport 策略
// admin_passport.setup(app, require("./actions/login/login"));
// 设置 passport 验证路径
// app.use("/user", admin_passport.tokenAuth);

require("./routes")(app);

app.listen(3000);
console.log("端口监听成功");
module.exports = app;
