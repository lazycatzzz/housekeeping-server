// 连接数据库
let dbconfig = require("../../modules/dbconfig");
let timeformat = require('../../modules/timeformat');

module.exports = async function (req, res) {
  let time = timeformat()
  let sql =
    "insert into clorder (uid,sid,title,is_reply,name,mobile,cost,createdTime,arrangeTime,address,status,longer) value (?,?,?,?,?,?,?,?,?,?,?,?)";
  let sqlArr = [
    req.body.uid,
    req.body.sid,
    req.body.title,
    req.body.is_reply,
    req.body.name,
    req.body.mobile,
    req.body.cost,
    time,
    req.body.date,
    req.body.address,
    req.body.status,
    req.body.longer
  ];
  const data = await dbconfig.sySqlConnect(sql, sqlArr);
  if (!data) return res.sendResult(null, 400, "生成订单失败");
  return res.sendResult(data, 200, "生成订单成功");
};
