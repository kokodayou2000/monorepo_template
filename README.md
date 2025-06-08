1. 创建目录 package 等

pnpm add -w -D typescript ts-node @types/node

-w 表示在根目录下按照依赖
-D 表示 devDependencies

配置基本的 ts 配置

创建子项目的 package tsconfig.json

注意 导入根目录下的 tsconfig.option.json 文件

pnpm add "@monorepo/utils" --workspace

工程化工具
eslint prettier husky lint-staged commitlint commitizen

pnpm add -w -D eslint@latest
创建文件 然后添加数据
https://eslint.org/docs/latest/use/getting-started

pnpm add -w -D @typescript-eslint/parser @typescript-eslint/eslint-plugin
pnpm add -w -D eslint @antfu/eslint-config typescript @typescript-eslint/parser @typescript-eslint/eslint-plugin
eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-jsx-a11y

pnpm add --save-dev \
eslint \
@antfu/eslint-config \ # Antfu 的 ESLint 配置
typescript \ # 如果是 TS 项目
@typescript-eslint/parser \ # TS 解析器
@typescript-eslint/eslint-plugin \ # TS 规则
eslint-plugin-react \ # React 规则
eslint-plugin-react-hooks \ # React Hooks 规则
eslint-plugin-jsx-a11y # JSX 可访问性规则

当需要代码发生变化的时候，就执行代码样式检查的话
vscode

``` 
{
  "eslint.enable": true,
  "eslint.run": "onType", // 输入时实时检查
  "eslint.autoFixOnSave": true, // 保存时自动修复
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true // 保存时修复所有可修复问题
  },
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "typescript",
    "typescriptreact"
  ]
}
```

githook husky lint-staged

pnpm add -D -w husky

pnpm exec husky init

使用 hooks 来再代码提交前做样式检查
pnpm add -D -w lint-staged

pnpm exec lint-staged --config ./lint-staged.config.cjs

后期修改

"type": "module" 和 "type": "commonjs" 是 Node.js 项目的两种模块系统
不太一样，但是将 js 文件 修改成 cjs 文件能解决一些问题