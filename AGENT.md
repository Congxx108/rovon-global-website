# AGENT.md — ROVON Global 外贸独立站项目说明

> 本文件用于放在 ROVON Global 新版外贸独立站项目根目录，供 Codex / 开发代理 / 后续接手开发者快速理解项目定位、业务逻辑、技术路线、视觉规范、内容策略和开发约束。

---

## 1. 项目总目标

本项目是为 **ROVON Global** 重新制作一个专业、完整、美观、快速打开的 B2B 外贸独立站。

旧网站基于 WordPress + Hostinger，存在模板感强、加载慢、产品体系不清晰、工厂实力展示不足、插件残留、转化路径不够明确等问题。新站不应只是“换一个更漂亮的模板”，而应作为一次品牌定位和业务结构升级。

新版网站的目标是把 ROVON Global 从过去偏“小 B 端现货混批”的形象，升级为：

> 中国包袋制造工厂 + 全球综合批发供应商 + OEM/ODM 合作伙伴。

网站应服务全球进口商、批发商、区域分销商、贸易公司、品牌客户和专业采购商，而不是只服务零散小客户。

同时，本项目必须承接用户在 **Facebook / TikTok 真人出镜视频** 中建立起来的信任。很多客户会先通过 Cason 的真人视频认识业务，再进入网站验证 ROVON Global 的公司实力、产品体系和工厂能力。因此，新站不仅要像一个专业工厂官网，也要让客户明确知道：**Cason 是他们可以直接沟通的真实业务联系人**。Cason 的个人商业 IP 是转化信任入口，ROVON Global 是主品牌和工厂型供应商心智。

---

## 2. 核心品牌定位

### 2.1 推荐英文定位

```text
ROVON Global is a China-based bag manufacturer and wholesale supplier,
serving global importers, distributors, wholesalers, trading companies,
and brand buyers with factory-backed bag production, wholesale supply,
and OEM/ODM customization solutions.
```

### 2.2 中文理解

ROVON Global 是一家中国包袋制造与批发供应商，面向全球客户提供多品类包袋生产、批发供货、现货补货和 OEM/ODM 定制服务。

网站必须强化以下心智：

1. 真正有工厂和供应链能力
2. 不是小型混款批发商
3. 具备多品类包袋生产能力
4. 能服务全球市场
5. 能承接批发、分销、贸易公司、品牌客户需求
6. 能提供 OEM/ODM 定制、打样、生产、质检、包装、出口支持
7. Ready Stock / Mixed Wholesale 只是补充能力，不是主定位


### 2.3 Cason 个人商业 IP 定位

Cason 的个人商业 IP 是本项目的重要转化资产。

用户的网站流量入口主要来自 **Facebook 和 TikTok 真人出镜视频**。潜在客户往往不是先通过 Google 搜索认识 ROVON Global，而是先看到 Cason 的真人讲解、产品展示、市场沟通或批发内容，然后进入官网进一步确认：

1. 这个人是否真实可信；
2. 背后是否有清晰的公司和供应链；
3. 是否具备专业包袋制造与批发能力；
4. 是否可以直接通过 WhatsApp 沟通；
5. 是否适合进一步索要目录、报价或讨论 OEM/ODM 项目。

因此，网站必须把 Cason 作为“真实商业联系人”和“信任承接入口”来表达。

#### 正确关系

```text
ROVON Global = 主品牌 / 工厂型供应商心智 / 全球 B2B 合作主体
Cason = 真人出镜流量入口 / 直接沟通联系人 / 信任增强点 / WhatsApp 转化入口
```

Cason 不应替代 ROVON Global 的公司品牌，也不应让网站变成个人博客。正确做法是：

- 首页首屏、CTA、About、Contact、FAQ 中自然出现 Cason；
- 用 “Contact Cason on WhatsApp” 替代泛泛的 “Contact Us”；
- 让客户知道他们不是在联系一个匿名表单，而是在联系一个真人业务负责人；
- 强调 Cason 可以帮助客户获取目录、确认产品方向、沟通材料/Logo/数量/包装/交期等需求；
- 让 Facebook / TikTok 视频里的 Cason 形象与官网里的 Cason 联系入口保持一致。

