// 连接数据库
let dbconfig = require("../../modules/dbconfig");
let timeformat = require('../../modules/timeformat');

module.exports = async function (req, res) {
  let time = timeformat()
  let sql =
    "insert into hkorder (uid,sid,title,is_reply,name,mobile,salary,createdTime,arrangeTime,address,status,content) value (?,?,?,?,?,?,?,?,?,?,?,?)";
  let sqlArr = [
    req.body.uid,
    req.body.sid,
    req.body.title,
    req.body.is_reply,
    req.body.name,
    req.body.mobile,
    req.body.salary,
    time,
    req.body.date,
    req.body.address,
    req.body.status,
    req.body.content
  ];
  const data = await dbconfig.sySqlConnect(sql, sqlArr);
  if (!data) return res.sendResult(null, 400, "生成订单失败");
  return res.sendResult(data, 200, "生成订单成功");
};
