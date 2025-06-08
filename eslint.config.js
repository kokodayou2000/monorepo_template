// eslint.config.js
import antfu from '@antfu/eslint-config'

export default antfu({
  // 启用 React 支持
  react: true,

  // 启用 TypeScript 支持
  typescript: true,

  // 自定义规则
  rules: {
    'no-console': 'warn',
    'react/react-in-jsx-scope': 'off', // React 17+ 不需要手动引入 React
  },
  ignores: [
    'node_modules',
    '*.md',
    '*.json',
    'pnpm-workspace.yaml',
  ],
})