#### 推荐英文表达

```text
Talk directly with Cason about your bag sourcing plan.
```

```text
Cason is your direct contact at ROVON Global for wholesale bag sourcing, catalog requests, OEM/ODM discussions, and product requirement follow-up.
```

```text
If you found ROVON Global through Facebook or TikTok, you can contact Cason directly on WhatsApp to discuss your target categories, market, quantity, and customization needs.
```

```text
Work with a real contact, not a generic inquiry form.
```

#### 可以展示 Cason 的位置

1. 首页 Hero 次 CTA：Contact Cason on WhatsApp
2. 首页中部信任模块：Work Directly With Cason
3. About 页面：Meet Cason, Your Direct Contact at ROVON Global
4. Contact 页面：Contact Cason for Bag Sourcing & OEM/ODM Inquiries
5. FAQ：Can I talk directly with Cason on WhatsApp?
6. Footer 联系方式：Cason / WhatsApp / Email
7. 产品分类页 CTA：Ask Cason for [category] catalog
8. OEM/ODM 页面 CTA：Discuss Your Custom Bag Project With Cason
9. Facebook / TikTok 来访承接模块：Found us on Facebook or TikTok? Talk to Cason directly.

#### Cason 内容边界

不允许虚构 Cason 的身份、头衔或履历。除非用户明确提供，否则不要写：

- founder
- CEO
- factory owner
- 10+ years experience
- award-winning
- famous influencer
- verified expert
- any fake biography

可以写：

- direct contact
- your contact at ROVON Global
- helps global buyers communicate efficiently
- supports catalog requests and sourcing discussion
- available for WhatsApp communication
- appears in ROVON Global’s Facebook / TikTok product videos

#### 视频与真人素材策略

由于 Cason 的流量来自 Facebook / TikTok 真人出镜视频，后续可以逐步把真实素材用于网站：

- 使用 Cason 真人照片作为 About / Contact / CTA 模块素材；
- 使用视频截图作为轻量图片，不直接加载大视频；
- 如果需要展示视频，优先使用点击播放或外链，不在首页首屏自动播放；
- 不使用虚假的 AI 人像冒充 Cason；
- 不使用与 Cason 本人不一致的图库人物图；
- 视频和图片必须压缩，不能牺牲打开速度。

#### 战略判断

网站的信任链路应是：

```text
Facebook / TikTok 真人出镜视频
→ 客户认识 Cason
→ 进入 ROVON Global 官网验证专业性
→ 看到工厂型供应商定位和产品体系
→ 通过 WhatsApp 联系 Cason
→ 获取目录、报价、OEM/ODM 沟通
```

所以后续所有页面优化都应同时服务两个目标：

```text
强化 ROVON Global 的专业工厂心智
+
强化 Cason 作为真实可信沟通入口的个人商业 IP
```

---

## 3. 非常重要的产品定位修正

### 3.1 主推工厂生产类目

当前项目的主推工厂生产类目应以以下产品为核心：

1. Travel Bags / 旅行包
2. Men’s Bags / 男包
3. Women’s Backpacks / 女士背包
4. Chest Bags / 胸包
5. Waist Bags / 腰包
6. Crossbody Bags / 斜挎包，可与男包、胸包、腰包形成关联
7. Outdoor / Sports / Daily Bags / 户外、运动、日用包类，可视产品实际情况扩展
8. OEM / ODM Custom Bags / 定制包袋

这些类目应作为网站的主产品体系、主导航产品分类、首页产品展示重点和 SEO 关键词重点。

### 3.2 Hand Bag 和 School Bag 的处理方式

Hand Bag 和 School Bag 不应作为 ROVON Global 新站的主工厂生产心智。

原因：

- Mixed Handbag 和 Mixed School Bag 更偏小 B 端现货混批业务；
- 专业买家通常不会把 “Mixed Handbag / Mixed School Bag” 作为严肃采购关键词；
- 如果网站主视觉和主导航过度突出 Mixed 产品，会削弱“实力工厂”和“综合供应商”的形象；
- 新站的目标是向更专业、更大体量、更全球化的客户升级，而不是被旧业务限制。

因此：

