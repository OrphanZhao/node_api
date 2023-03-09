const fs = require("fs");
const path = require("path");

// fs.writeFile 路径中有不存在的目录不会创建

const styleReg = /<style>[\s\S]*<\/style>/;
const scriptReg = /<script>[\s\S]*<\/script>/;

fs.readFile(path.join(__dirname, "./index.html"), "utf-8", (err, data) => {
  if (!err) {
    resolveCss(data);
    resolveJs(data);
    resolveHtml(data);
  }
});

function resolveCss(str) {
  const result = styleReg.exec(str);
  const content = result[0].replace("<style>", "").replace("</style>", "");
  fs.writeFile(
    path.join(__dirname, "./assets/index.css"),
    content,
    "utf-8",
    () => {}
  );
}

function resolveJs(str) {
  const result = scriptReg.exec(str);
  const content = result[0].replace("<script>", "").replace("</script>", "");
  fs.writeFile(
    path.join(__dirname, "./assets/index.js"),
    content,
    "utf-8",
    () => {}
  );
}

function resolveHtml(str) {
  const content = str
    .replace(styleReg, '<link rel="stylesheet" href="./index.css" />')
    .replace(scriptReg, '<script src="./index.js"></script>');
  fs.writeFile(
    path.join(__dirname, "./assets/new.html"),
    content,
    "utf-8",
    (err) => {
      console.log(err);
    }
  );
  console.log(path.join(__dirname, "./assets/new.html"));
}
