// 连接数据库
let dbconfig = require("../../modules/dbconfig");

module.exports = async function (req, res) {
  let sql =
    "insert into follow (uid,title,is_reply,img,status) value (?,?,?,?,?)";
  let sqlArr = [
    req.body.uid,
    req.body.title,
    req.body.is_reply,
    req.body.img,
    req.body.status,
  ];
  const data = await dbconfig.sySqlConnect(sql, sqlArr);
  if (!data) return res.sendResult(null, 400, "生成订单失败");
  return res.sendResult(data, 200, "生成订单成功");
};