```text
Hand Bag 和 School Bag 只作为 Ready Stock / Mixed Wholesale 补充销售内容存在。
```

它们可以出现在：

- Ready Stock 页面
- Mixed Wholesale 页面
- 产品页底部的补充模块
- Catalog / WhatsApp 询盘内容中
- 针对小 B 客户或非洲市场的补充说明中

但不应出现在：

- 首页首屏主标题
- 品牌核心定位
- 主导航一级产品心智
- “主要生产类目”模块
- Manufacturing 能力核心说明

### 3.3 硬规则

```text
Mixed products are a tactical sales channel, not the strategic brand positioning.
```

中文理解：

> Mixed 产品是战术性销售渠道，不是战略性品牌定位。

---

## 4. 新站应建立的业务结构

新版网站应围绕三条业务线组织。

### 4.1 Manufacturing — 工厂生产能力

面向专业买家、品牌客户、贸易公司和分销商。

重点表达：

- 工厂生产
- 多品类包袋制造
- 打样能力
- 材料选择
- 五金配件
- Logo 工艺
- 生产流程
- 质检流程
- 包装出货
- OEM/ODM

### 4.2 Wholesale Supply — 全球批发供应

面向进口商、批发商、区域分销商。

重点表达：

- 多品类包袋供应
- 稳定产品线
- 批量订单支持
- 中国供应链优势
- 工厂直接供货
- 全球市场供货经验

### 4.3 Ready Stock & Mixed Wholesale — 现货与混批补充

面向小 B 端客户、市场卖家、快速补货客户。

重点表达：

- 现货供应
- 快速出货
- 可混款
- 灵活起订
- 适合快周转市场

该部分应低调处理，不能压过工厂制造和专业批发心智。

---

## 5. 推荐网站结构

建议新站采用以下信息架构。

```text
Home
Products
  ├── Travel Bags
  ├── Men’s Bags
  ├── Women’s Backpacks
  ├── Chest Bags
  ├── Waist Bags
  ├── Crossbody Bags
  ├── Outdoor & Sports Bags
  ├── OEM / ODM Custom Bags
  └── Ready Stock & Mixed Wholesale

Manufacturing
  ├── Factory Overview
  ├── Production Capacity
  ├── Materials & Accessories
  ├── Quality Control
  ├── Packing & Shipping

OEM / ODM
  ├── Custom Logo
  ├── Custom Material
  ├── Custom Size & Structure
  ├── Sample Development
  ├── Bulk Production

Markets
  ├── Africa
  ├── Middle East
  ├── Southeast Asia
  ├── Latin America

Wholesale Solutions
  ├── For Importers
  ├── For Distributors
  ├── For Trading Companies
  ├── For Brand Buyers

Catalog
FAQ
About ROVON
Contact Cason
```

实际开发时可以先做简化版，不需要一次完成所有页面。但页面架构必须为后续扩展预留。

---

## 6. 首页策略

首页不应围绕 Mixed Handbag / Mixed School Bag 展示，而应围绕“全球包袋制造与批发供应”展示。

### 6.1 首页首屏推荐标题

```text
Global Bag Manufacturer & Wholesale Supplier
```

或：

```text
Factory-Backed Bag Supply for Global Wholesale Buyers
```

### 6.2 首页副标题方向

```text
ROVON Global manufactures and supplies travel bags, men’s bags,
women’s backpacks, chest bags, waist bags, crossbody bags,
and OEM/ODM custom bag solutions for importers, distributors,
trading companies, and brand buyers worldwide.
```

### 6.3 首页首屏 CTA

主按钮：

```text
Get Latest Catalog
```

次按钮：

```text
Contact Cason on WhatsApp
```

或：

```text
Request Wholesale Quote
```

### 6.4 首页模块顺序

建议首页按以下顺序：

