// 连接数据库
let dbconfig = require("../modules/dbconfig");

module.exports = async function (req, res) {
  console.log(req.body);
  var sql = `insert into recruit (name,mobile,position) value (?,?,?)`;
  var sqlArr = [
    req.body.name,
    req.body.mobile,
    req.body.post
  ]; // 所需参数
  const data = await dbconfig.sySqlConnect(sql, sqlArr);
  if (!data) return res.sendResult(null, 400, "提交表单失败");
  console.log(data)
  return res.sendResult(data, 200, "提交表单成功");
};