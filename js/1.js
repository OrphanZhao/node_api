const fs = require("fs");

/**
 * 写入文件时、文件没有时、会进行创建
 */
fs.writeFile("./ccc", "写入文件内容", (err, data) => {
  console.log(err);
});
