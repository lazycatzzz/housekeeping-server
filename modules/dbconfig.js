// 引入MySQL模块
const mysql = require("mysql");
module.exports = {
  // 数据库配置
  config: {
    host: "localhost",
    post: "3306",
    user: "root",
    password: "root",
    database: "housekeeping",
  },
  // 连接数据库，以mysql连接池的方式
  // 连接池对象
  sqlConnect: function (sql, sqlArr, callBack) {
    let pool = mysql.createPool(this.config);
    // 开始连接
    pool.getConnection((err, conn) => {
      if (err) {
        console.log("连接失败");
        return;
      }
      // 事件驱动回调
      conn.query(sql, sqlArr, callBack);
      // 释放链接
      conn.release();
    });
  },
  sySqlConnect: function (sql, sqlArr) {
    return new Promise((resolve, reject) => {
      let pool = mysql.createPool(this.config);
      // 开始连接
      pool.getConnection((err, conn) => {
        if (err) {
          reject(err);
        }
        conn.query(sql, sqlArr, (err, data) => {
          if (err) reject(err);
          resolve(data);
        });
        // 释放链接
        conn.release();
      });
    })
      .then((data) => {
        return data;
      })
      .catch((err) => {
        console.log(err);
        return false;
      });
  },
};
