# ROVON Global 新站后续规划

> 用于新对话窗口快速恢复上下文。当前项目已完成：GitHub 推送、Vercel 部署、Hostinger 域名解析、正式域名 `https://rovonglobal.com` 可访问。下一阶段重点不再是反复调整外观，而是让网站真正具备客户转化能力。

---

## 0. 当前项目状态

### 已完成

- ROVON Global 新版独立站已经上线。
- 技术栈：Next.js + TypeScript + Tailwind CSS。
- 代码仓库：`https://github.com/Congxx108/rovon-global-website.git`
- 正式域名：`https://rovonglobal.com`
- `www.rovonglobal.com` 已设置为跳转到 `rovonglobal.com`。
- Hostinger DNS 已指向 Vercel。
- Vercel Production 部署可用。
- 手机端打开速度和排版目前没有明显问题。
- 网站视觉已经从蓝橙企业模板感，调整为 warm neutral / clay / stone / charcoal 的国际 B2B 品牌官网风格。

### 当前核心定位

ROVON Global 不应被定位为 Mixed Handbag / Mixed School Bag 小批发站，而应定位为：

```text
China-based professional bag manufacturer
Global wholesale bag supplier
OEM/ODM custom bag partner
Factory-backed multi-category bag supply
```

主推类目：

- Travel Bags
- Men’s Bags
- Women’s Backpacks
- Chest Bags
- Waist Bags
- Crossbody Bags
- OEM/ODM Custom Bags

Ready Stock / Mixed Wholesale 只作为补充业务存在，不作为首页首屏、主导航、品牌口号或主 SEO 心智。

---

## 1. 下一阶段总目标

下一阶段要从“网站已经上线”进入“网站真正承接客户并促进询盘”的阶段。

核心方向：

```text
专业工厂心智强化
+
Cason 真人商业 IP 承接
+
真实内容替换
+
询盘转化路径优化
+
广告流量闭环
```

网站需要同时建立两种信任：

```text
ROVON Global = 专业工厂型包袋供应商
Cason = 客户已经在视频里见过、可以直接沟通的真实商业联系人
```

---

## 2. 关键业务事实：Facebook / TikTok 真人视频是主要流量入口

ROVON Global 网站不是纯 SEO 官网。用户的重要流量来源是：

```text
Cason 在 Facebook / TikTok 上真人出镜拍摄的视频
↓
客户点击进入 ROVON Global 官网
↓
客户确认这不是普通个人卖货号，而是背后有工厂和供应链能力
↓
客户通过 WhatsApp 直接联系 Cason
```

因此，网站必须承接这个路径：

```text
Watch Cason’s video
→ Visit ROVON Global
→ Confirm factory-backed supply
→ Contact Cason on WhatsApp
```

Cason 个人商业 IP 很重要，但比例要把握好：

- ROVON Global 是主品牌和专业工厂心智。
- Cason 是真实联系人、信任入口、WhatsApp 沟通入口。
- Cason 不替代公司品牌。
- 不要虚构 Cason 的身份、履历、职位、工厂所有权或经验年限。
- 不要把网站做成个人博客。

---

## 3. 推荐执行顺序

建议按下面 8 个阶段推进。

```text
第 1 步：替换新版 AGENT.md
第 2 步：让 Codex 强化“工厂心智 + Cason 视频流量承接”
第 3 步：准备 Cason 头像、视频截图、产品图、工厂/仓库/包装图
第 4 步：替换真实图片
第 5 步：做 Catalog / WhatsApp 询盘承接页面
第 6 步：安装 Meta Pixel、TikTok Pixel、GA4 等基础追踪
第 7 步：内容稳定后做多语言
第 8 步：产品数据多了再做 Google Sheets / Supabase 后台
```

当前最应该做的是 **第 1 步和第 2 步**。

---

# 阶段 1：替换新版 AGENT.md，并让 Codex 按新定位重构内容

新版 `AGENT.md` 已经加入一个重要业务事实：

> ROVON Global 的主要流量入口之一，是 Cason 在 Facebook 和 TikTok 上真人出镜拍摄的视频内容。

所以网站不仅是 B2B 工厂官网，也是承接 Cason 个人商业 IP 信任的转化页面。

## 给 Codex 的指令

