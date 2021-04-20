// 连接数据库
let dbconfig = require("../../modules/dbconfig");

module.exports = async function (req, res) {
  let sql = "select * from hkorder where uid = ?";
  let sqlArr = [req.params.uid];
  const data = await dbconfig.sySqlConnect(sql, sqlArr);
  if (!data) return res.sendResult(null, 200, "获取订单id列表失败");
  if (data.length === 0) return res.sendResult(null, 200, "订单为空");
  for (let i = 0; i < data.length; i++) {
    if (data[i].is_reply !== 0) continue;
    let tmp = `select avatar_img,name from nanny where id = ?`;
    let arr = [data[i].sid];
    const obj = await dbconfig.sySqlConnect(tmp, arr);
    data[i] = {...data[i], ...obj[0]}
  }
  return res.sendResult(data, 200, "获取订单成功");
};
