// 连接数据库
let dbconfig = require("../../modules/dbconfig");

module.exports = async function (req, res) {
  // 查询是否已候选
  let sql = "select id from follow where uid = ? and sid = ?";
  let sqlArr = [req.body.uid, req.body.sid];
  const data = await dbconfig.sySqlConnect(sql, sqlArr);
  if(!data) return res.sendResult(null, 400, "加入候选出错");
  if (data.length > 0) return res.sendResult(null, 200, "请勿重复加入候选");
  // 加入候选
  sql = "insert into follow (uid,sid) value (?,?)"
  const report = await dbconfig.sySqlConnect(sql, sqlArr);
  if(!report) return res.sendResult(null, 400, "加入候选失败")
  return res.sendResult(report, 200, "加入候选成功");
};