// 连接数据库
let dbconfig = require("../modules/dbconfig");

module.exports = async function (req, res) {
  console.log(req.params)
  let sql = "select * from nanny where id = ?";
  let sqlArr = [req.params.id];
  const data = await dbconfig.sySqlConnect(sql, sqlArr);
  if (!data) return res.sendResult(null, 400, "获取保姆数据失败");
  console.log(data)
  return res.sendResult(data, 200, "获取保姆数据成功");
};