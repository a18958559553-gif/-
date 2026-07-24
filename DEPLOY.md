# GitHub Pages 发布步骤

1. 在 GitHub 新建一个公开仓库，建议仓库名：`astra-bracelet`。
2. 将本文件夹中的所有文件上传到仓库根目录，注意保留 `.github/workflows/deploy-pages.yml` 和 `.nojekyll`。
3. 打开仓库 `Settings → Pages`，在 `Build and deployment → Source` 中选择 `GitHub Actions`。
4. 打开仓库 `Actions`，等待 `Deploy static site to GitHub Pages` 变为绿色。
5. 页面地址通常是：`https://你的用户名.github.io/astra-bracelet/`。

## 当前版本说明

- 静态前端演示版，不包含真实登录、支付、库存、订单后台与物流。
- 用户设计保存在当前浏览器的 LocalStorage 中。
- 支持手机浏览器访问，并可在支持 PWA 的浏览器中添加到桌面。
