#!/usr/bin/env node
const fs = require("fs");
const path = require("path");

// copy文件夹文件到当前目录
const copyDir = (dirName) => {
  const dirPath = `./${dirName}`;
  const dir = fs.readdirSync(dirPath, "utf-8");
  dir.forEach((file) => {
    const data = fs.readFileSync(path.resolve(dirPath, file), "utf-8");
    fs.writeFileSync(path.resolve(process.cwd(), file), data);
  });
};

try {
  const args = process.argv;
  if (args.length === 2) {
    console.log("单页应用: vue-ci nginx");
    console.log("nestjs应用: vue-ci nestjs");
  } else if (args.length === 3) {
    const param = args[2];
    if (param === "nginx" || param === "nestjs") {
      copyDir(param);
    } else if (param === "-v") {
      console.log("v1.0.0");
    } else {
      console.log("无效指令");
    }
  }
} catch (e) {
  console.error(e);
}
