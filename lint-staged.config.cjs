// // lint-staged.config.js
// // 可以自动修复
// module.exports = {
//   // 匹配所有 JS/TS/JSX/TSX 文件，并执行 ESLint 自动修复
//   '*.{js,jsx,ts,tsx}': [
//     'eslint --fix --max-warnings 0',
//     // 'git add', // 将修复后的变更重新暂存
//   ],
// }
//
//

const { ESLint } = require('eslint')
async function removeIgnoredFiles(files) {
  const eslint = new ESLint()
  const isIgnored = await Promise.all(
    files.map(file => eslint.isPathIgnored(file)),
  )
  const filteredFiles = files.filter((_, index) => !isIgnored[index])
  return filteredFiles.join(' ')
}

module.exports = {
  '*.{js,jsx,ts,tsx}': async (files) => {
    const filteredFiles = await removeIgnoredFiles(files)
    return [
      `eslint --fix --max-warnings 0 ${filteredFiles} --max-warning=0`,
      // 'git add', // 将修复后的变更重新暂存
    ]
  },
}