1. Hero 首屏：全球包袋制造与批发供应商
2. Trust Bar：Factory-backed / Multi-category / OEM/ODM / Global Supply / Fast Response
3. Core Product Categories：旅行包、男包、女士背包、胸包、腰包、斜挎包、定制包
4. Manufacturing Strength：工厂、生产、材料、质检、包装
5. Wholesale Solutions：进口商、分销商、贸易公司、品牌客户
6. OEM/ODM 能力模块
7. Global Markets：Africa / Middle East / Southeast Asia / Latin America
8. Ready Stock 补充模块：轻描淡写提到可支持现货与混批
9. Inquiry Process：需求沟通 → 目录/报价 → 打样/确认 → 生产/包装 → 出货
10. Final CTA：联系 Cason 获取目录或报价
11. Work Directly With Cason：承接 Facebook / TikTok 真人出镜流量，说明客户可以直接联系 Cason 沟通目录、报价、产品需求和 OEM/ODM 项目

---

## 7. 产品内容策略

### 7.1 产品展示逻辑

产品页不应做成零售电商，不要购物车、评分、Add to Cart、SKU 对比等功能。

产品页应做成 B2B 询盘目录：

- 展示产品能力
- 展示适合客户类型
- 展示材料、尺寸、颜色、功能
- 展示 OEM/ODM 支持
- 引导 WhatsApp 询盘
- 引导索要目录

### 7.2 产品字段建议

产品数据结构建议包括：

```ts
type Product = {
  id: string;
  slug: string;
  name: string;
  category: string;
  subCategory?: string;
  productLine: 'manufacturing' | 'wholesale' | 'ready-stock' | 'oem-odm';
  description: string;
  shortDescription: string;
  materials?: string[];
  size?: string;
  colors?: string[];
  features?: string[];
  suitableMarkets?: string[];
  suitableBuyers?: string[];
  moqNote?: string;
  images: string[];
  isFeatured?: boolean;
  isReadyStock?: boolean;
  supportsOEM?: boolean;
  seoTitle?: string;
  seoDescription?: string;
  whatsappMessage?: string;
};
```

### 7.3 产品分类优先级

开发和页面展示时，优先级如下：

1. Travel Bags
2. Men’s Bags
3. Women’s Backpacks
4. Chest Bags
5. Waist Bags
6. Crossbody Bags
7. OEM/ODM Custom Bags
8. Outdoor / Sports / Daily Bags
9. Ready Stock & Mixed Wholesale
10. Hand Bags / School Bags 仅作为 Mixed / Ready Stock 补充

---

## 8. 全球市场策略

新站不应只面向非洲。非洲仍然重要，但需要扩展到更全球化的市场表达。

### 8.1 目标区域

1. Africa / 非洲
2. Middle East / 中东
3. Southeast Asia / 东南亚
4. Latin America / 拉美

### 8.2 各区域内容重点

#### Africa

适合强调：

- 现货补货
- 批发供应
- 价格竞争力
- 快速 WhatsApp 沟通
- 市场卖家和分销商
- 可轻描淡写提 Ready Stock / Mixed Wholesale

但不要让非洲市场页面拉低全站品牌定位。

#### Middle East

适合强调：

- 更高质感产品
- 男包
- 旅行包
- 胸包/腰包
- OEM/ODM
- 私人标签
- 材质和五金
- 品牌客户合作

#### Southeast Asia

适合强调：

- 快速上新
- 时尚趋势
- 女士背包
- 日用包
- 灵活 MOQ
- 多品类组合采购

#### Latin America

适合强调：

- 进口商
- 区域分销商
- 多品类批发
- 中国供应链
- OEM/ODM 支持
- 旅行包、男包、背包等稳定品类

---

## 9. 视觉设计原则

新站风格应是：

```text
专业、现代、国际化、工厂实力感、供应链感、干净、快速、可信任。
```

避免：

- 廉价电商风
- 批发市场杂乱感
- 大量红黄高饱和颜色
- 大量闪烁动画
- 过度强调低价
- 过度强调 Mixed
- 模板站文案和视觉

### 9.1 推荐色彩

- 主色：深蓝、海军蓝
- 辅色：青蓝、浅灰、白色
- CTA：少量橙色或金色
- 背景：白色、浅灰、微渐变可以少量使用

### 9.2 推荐字体

英文站可使用：

- Inter
- Manrope
- Plus Jakarta Sans
- Geist Sans

整体要求：清晰、现代、专业、移动端可读性强。

### 9.3 图片风格

必须尽量使用真实图片，尤其是：

