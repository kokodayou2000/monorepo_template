
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




pnpm add -w -D  @typescript-eslint/parser  @typescript-eslint/eslint-plugin
pnpm add -w -D  eslint @antfu/eslint-config typescript  @typescript-eslint/parser  @typescript-eslint/eslint-plugin eslint-plugin-react eslint-plugin-react-hooks  eslint-plugin-jsx-a11y     

pnpm add --save-dev \
  eslint \
  @antfu/eslint-config \  # Antfu 的 ESLint 配置
  typescript \           # 如果是 TS 项目
  @typescript-eslint/parser \  # TS 解析器
  @typescript-eslint/eslint-plugin \  # TS 规则
  eslint-plugin-react \        # React 规则
  eslint-plugin-react-hooks \  # React Hooks 规则
  eslint-plugin-jsx-a11y       # JSX 可访问性规则