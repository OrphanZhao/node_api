const fs = require("fs");

/**
 * 路径动态拼接问题
 */

fs.readFile(
  `${__dirname}/score.txt`,
  "utf8",
  (err) => err && console.log(err.message)
);

console.group(__dirname);
