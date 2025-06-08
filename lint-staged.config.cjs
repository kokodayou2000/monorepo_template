// lint-staged.config.js
// 可以自动修复
module.exports = {
  // 匹配所有 JS/TS/JSX/TSX 文件，并执行 ESLint 自动修复
  '*.{js,jsx,ts,tsx}': [
    'eslint --fix --max-warnings 0',
    // 'git add', // 将修复后的变更重新暂存
  ],
}
