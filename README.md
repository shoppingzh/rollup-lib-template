# 📦 rollup-lib-template

开箱即用的rollup库模板。

## 🚀 特性

- [x] git工作流 (husky/commitlint/conventional-changelog)
- [x] 代码格式化与校验
- [x] TypeScript 支持
- [x] 单元测试
- [x] 别名
- [x] 包大小监控
- [x] babel
- [x] 代码混淆与最小化
- [ ] CommonJS 模块支持
- [x] 自动移除垃圾代码


## 🔨 使用

**下载项目**

```bash
git clone https://github.com/shoppingzh/rollup-lib-template.git
```

> 或者在 GitHub 中点击“Use this template”直接新建一个以此仓库为模板的新仓库。

**准备**

开始开发前，需要做如下准备：

- 修改 `package.json`，修改包相关信息
- 修改 `README.md`
- 删除 `src` `__tests__` 目录下的文件，编写自己的代码

**开发**

```bash
pnpm dev
# yarn dev
# npm run dev
```

> 与构建不同，此脚本会监听文件变化，实时构建。

**构建打包**

```bash
pnpm build
# yarn build
# npm run build
```

**运行单元测试**

```bash
pnpm test
# yarn test
# npm run test
```
