const fs = require("fs");

/**
 * 路径动态拼接问题
 */
fs.readFile("./score.txt", "utf8", (err, data) => console.log(err.message));