- 工厂照片
- 生产线照片
- 仓库照片
- 包装照片
- 装柜照片
- 产品矩阵图
- 材料细节图
- 五金细节图
- 车线细节图
- 团队/办公室照片

不要过度依赖图库图片。图库图会削弱真实工厂感。

如果展示 Cason，应优先使用用户提供的真实照片、视频截图或经过确认的真人素材。不要使用陌生图库人物或 AI 虚构人像来代表 Cason。Cason 真人素材可以用于 About、Contact、CTA、Facebook/TikTok 来访承接模块，但必须压缩和懒加载，避免拖慢速度。

---

## 10. 性能与打开速度要求

打开速度是本项目的核心要求之一。美观不能以牺牲速度为代价。

### 10.1 总原则

```text
视觉高级，但技术轻量；内容完整，但加载克制；产品丰富，但分层展示；全球化，但首页快速打开。
```

### 10.2 性能硬规则

1. 不使用 WordPress
2. 不使用重型页面构建器
3. 不使用 WooCommerce 购物车逻辑
4. 不使用无关插件
5. 不使用视频背景作为首页首屏
6. 不使用复杂 3D、粒子、过度滚动动画
7. 不一次性加载大量产品
8. 不直接上传和展示 3MB、5MB、10MB 原图
9. 第三方脚本必须克制，Meta Pixel / GA 等延迟加载
10. 页面优先静态生成
11. 图片必须使用 Next.js Image 或等价优化方案
12. 非首屏图片懒加载
13. 首屏图片合理 priority
14. 产品列表分页或 Load More

### 10.3 图片体积建议

```text
首页首屏大图：200KB - 400KB
普通产品图：80KB - 200KB
详情图：150KB - 300KB
产品缩略图：尽量低于 150KB
```

### 10.4 性能目标

```text
桌面端首屏：1 - 2 秒内尽量完成主要内容展示
移动端首屏：2 - 3 秒内尽量完成主要内容展示
首页总资源体积：尽量控制在 1.5MB - 2.5MB 内
Lighthouse Performance：尽量 85+
Lighthouse SEO：尽量 90+
Lighthouse Best Practices：尽量 90+
```

这些不是绝对保证值，但开发时必须以此为目标。

---

## 11. 技术路线

### 11.1 推荐技术栈

```text
Next.js
TypeScript
Tailwind CSS
GitHub
Codex
Vercel
```

### 11.2 初期数据管理

第一版不要急着做复杂后台。推荐：

```text
阶段 1：本地 products.ts / products.json / CSV
阶段 2：Google Sheets 轻后台
阶段 3：Supabase 产品后台
```

### 11.3 为什么不一开始做后台

当前最优先的是：

1. 品牌定位正确
2. 页面结构正确
3. 视觉专业
4. 速度快
5. 产品体系清晰
6. WhatsApp 询盘路径强

后台可以后续做。否则项目初期会过重，影响上线效率。

### 11.4 未来后台方向

长期可接入：

- Supabase Auth：管理员/助理登录
- Supabase Database：产品、分类、市场页面内容
- Supabase Storage：产品图片
- Admin Dashboard：中文后台，方便助理操作

后台路径建议：

```text
/admin/login
/admin/products
/admin/products/new
/admin/products/[id]/edit
/admin/categories
/admin/media
```

后台语言：中文。  
前台语言：英文为主。

---

## 12. Codex 开发原则

### 12.1 Codex 应该做什么

Codex 适合完成：

- 创建 Next.js 项目
- 搭建页面结构
- 开发组件
- 优化响应式
- 优化 SEO
- 优化图片加载
- 调整视觉
- 新增产品分类页
- 新增市场落地页
- 接入 WhatsApp CTA
- 接入 Google Sheets / Supabase
- 修复构建错误
- 提交 GitHub PR
- 部署到 Vercel

### 12.2 Codex 不应该误解的地方

Codex 不应把本项目做成：

- 普通电商网站
- WooCommerce 替代品
- 低价批发站
- Mixed Handbag / Mixed School Bag 主站
- 只服务非洲小客户的网站
- 炫酷但慢的网站
- 大量动画模板站
- 内容空洞的品牌官网

