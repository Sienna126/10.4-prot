# 个人作品集 · 投放手账

笔记本风格个人作品集与 Flowdesk 信息流投放助手。

- 作品集：`https://Sienna126.github.io/10.4-prot/`
- 投放手账：`https://Sienna126.github.io/10.4-prot/flowdesk/`

上述地址在启用 GitHub Pages 并完成发布后生效。

## 发布

仓库 Settings → Pages → Build and deployment：选择 Deploy from a branch，分支 `main`，目录 `/ (root)`，点击 Save。静态成品已包含在仓库，无需服务器或额外构建流程。

## 文件结构

- 根目录 HTML、CSS、JS 与 `assets/`：个人作品集，保留翻书动效及自定义鼠标样式。
- `flowdesk/`：可直接访问的投放手账成品。
- `source/flowdesk/`：React + Vite 源码及锁定的依赖。

## 修改小程序

```sh
cd source/flowdesk
pnpm install --frozen-lockfile
pnpm run build
```

构建结果输出到根目录 `flowdesk/`。提交源码和构建结果后，Pages 将发布更新。

投放手账保留指标计算、12 条素材模板、收藏和复盘生成/导出。收藏存储在当前浏览器的 localStorage，刷新后保留；换设备不共享，清除网站数据后丢失。原 Sites 网站的收藏不会自动迁移。复盘请及时导出 TXT。

照片、简历及作品集内容属于作品集作者，请勿未经授权转载。
