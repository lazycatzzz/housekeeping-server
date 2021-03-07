// 连接数据库
let dbconfig = require("../modules/dbconfig");

module.exports = async function (req, res) {
  console.log(req)
  // let sql = "select * from nanny where";
  // let sqlArr = [];
  // const data = await dbconfig.sySqlConnect(sql, sqlArr);
  // if (!data) return res.sendResult(null, 400, "获取test失败");
  // console.log(data)
  // return res.sendResult(data, 200, "获取test成功");
  return res.sendResult(null, 200, "获取test成功")
};
