# 星石手作｜手机网页原型

这是一个无需构建工具、可直接运行的移动端 DIY 手串网页原型，包含：

- 手机端首页与情绪主题入口
- 水晶、星座、塔罗、扩香珠、配件材料库
- 点击加珠、双击移除、沿圆环拖动重排
- 手围尺寸与价格实时计算
- AI 主题配方、灵感模板、成品预览
- 本地保存设计、恢复编辑、导出设计卡
- PWA 配置，可添加到手机桌面并离线打开

## 本地运行

请不要直接双击 `index.html` 测试 PWA。可在项目目录运行：

```bash
python -m http.server 8080
```

然后访问：

```text
http://localhost:8080
```

手机与电脑处于同一局域网时，可用手机访问电脑局域网 IP，例如：

```text
http://192.168.1.10:8080
```

## 部署

整个文件夹可直接部署到 GitHub Pages、Vercel、Netlify 或任意静态服务器，不需要数据库。

当前“订单”只会保存在浏览器 LocalStorage 中。上线真实业务时，需要接入用户登录、商品库存、订单、支付、后台管理和物流接口。

## GitHub Pages 自动发布

仓库已包含 `.github/workflows/deploy-pages.yml`。上传到 GitHub 后，在 `Settings → Pages` 将 Source 设为 `GitHub Actions`，之后每次推送到 `main` 都会自动发布。
