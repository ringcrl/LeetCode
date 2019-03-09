 // 用户构建算法实现的 md 文件

const fs = require('fs');
const path = require('path');

const filePath = path.resolve(__dirname);
const distPath = path.resolve(__dirname, 'README.md');

let md = `本文件构建启发自 30-seconds-of-code，由 JS 文件打包生成 MD 文件

# LeetCode

另一个刷题战场：[CodeWars](https://github.com/ringcrl/CodeWars)

刷题插件：[vscode-leetcode](https://github.com/jdneo/vscode-leetcode)

docsify 阅读：[https://static.chenng.cn](https://static.chenng.cn/#/%E7%AE%97%E6%B3%95/LeetCode)

# 实时进度

![](https://static.chenng.cn/api/dynamic_image/leetcode)

# 已刷题目

`;

function writeCode(fileStats) {
  md += `## ${fileStats.filename}

\`\`\`js
${fs.readFileSync(fileStats.filedir)}
\`\`\`

`;
}

function writeTitle(dirStates) {
  md += `# ${dirStates}

`;
}

function readAllFiles(filePath, cb) {
  //根据文件路径读取文件，返回文件列表
  const files = fs.readdirSync(filePath);
  files.forEach((filename) => {
    const exclude = [
      '.lib',
      '.git',
      '.DS_Store',
      '.vscode',
      '.eslintrc.js',
      'helper.js',
      'package.json',
      'README.md',
    ];
    if (exclude.includes(filename)) {
      return;
    }
    // 获取当前文件的绝对路径
    const filedir = path.resolve(filePath, filename);

    // 根据文件路径获取文件信息，返回一个 fs.Stats 对象
    const stats = fs.statSync(filedir);
    const isFile = stats.isFile();
    const isDir = stats.isDirectory();
    if (isFile) {
      cb({
        filename,
        filedir,
      });
    }
    if (isDir) {
      writeTitle(filename);
      readAllFiles(filedir, cb); // 递归，如果是文件夹，就继续遍历该文件夹下面的文件
    }
  });
}

readAllFiles(filePath, writeCode);

fs.writeFileSync(distPath, md);