```text
请先阅读并严格遵守新版 AGENT.md。新版 AGENT.md 已经加入一个重要业务事实：ROVON Global 的主要流量入口之一，是 Cason 在 Facebook 和 TikTok 上真人出镜拍摄的视频内容。因此网站不仅是 B2B 工厂官网，也是承接 Cason 个人商业 IP 信任的转化页面。

现在请基于新版 AGENT.md，检查并优化全站内容表达。

核心目标：
1. 强化 ROVON Global 是专业工厂型包袋制造与批发供应商。
2. 强化 Cason 是客户在 Facebook / TikTok 视频中看到后，可以直接联系的真实商业联系人。
3. 让客户形成路径认知：Watch Cason’s video → Visit ROVON Global → Confirm factory-backed supply → Contact Cason on WhatsApp。
4. Cason 个人 IP 要增强信任和转化，但不能替代 ROVON Global 主品牌。
5. 不要虚构 Cason 的身份、履历、职位、年限或工厂所有权。
6. 不要大改视觉系统，不要正式启用多语言，不要引入后台，不要新增重依赖。

请重点修改：
- 首页 Hero
- 首页 Cason 信任模块
- About 页面
- Contact 页面
- Manufacturing 页面
- Wholesale Solutions 页面
- 产品分类页
- FAQ 页面
- 全站 CTA 文案

完成后运行：
npm run typecheck
npm run lint
npm run build

通过后提交并推送：
git add .
git commit -m "Strengthen factory positioning and Cason video-to-website trust flow"
git push

最后请汇报修改了哪些页面，以及 Cason 个人商业 IP 是如何被自然加入网站的。
```

---

# 阶段 2：首页重构成“视频流量承接页”

首页不应该只是普通官网首页，而应该是：

```text
广告流量承接页 + 工厂官网首页
```

首页需要让客户一眼明白：

```text
我刚刚在 Facebook / TikTok 看到的 Cason，
确实代表的是一家做包袋制造和批发供应的公司，
不是单纯拍视频卖货的人。
```

## 首页推荐结构

```text
Hero：
Factory-Backed Bag Supply for Global Wholesale Buyers
Contact Cason directly for catalogs, wholesale inquiries, and OEM/ODM projects.

↓
Trust Bar：
Factory-backed supply / Multi-category bags / OEM/ODM / WhatsApp communication

↓
Cason 模块：
Talk to Cason After Watching Our Videos
说明客户可以通过 WhatsApp 直接延续视频里的沟通。

↓
Core Product Categories：
Travel Bags / Men’s Bags / Women’s Backpacks / Chest Bags / Waist Bags / Crossbody Bags

↓
Manufacturing Strength：
材料、打样、车缝、质检、包装、出口支持

↓
Wholesale Solutions：
Importers / Distributors / Trading Companies / Brand Buyers

↓
Inquiry Process：
看到视频 → 发 WhatsApp → 获取目录 → 确认产品需求 → 报价/打样/生产

↓
Final CTA：
Contact Cason on WhatsApp
```

这个阶段主要是文案和信息顺序，不需要新增复杂功能。

---

# 阶段 3：准备 Cason 真实素材

如果网站完全没有 Cason 真人元素，Facebook / TikTok 过来的客户会产生断层：

```text
视频里是 Cason，网站里却完全像普通公司模板。
```

建议准备以下素材。

## 1. Cason 个人头像

要求：

```text
半身照或上半身照
清晰
自然
商务但不要太严肃
背景可以是办公室、仓库、产品区、工厂附近
不要过度精修
```

用途：

```text
首页 Cason 模块
About 页面
Contact 页面
WhatsApp CTA 区域
```

## 2. Cason 真人视频截图

从 Facebook / TikTok 视频中截 2-4 张画面：

```text
Cason 在介绍包
Cason 在仓库/产品旁边
Cason 在展示产品细节
Cason 在讲解批发或 OEM
```

用途：

```text
首页 “Watch Cason, then contact directly” 模块
About Cason 模块
Contact 页面
```

## 3. 真实产品环境图

重点是真实，不一定需要特别专业：

```text
旅行包堆放图
男包/胸包/腰包展示图
产品细节图
包装图
仓库图
打包发货图
```

## 4. 工厂 / 供应链相关图

如果暂时没有特别强的工厂图，可以先准备：

```text
生产/车缝局部
材料和五金
包装台
纸箱/出货
仓库货架
样品展示区
```

注意：真实但普通，比假大空更可信。不要为了“像大工厂”去用虚假图。

---

# 阶段 4：把图片替换进网站

素材准备好后，让 Codex 做“图片替换系统”。

第一批建议先替换：

```text
首页 Hero 图：1-3 张
Cason 头像：1 张
Cason 视频截图：2 张
产品分类图：6 张
Manufacturing 图：2-3 张
Contact 页面图：1 张
```

## 图片命名建议

```text
/public/images/cason/cason-profile.webp
/public/images/cason/cason-video-whatsapp.webp
/public/images/cason/cason-product-explaining.webp

/public/images/hero/rovon-hero-products.webp

/public/images/products/travel-bags/travel-bag-category.webp
/public/images/products/mens-bags/mens-bag-category.webp
/public/images/products/womens-backpacks/women-backpack-category.webp
/public/images/products/chest-bags/chest-bag-category.webp
/public/images/products/waist-bags/waist-bag-category.webp
/public/images/products/crossbody-bags/crossbody-bag-category.webp

/public/images/factory/packing-support.webp
/public/images/factory/material-selection.webp
/public/images/factory/quality-check.webp
```

## 图片大小控制

```text
首页 Hero：200KB - 400KB
Cason 头像：80KB - 150KB
产品分类图：100KB - 250KB
普通内容图：100KB - 300KB
```

---

