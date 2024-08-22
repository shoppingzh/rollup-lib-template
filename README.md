# 📦 rollup-lib-template

开箱即用的rollup库模板。

## 🚀 特性

| | 功能 | 目的 | 待办 |
| :--: | -- | -- | -- |
| √ | git工作流 | 检查、美化代码，校验提交日志，生成版本日志等 | |
| √ | 代码美化与校验 | 保证代码的一致性、可读性 | |
| √ | TypeScript支持 | 强类型化，提升代码健壮性 | |
| √ | 别名 | 更快编码 | |
| √ | 包大小监控 | 控制包的大小，避免产物过大 | |
| √ | babel | 输出兼容性更好的产物 | |
| √ | terser | 降低打包产物的大小 | |
| √ | CJS支持 | 支持通过 `require` 的方式引用模块 | |
| √ | 移除无用代码 | 降低打包产物的大小，提升运行时效率 | |
| √ | 环境变量 | 支持生成不同环境下的差异化产物 | 考虑代码中使用未配置的环境变量的情况 |
| | 生成 `*.d.ts` 声明文件 | 更好的代码提示 |  | 


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
- 删除 `src` / `__tests__` 目录下的文件，编写自己的代码

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
