// 连接数据库
let dbconfig = require("../../modules/dbconfig");

module.exports = async function (req, res) {
  // 获取候选id
  let sql = "select * from follow where uid = ?";
  let sqlArr = [req.params.uid];
  const data = await dbconfig.sySqlConnect(sql, sqlArr);
  if (!data) return res.sendResult(null, 400, "获取候选id失败");
  if (data.length <= 0) return res.sendResult(null, 200, "没有候选");
  // 根据id多值查找
  const sidArr = [];
  for (let i = 0; i < data.length; i++) {
    sidArr.push(data[i].sid);
  }
  const idStr = sidArr.join(",");
  sql =
    `select id,name,age,avatar_img,tags,is_normal,is_older,is_child,is_excellent,location,intention from nanny where id in (${idStr})`;
  sqlArr = [];
  const list = await dbconfig.sySqlConnect(sql, sqlArr);
  console.log(list);
  if (!list) return res.sendResult(null, 400, "获取候选列表失败");
  return res.sendResult(list, 200, "获取候选列表成功");
};
