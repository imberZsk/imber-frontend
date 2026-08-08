#!/bin/sh

# 构建统一静态站点，把首页和三个子应用发布到同一个 dist 目录。
set -eu

# output_dir 存储 Netlify 最终发布目录。
output_dir="dist"
# animation_output_dir 存储动画应用的 Next.js 静态产物。
animation_output_dir="apps/animation/out"
# three_output_dir 存储 3D 应用的 Next.js 静态产物。
three_output_dir="apps/3d/out"
# docs_output_dir 存储文档应用的 VitePress 静态产物。
docs_output_dir="apps/docs/.vitepress/dist"
# npm_config_registry 指定本地和 Netlify 都可访问的公共依赖源。
export npm_config_registry="https://registry.npmjs.org/"
# HUSKY 禁止子应用在生产依赖安装时初始化独立仓库钩子。
export HUSKY="0"

rm -rf "$output_dir"
mkdir -p "$output_dir"
cp -R site/. "$output_dir/"
# 统一入口复用动画项目图标，避免浏览器请求根 favicon 时返回 404。
cp apps/animation/src/app/favicon.ico "$output_dir/favicon.ico"

pnpm --dir apps/animation install --frozen-lockfile
pnpm --dir apps/animation run build
pnpm --dir apps/3d install --frozen-lockfile
pnpm --dir apps/3d run build
pnpm --dir apps/docs install --frozen-lockfile
pnpm --dir apps/docs run build

mkdir -p "$output_dir/animation" "$output_dir/3d" "$output_dir/docs"
cp -R "$animation_output_dir/." "$output_dir/animation/"
cp -R "$three_output_dir/." "$output_dir/3d/"
cp -R "$docs_output_dir/." "$output_dir/docs/"

# Next.js 的 basePath 首页预取使用同级 RSC 文件，补齐合并目录后的静态映射。
cp "$animation_output_dir/index.txt" "$output_dir/animation.txt"
cp "$three_output_dir/index.txt" "$output_dir/3d.txt"
