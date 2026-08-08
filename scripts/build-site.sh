#!/bin/sh

# 构建统一静态入口；三个历史项目源码保存在 apps 中，入口资源单独发布以避免框架版本互相影响。
set -eu

# output_dir 存储 Netlify 最终发布目录。
output_dir="dist"

rm -rf "$output_dir"
mkdir -p "$output_dir"
cp -R site/. "$output_dir/"