### 12.3 每次开发任务要求

每次让 Codex 开发时，应要求：

1. 先理解本 AGENT.md
2. 明确本次改动范围
3. 不破坏现有页面结构
4. 不引入不必要依赖
5. 保持移动端体验
6. 保持性能优先
7. 保持品牌定位一致
8. 完成后运行 build / lint / type check
9. 如有错误，先修复再提交

---

## 13. SEO 策略

### 13.1 SEO 主方向

不要围绕 Mixed Handbag / Mixed School Bag 做主 SEO。

Cason 可以出现在 About、Contact、FAQ 和 CTA 相关页面的 SEO 中，但不要让个人名超过公司主品牌。主 SEO 仍围绕 ROVON Global、bag manufacturer、wholesale bag supplier、OEM/ODM bag manufacturer 等关键词。

主关键词方向应包括：

- bag manufacturer China
- wholesale bag supplier
- travel bag manufacturer
- men’s bag manufacturer
- women backpack supplier
- chest bag manufacturer
- waist bag supplier
- OEM bag manufacturer
- ODM bag supplier
- custom bag manufacturer
- global bag wholesale supplier

### 13.2 页面 SEO

每个主要页面必须有：

- title
- description
- H1
- 语义化 H2/H3
- 图片 alt
- Open Graph metadata
- canonical URL
- sitemap
- robots.txt

### 13.3 结构化数据

建议逐步添加：

- Organization
- Product
- FAQPage
- BreadcrumbList

---

## 14. WhatsApp 转化策略

网站核心转化不是购物车，而是询盘。

由于流量主要来自 Facebook / TikTok 真人出镜视频，WhatsApp 转化文案应尽量突出 Cason。客户在视频中认识 Cason 后，进入网站应继续看到同一个沟通入口，降低信任断层。

主要 CTA：

```text
Get Latest Catalog
Request Wholesale Quote
Start OEM/ODM Project
Contact Cason on WhatsApp
Talk to Cason
Ask Cason for Catalog
Send Product Inquiry
```

不同页面使用不同 CTA：

| 页面 | 主 CTA |
|---|---|
| Home | Get Latest Catalog / Contact Cason |
| Travel Bags | Request Travel Bag Quote |
| Men’s Bags | Ask for Men’s Bag Catalog |
| Women’s Backpacks | Request Backpack Catalog |
| Chest Bags | Ask for Chest Bag Price |
| Waist Bags | Request Waist Bag Quote |
| OEM/ODM | Start Custom Bag Project |
| Manufacturing | Discuss Production Capability |
| Markets | Contact for Regional Supply |
| Ready Stock | Ask for Available Stock List |

WhatsApp 链接应支持预填消息，例如：

```text
Hello Cason, I am interested in your travel bags. Please send me the latest catalog and wholesale price.
```

---

## 15. 内容语气与文案原则

英文文案必须自然、专业，避免中国式英语。

避免使用：

```text
We are best quality and cheap price.
Our factory very professional.
Welcome to inquiry.
We mainly provide mixed handbags and schoolbags.
```

推荐使用：

```text
We support global wholesale buyers with factory-backed bag production, stable supply, and OEM/ODM customization.
```

```text
From travel bags and men’s bags to women’s backpacks and custom bag projects, ROVON Global helps importers and distributors source reliable bag products from China.
```

内容应多讲专业买家关心的问题：

- What can you manufacture?
- Do you support OEM/ODM?
- What materials can you use?
- Can you make samples?
- What is your production process?
- How do you control quality?
- Can you support wholesale distribution?
- Can you ship to my region?
- Can I get a catalog?
- Can I talk on WhatsApp?
- Can I talk directly with Cason?
- I saw your video on Facebook/TikTok, can I get the catalog?

---

## 16. 图片与素材管理规范

### 16.1 图片命名规范

建议：

```text
travel-bag-001-main.webp
travel-bag-001-detail-1.webp
travel-bag-001-detail-2.webp

mens-bag-001-main.webp
mens-bag-001-detail-1.webp

women-backpack-001-main.webp
chest-bag-001-main.webp
waist-bag-001-main.webp
```

Ready Stock / Mixed 类图片可命名：

