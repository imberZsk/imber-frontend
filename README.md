# Imber Frontend

Web 动画、Web 3D 场景与前端技术知识库的统一站点。

## 项目结构

- `site/`：统一产品入口和 Netlify 发布页面。
- `apps/animation/`：GSAP 与 Framer Motion 动画示例。
- `apps/3d/`：Three.js 交互场景与 3D 示例。
- `apps/docs/`：VitePress 技术文档与文章资源。

## 统一入口

```bash
pnpm run build
```

构建产物输出到 `dist/`。

## 子项目开发

进入对应 `apps/*` 目录，按子项目 README 和 `package.json` 中的命令运行。

## License

[MIT](./LICENSE)