# 阶段 5：制作 Catalog / 询盘承接功能

网站 CTA 中有：

```text
Get Latest Catalog
Contact Cason on WhatsApp
Request Wholesale Quote
```

这些按钮需要更强转化。

## 简单版

点击后打开 WhatsApp，并带预填消息。

通用消息：

```text
Hello Cason, I watched your video and visited ROVON Global website. Please send me the latest bag catalog and wholesale options.
```

Travel Bags 页面：

```text
Hello Cason, I am interested in your travel bags. Please send me the latest catalog and wholesale quotation options.
```

OEM/ODM 页面：

```text
Hello Cason, I would like to discuss an OEM/ODM custom bag project. Please help me understand the customization process.
```

## 进阶版

新增 `/catalog` 页面：

```text
Get Latest Bag Catalog
Tell Cason what you need:
- Product category
- Quantity range
- Destination market
- Logo customization
- Material preference
- WhatsApp number
```

第一阶段不用接数据库，只做：

```text
表单生成 WhatsApp 预填消息
点击按钮跳转 WhatsApp
```

这个阶段非常适合视频流量，因为很多广告过来的客户需求不清晰，表单可以帮他们整理信息。

---

# 阶段 6：安装基础数据追踪

网站内容和图片基本稳定后，接入统计工具。

建议至少接入：

```text
Google Search Console
Google Analytics 4
Meta Pixel
TikTok Pixel
```

但要遵守性能优先原则，脚本要延迟加载。

## 广告流量最重要的追踪事件

```text
ViewContent：首页/产品页访问
Contact：点击 WhatsApp
Lead：点击 Get Latest Catalog
CustomEvent：点击具体品类询盘
```

尤其要追踪：

```text
Meta Pixel
TikTok Pixel
WhatsApp 点击事件
Catalog 点击事件
Contact Cason 点击事件
```

后续 Facebook / TikTok 广告优化时，可以把“点击 WhatsApp / 获取目录”作为更高质量信号。

---

# 阶段 7：多语言功能

多语言不要现在立刻做完整版本。

原因：英文内容、图片、产品分类、FAQ 都还会调整。现在翻译会导致后续频繁返工。

## 多语言开发条件

建议等以下内容稳定后再做：

```text
真实图片替换完成
+
首页和产品分类内容稳定
+
FAQ 内容稳定
+
Catalog / WhatsApp 转化路径稳定
```

## 多语言第一批建议

按市场优先级：

```text
English：默认
French：非洲法语区
Arabic：中东
Spanish：拉美
Portuguese：巴西、安哥拉、莫桑比克
```

如果资源有限，先做：

```text
English + French + Arabic
```

## 技术路线

建议使用：

```text
next-intl
```

路由结构：

```text
/       默认英文
/fr     法语
/ar     阿拉伯语
/es     西班牙语
/pt     葡萄牙语
```

阿拉伯语需要单独检查 RTL：

```text
dir="rtl"
```

SEO 需要处理：

```text
hreflang
localized sitemap
localized metadata
canonical
```

所以正式多语言不是简单做一个语言下拉按钮，建议单独开一轮任务。

---

# 阶段 8：后台 / 产品管理系统

这一步更靠后。

目前第一阶段用本地 `products.ts` 管理产品足够。等真实产品图片多起来、助理也需要维护网站时，再考虑后台。

建议顺序：

```text
先 Google Sheets 轻后台
后 Supabase 后台
```

原因：

```text
Google Sheets 更轻，适合用户和助理维护产品分类、图片路径、标题、描述、WhatsApp 文案。
Supabase 更强，但开发成本更高。
```

后台适合管理：

```text
产品分类
产品图片
产品标题
产品描述
适合市场
适合买家
是否 Featured
WhatsApp 预填消息
FAQ
Catalog 下载链接
```

不要现在立刻做后台，否则项目会变重。

---

## 新对话启动建议

开启新对话时，可以这样说：

```text
请读取我上传的 ROVON Global 新站后续规划.md 和新版 AGENT.md。当前网站已经部署到 https://rovonglobal.com，GitHub 仓库是 https://github.com/Congxx108/rovon-global-website.git。下一步我要先做“阶段 1 和阶段 2”：替换新版 AGENT.md，并让 Codex 强化专业工厂心智和 Cason 真人视频流量承接。请根据规划给我第一条发给 Codex 的具体指令。
```

---

## 当前最重要的原则

1. 工厂心智是主线。
2. Cason 个人 IP 是信任承接和转化入口。
3. 网站要承接 Facebook / TikTok 真人视频流量。
4. 不虚构 Cason 身份和履历。
5. 不虚构工厂规模、年限、产能、员工数。
6. 不把 Ready Stock / Mixed Wholesale 做成主业务。
7. 不把 Mixed Handbag / Mixed School Bag 做成主定位。
8. 不做零售电商逻辑，不要购物车、价格、Add to Cart。
9. 不牺牲打开速度和移动端体验。
10. 多语言等英文主站内容稳定后再正式做。