```text
ready-stock-handbag-001.webp
mixed-school-bag-001.webp
```

但不要让这些图片成为首页主视觉中心。

### 16.2 图片目录建议

```text
/public/images/hero
/public/images/products/travel-bags
/public/images/products/mens-bags
/public/images/products/women-backpacks
/public/images/products/chest-bags
/public/images/products/waist-bags
/public/images/products/ready-stock
/public/images/factory
/public/images/materials
/public/images/packing-shipping
/public/images/markets
```

---

## 17. 第一版开发范围建议

第一版不需要做太复杂，建议优先完成：

1. Home
2. Products 总览页
3. Travel Bags 分类页
4. Men’s Bags 分类页
5. Women’s Backpacks 分类页
6. Chest Bags 分类页
7. Waist Bags 分类页
8. OEM/ODM 页面
9. Manufacturing 页面
10. Markets 总览页
11. Contact 页面
12. FAQ 页面
13. WhatsApp CTA 组件
14. 本地产品数据结构
15. SEO 基础
16. 图片性能优化

Ready Stock / Mixed Wholesale 可以有一个页面或一个低调模块，但不要主推。

---

## 18. 第一条 Codex 启动指令建议

可直接复制给 Codex：

```text
请先阅读项目根目录的 AGENT.md，并严格按照其中的品牌定位、产品优先级、技术路线和性能要求开发。

我要创建 ROVON Global 新版外贸独立站。这个网站不是 Mixed Handbag 或 Mixed School Bag 小批发站，而是一个专业的中国包袋制造工厂与全球批发供应商官网。

主推工厂生产类目：Travel Bags、Men’s Bags、Women’s Backpacks、Chest Bags、Waist Bags、Crossbody Bags、OEM/ODM Custom Bags。

Hand Bag 和 School Bag 只作为 Ready Stock / Mixed Wholesale 补充内容，不要作为首页首屏、主导航、主 SEO 或品牌核心定位。

请使用 Next.js + TypeScript + Tailwind CSS 创建项目，并先完成：
1. 全局布局
2. 导航栏
3. 页脚
4. 首页
5. Products 总览页
6. Manufacturing 总览页
7. OEM/ODM 页面
8. Contact 页面
9. WhatsApp CTA 组件
10. 本地产品数据结构

设计风格：专业、现代、国际化、工厂实力感、综合供应商感。性能优先，不使用重动画、不使用视频背景、不引入无关第三方库。完成后运行 build / lint / type check 并修复错误。
```


---

## 19. Cason 个人商业 IP 的页面实施原则

### 19.1 首页

首页必须同时完成两件事：

1. 建立 ROVON Global 的专业工厂和全球批发供应商心智；
2. 承接 Cason 在 Facebook / TikTok 真人视频中建立的信任。

建议首页包含：

```text
Work Directly With Cason
```

或：

```text
Found Us on Facebook or TikTok?
Talk to Cason Directly.
```

该模块应解释：

- Cason 是 ROVON Global 的直接沟通联系人；
- 客户可以通过 WhatsApp 发送产品需求；
- Cason 可以帮助客户获取目录、报价、OEM/ODM 沟通；
- 客户可以说明目标市场、数量、材质、Logo、包装等需求。

### 19.2 About 页面

About 页面应包含两个层次：

1. About ROVON Global：公司、供应链、产品体系、OEM/ODM 能力；
2. Meet Cason：真实联系人、Facebook/TikTok 流量承接、WhatsApp 沟通入口。

About 页面不要写成个人传记。Cason 介绍应服务于 B2B 信任和沟通效率。

### 19.3 Contact 页面

Contact 页面应尽量使用：

```text
Contact Cason for Bag Sourcing & OEM/ODM Inquiries
```

而不是普通：

```text
Contact Us
```

并提醒买家联系前准备：

- target bag category
- estimated quantity
- destination market
- logo or customization needs
- preferred material or quality level
- expected delivery timeline

### 19.4 产品分类页

每个产品分类页都应有具体的 Cason CTA，例如：

```text
Ask Cason for Travel Bag Catalog
```

```text
Talk to Cason About Custom Men’s Bags
```

