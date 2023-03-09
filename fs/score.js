const fs = require("fs");

fs.readFile("./score.txt", "utf8", (err, data) => {
  !err &&
    fs.writeFile(
      "./score_ok.txt",
      data
        .split(" ")
        .map((v) => v.replace("=", ": "))
        .join("\n"),
      () => {}
    );
});
