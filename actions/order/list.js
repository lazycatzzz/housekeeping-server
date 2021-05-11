// 连接数据库
let dbconfig = require("../../modules/dbconfig");

module.exports = async function (req, res) {
  let sql = "select * from hkorder where uid = ?";
  let sqlArr = [req.params.uid];
  const data = await dbconfig.sySqlConnect(sql, sqlArr);
  if (!data) return res.sendResult(null, 200, "获取订单id列表失败");
  for (let i = 0; i < data.length; i++) {
    let tmp = `select avatar_img,name from nanny where id = ?`;
    let arr = [data[i].sid];
    const obj = await dbconfig.sySqlConnect(tmp, arr);
    data[i] = {...data[i], ...obj[0]}
  }

  sql = "select * from clorder where uid = ?";
  sqlArr = [req.params.uid];
  const cldata = await dbconfig.sySqlConnect(sql, sqlArr);
  if (!cldata) return res.sendResult(null, 200, "获取订单id列表失败");
  for (let i = 0; i < cldata.length; i++) {
    let tmp = `select avatar_img,name from clean where id = ?`;
    let arr = [cldata[i].sid];
    const obj = await dbconfig.sySqlConnect(tmp, arr);
    cldata[i] = {...cldata[i], ...obj[0]}
  }
  const finalData = [...data, ...cldata]
  return res.sendResult(finalData, 200, "获取订单成功");
};