```text
Send Your Backpack Requirements to Cason
```

不同品类的 WhatsApp 预填消息应不同，不能所有页面都使用同一句泛泛文案。

### 19.5 FAQ 页面

FAQ 应加入与 Cason 和社媒流量相关的问题：

```text
Can I talk directly with Cason on WhatsApp?
```

```text
I found ROVON Global on Facebook or TikTok. Can I request a catalog from Cason?
```

```text
What information should I send before asking for a quotation?
```

### 19.6 禁止事项

- 不要把 Cason 做成夸张个人英雄叙事；
- 不要虚构 Cason 的职位、履历、年限、工厂所有权；
- 不要使用假人像或陌生图库人物代表 Cason；
- 不要让 Cason 个人 IP 压过 ROVON Global 主品牌；
- 不要把网站做成个人博客；
- 不要牺牲打开速度去加载大量视频；
- 不要在首页首屏自动播放大视频。

正确方向：

```text
专业工厂品牌可信度
+
真人业务联系人可信度
+
WhatsApp 高效询盘转化
```

---

## 20. 项目判断原则

当后续出现设计、文案、产品排序、页面结构冲突时，按以下优先级判断：

```text
工厂实力感 > 专业产品体系 > 全球批发供应能力 > OEM/ODM 能力 > 区域市场适配 > 现货/Mixed 补充销售
```

不要反过来。

错误方向：

```text
Mixed 产品 > 低价批发 > WhatsApp 快速成交 > 工厂形象
```

正确方向：

```text
实力工厂 > 多品类制造 > 全球供应 > 专业采购合作 > WhatsApp 高效询盘
```

---

## 21. 最终目标

新版 ROVON Global 独立站应让客户形成以下判断：

1. 这不是一个临时搭建的小批发网站
2. 这是一家有供应链能力的中国包袋工厂/供应商
3. 这家公司有明确的产品体系
4. 这家公司可以服务全球市场
5. 这家公司可以做 OEM/ODM
6. 这家公司可以支持批发商、分销商、贸易公司和品牌客户
7. 这家公司沟通路径清晰，可以快速通过 WhatsApp 联系 Cason
8. 如果客户来自 Facebook / TikTok，他们能在官网继续识别 Cason，并确认这是同一个真实业务联系人
9. 网站打开速度快，移动端体验好，视觉专业可信

以上原则优先级高于任何局部页面美化或短期产品展示需求。
## Current Highest Business Direction - V3 Cason / Two Supply Solutions / VANTO KARO

This section overrides any older positioning language below when there is a conflict.

ROVON Global must now be expressed as:

```text
Factory-backed Bag Manufacturer & Flexible Supply Partner from China.
```

Business model:

```text
One Supplier. Two Supply Solutions.
```

1. Factory Manufacturing: OEM/ODM, private label, custom bags, long-term cooperation, and bulk production.
2. Flexible Supply: ready stock, factory overstock, mixed wholesale, low MOQ, market testing, faster delivery, and lower inventory risk.

Brand structure:

```text
Cason = personal IP and buyer trust entrance
ROVON Global = manufacturing and supply chain partner
VANTO KARO = independent bag product brand
```

Cason is the real contact behind ROVON Global and the direct WhatsApp communication entry for overseas B2B buyers. Do not describe him as founder, CEO, factory owner, or a low-price salesperson unless verified information is provided.

VANTO KARO is an independent bag product brand developed for selected bag lines, labels, trims, hardware, and packaging. It is manufactured and supplied by ROVON Global. It must not be described as the company name and must not replace ROVON Global.

Verified factory data that may be used with conservative wording:

- Around 5,000 sqm warehouse and operating space
- 150+ skilled workers
- 10 production lines
- Around 2,000 bags shipped per day

Core categories remain: Travel Bags, Men's Bags, Women's Backpacks, Chest Bags, Waist Bags, Crossbody Bags, and OEM/ODM Custom Bags. Hand Bags and School Bags may only appear as Flexible Supply / ready stock opportunities, not as the main manufacturing positioning.

Avoid cheap sourcing language such as "best price", "lowest price", "cheap bag supplier", "dear friend", or generic retail ecommerce language.
