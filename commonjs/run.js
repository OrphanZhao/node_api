const path = require("path");
const test = require(path.join(__dirname, "./test"));
const moment = require("moment");

/**
 * 模块的作用域
 * 模块只有导出才能被访问
 * 这种限制级别的访问叫作用域
 *
 * 1. 全局变量污染问题
 */

/**
 * module 对象
 * 每个.js 文件都有一个 存储模块的信息
 * module.exports = {} 向外导出对象、指向的对象
 */

/**
 * exports 对象
 * exports对象和module.exports指向同一位置、最终还是以moudle.exports为主
 * 重新复制对地址进行覆盖、存在两个对象内存地址不一样
 *
 * `使用误区`
 * 对象引用地址的问题
 */

console.log(test);

/**
 * commonjs 规范
 *
 * 1. 没个模块内部、module代表当前模块
 * 2. module.exports
 * 3. require
 */

/**
 * 思考
 * 打包工作是怎么做到、处理模块之间相互加载的关系的呢
 */
