# ROVON Global 新版外贸独立站

这是 ROVON Global 第一阶段可运行版本，使用 Next.js + TypeScript + Tailwind CSS 构建，适合后续部署到 Vercel。

## 项目定位

前台网站面向全球 B2B 买家，核心定位是：

- China-based bag manufacturer
- Global wholesale bag supplier
- OEM/ODM custom bag partner
- Factory-backed multi-category bag supply

主推类目包括 Travel Bags、Men's Bags、Women's Backpacks、Chest Bags、Waist Bags、Crossbody Bags、OEM/ODM Custom Bags。

Ready Stock / Mixed Wholesale 只作为补充业务存在，不作为首页首屏、主导航、品牌口号或核心 SEO 心智。

## 如何运行

```bash
npm install
npm run dev
```

默认本地地址：

```text
http://localhost:3000
```

检查命令：

```bash
npm run typecheck
npm run lint
npm run build
```

## 当前页面结构

- `/`
- `/products`
- `/products/travel-bags`
- `/products/mens-bags`
- `/products/womens-backpacks`
- `/products/chest-bags`
- `/products/waist-bags`
- `/products/crossbody-bags`
- `/products/oem-odm-custom-bags`
- `/ready-stock`
- `/manufacturing`
- `/manufacturing/factory-overview`
- `/manufacturing/quality-control`
- `/manufacturing/packing-shipping`
- `/wholesale-solutions`
- `/markets`
- `/markets/africa`
- `/markets/middle-east`
- `/markets/southeast-asia`
- `/markets/latin-america`
- `/oem-odm`
- `/about`
- `/faq`
- `/contact`

## 如何新增或修改产品分类

核心数据在：

```text
src/data/products.ts
```

新增分类时，优先修改 `productCategories`，字段包括：

- `slug`
- `name`
- `headline`
- `description`
- `buyerUseCase`
- `suitableBuyers`
- `productHighlights`
- `customizationOptions`
- `moqNote`
- `relatedCategorySlugs`
- `image`
- `ctaLabel`
- `whatsappMessage`
- `seoTitle`
- `seoDescription`

当前 `products` 使用分类数据自动生成第一阶段样例。后续如果要加入真实产品，可以把 `products` 改成独立数组，字段已经预留：

- `id`
- `slug`
- `name`
- `category`
- `description`
- `materials`
- `size`
- `colors`
- `features`
- `targetMarkets`
- `images`
- `isFeatured`
- `seoTitle`
- `seoDescription`
- `whatsappMessage`

产品分类页未来要支持分页或 Load More，不要一次性在首页或分类页加载大量产品。

## 图片管理

当前第一阶段使用轻量本地 SVG 占位图，路径在：

```text
public/images
```

后续替换成真实图片时建议使用 WebP 或 AVIF，并保持统一比例：

- 首页首屏大图：控制在 200KB - 400KB
- 产品缩略图：尽量低于 150KB
- 普通产品图：80KB - 200KB

页面中图片已使用 `next/image`。首屏图片设置了 `priority`，非首屏图片保持懒加载。

## 真实图片替换清单

后续请优先替换为 ROVON Global 真实图片，避免图库感和模板感。建议目录结构：

```text
public/images/hero
public/images/products/travel-bags
public/images/products/mens-bags
public/images/products/womens-backpacks
public/images/products/chest-bags
public/images/products/waist-bags
public/images/products/crossbody-bags
public/images/factory
public/images/materials
public/images/packing-shipping
public/images/markets
```

需要准备的真实图片类型：

- 首页首屏产品组合图
- 工厂外观图
- 生产线图
- 车缝细节图
- 材料和五金图
- 包装和仓库图
- 各产品分类真实产品图

建议尺寸和体积：

- 首页首屏大图：200KB - 400KB
- 产品缩略图：低于 150KB
- 普通产品图：80KB - 200KB
- 优先使用 WebP 或 AVIF
- 保持统一比例，避免页面加载时跳动

当前占位图是 SVG。替换成真实 WebP / AVIF 后，可以继续使用现有路径命名，或在 `src/data/products.ts` 中更新图片路径。

## WhatsApp 配置

WhatsApp 号码在这里配置：

```text
src/data/site.ts
```

推荐部署时在 Vercel 环境变量中设置：

```text
NEXT_PUBLIC_SITE_URL=https://rovonglobal.com
NEXT_PUBLIC_WHATSAPP_NUMBER=8615302605504
NEXT_PUBLIC_WHATSAPP_DISPLAY=+86 153 0260 5504
```

WhatsApp 号码未来如更换，只需要修改 Vercel 环境变量并重新部署。

页面显示号码和实际跳转号码分开管理：

- `NEXT_PUBLIC_WHATSAPP_NUMBER`：用于 WhatsApp 跳转，不要带 `+`、空格或横线。
- `NEXT_PUBLIC_WHATSAPP_DISPLAY`：用于页面展示，可以使用更易读的格式。

联系人、公司名、邮箱、WhatsApp、地址统一在 `src/data/site.ts` 管理。页面上不要散落硬编码联系人信息。

当前邮箱和地址也在 `src/data/site.ts` 中管理：

- `cason@rovonglobal.com`
- `No. 378, Wuyi Road, Baigou, Baoding, Hebei, China`

如果后续需要把邮箱和地址也改成 Vercel 环境变量，可以继续扩展 `src/data/site.ts`。

## 工厂数据真实性

工厂能力数据统一在：

```text
src/data/factory.ts
```

上线前必须用真实资料替换以下字段：

- `yearsExperience`
- `productionBase`
- `skilledWorkers`
- `productionLines`
- `monthlyCapacity`

在数据没有确认前，前台只能使用保守表达，例如 experienced manufacturing support、flexible production capacity、stable supply chain、quality control from materials to packing，不要编造具体年份、面积、员工数、产线数或月产能。

## SEO

基础 SEO 位于：

- `src/app/layout.tsx`
- 各页面的 `metadata`
- `src/app/robots.ts`
- `src/app/sitemap.ts`

正式部署前请把 `NEXT_PUBLIC_SITE_URL` 设置为真实域名，避免 sitemap 和 canonical 使用默认域名。

## Vercel 部署

1. 推送代码到 GitHub。
2. 在 Vercel 创建新项目并选择该仓库。
3. Framework Preset 选择 Next.js。
4. 添加环境变量：
   - `NEXT_PUBLIC_SITE_URL=https://rovonglobal.com`
   - `NEXT_PUBLIC_WHATSAPP_NUMBER=8615302605504`
   - `NEXT_PUBLIC_WHATSAPP_DISPLAY=+86 153 0260 5504`
5. 部署后用 Lighthouse 检查 Performance、SEO、Best Practices。

## 后续建议

- 替换真实工厂、生产线、包装、仓库和产品图片。
- 为每个产品分类补充真实产品列表。
- 加入结构化数据：Organization、Product、FAQPage、BreadcrumbList。
- 第三方脚本如 GA、Meta Pixel、WhatsApp widget 必须延迟加载。

## Visual Design System

当前视觉系统以专业 B2B 工厂官网为目标，避免廉价批发风和零售电商感。

- 主色：深蓝 / 海军蓝，用于 Header、Hero、Footer、重点 CTA 区域和可信赖的品牌基调。
- 辅色：青蓝与浅蓝灰，用于图标、边框、浅色区块和信息分层。
- CTA 色：克制的clay / terracotta，只用于关键 WhatsApp、询盘、目录和报价按钮。
- 卡片：统一使用 8px 圆角、轻边框、低强度阴影，避免过度装饰。
- 间距：页面区块使用统一纵向间距，移动端优先保持可读性和触控舒适度。
- 动画：只使用轻量 CSS transition、hover 边框、hover 阴影和小幅位移，不使用重动画库。

## Performance Rules After Visual Upgrade

视觉升级后仍然以打开速度和移动端体验为优先级。

- 不引入 Framer Motion、GSAP、three.js 等重动画或 3D 依赖。
- 不使用视频背景、粒子背景、复杂滚动动画或页面加载遮罩。
- 不直接使用大图，真实图片替换时继续优先 WebP / AVIF。
- 首页首屏图片继续使用 `next/image` 和 `priority`，非首屏图片保持懒加载。
- 产品分类页后续仍需支持分页或 Load More，避免一次性加载大量产品。
- Google Analytics、Meta Pixel、WhatsApp widget 等第三方脚本必须延迟加载。
- 视觉细节优先通过 CSS、Tailwind token 和轻量组件完成，不增加无关 UI 框架。

## Future i18n Plan

当前前台只启用英文，不提供假的语言切换功能。

- 语言配置位置：`src/data/languages.ts`
- 当前默认语言：English
- 未来计划支持：French、Arabic、Spanish、Portuguese
- Header 目前只展示 English，其他语言在配置中保留但未启用。
- 后续如需正式多语言，可评估 `next-intl` 或 Next.js locale routing。
- 多语言上线前必须人工校对 B2B 文案，不建议直接机器翻译后上线。

## Fireclay-inspired Visual Direction

本项目只参考 Fireclay Tile 的高级品牌站视觉语言，不复制其内容、素材、图片、文案、业务逻辑或页面结构。ROVON Global 仍然是 B2B 包袋制造工厂与全球批发供应商官网。

本轮视觉升级重点：

- 更大图文模块：首页 Hero、产品分类、Manufacturing、Markets 使用更大比例的图片容器和更清晰的图文节奏。
- 更精致导航：顶部加入克制的 utility bar，主导航减少模板感，hover 和 active 状态更自然。
- 更高级卡片：使用 warm white、stone、charcoal、clay、stone、sand 和克制 terracotta，卡片边框与阴影更轻。
- 更舒适排版：标题采用更 editorial 的标题字体栈，正文行高和模块留白更适合国际 B2B 品牌站。
- 更轻量微交互：只使用 CSS transition、hover 图片轻微 zoom、按钮 hover、卡片小幅位移和边框变化。

性能原则保持不变：不引入 Framer Motion、GSAP、three.js、第三方 UI 框架或视频背景，不新增大图片，继续使用 `next/image` 和静态数据结构。

## Warm Editorial B2B Visual System

当前视觉系统已经从蓝橙企业站方向，重建为 warm neutral / clay / stone / charcoal 的国际 B2B 品牌官网风格。

本系统参考 Fireclay Tile 的高级品牌站气质，包括大面积留白、成熟中性色、图片主导模块、细腻分割线、克制 CTA 和自然 hover 动效；但不复制其内容、图片、Logo、文案、业务逻辑或可识别页面组合。ROVON Global 仍然是 B2B 包袋制造工厂与全球批发供应商官网。

当前视觉原则：

- 背景：warm ivory、soft cream、off-white，用于全站主背景和页面 Hero。
- 主文字：deep charcoal / ink brown，避免强企业蓝控制页面。
- 辅助色：clay、terracotta、warm taupe、sand、stone、muted olive。
- CTA：clay / terracotta，克制、温暖，不使用亮橙促销感按钮。
- 深色区块：charcoal brown / deep clay，用于 Final CTA 和 Footer。
- 卡片：细 warm gray / stone 边框，低强度阴影，8px 圆角。
- 动效：只使用 CSS transition、hover transform、opacity 和轻量 shadow，不引入重动画库。
- 图片：保持当前比例和布局，后续替换真实产品图、工厂图时不需要大改结构。

性能原则保持不变：不引入 Framer Motion、GSAP、three.js、大型 UI 框架、视频背景或大图片；继续使用 `next/image`、静态数据结构和延迟加载策略。

## Vercel Deployment Checklist

上线前建议先在本地完成：

```bash
npm run typecheck
npm run lint
npm run build
```

Vercel 部署步骤：

1. 将当前项目推送到 GitHub 仓库。
2. 在 Vercel 新建项目并选择该仓库。
3. Framework Preset 选择 `Next.js`。
4. 在 Vercel Project Settings -> Environment Variables 中设置：
   - `NEXT_PUBLIC_SITE_URL=https://rovonglobal.com`
   - `NEXT_PUBLIC_WHATSAPP_NUMBER=8615302605504`
   - `NEXT_PUBLIC_WHATSAPP_DISPLAY=+86 153 0260 5504`
5. 部署完成后检查：
   - 首页 `/` 是否正常打开。
   - `/sitemap.xml` 是否正常打开，并且 URL 使用 `https://rovonglobal.com`。
   - `/robots.txt` 是否正常打开，并指向正确 sitemap。
   - WhatsApp 按钮是否跳转到 `https://wa.me/8615302605504` 并带有预填询盘信息。
   - Contact 页面是否显示 `cason@rovonglobal.com` 和 `No. 378, Wuyi Road, Baigou, Baoding, Hebei, China`。
   - 移动端 Header 菜单是否可以展开和关闭。
6. 部署后使用 Lighthouse 检查：
   - Performance
   - Accessibility
   - Best Practices
   - SEO

WhatsApp 号码未来如更换，只需要修改 Vercel 环境变量并重新部署。页面显示号码和实际跳转号码分开管理：`NEXT_PUBLIC_WHATSAPP_DISPLAY` 用于展示，`NEXT_PUBLIC_WHATSAPP_NUMBER` 用于 `wa.me` 跳转。

## Lighthouse Targets for Current Phase

当前阶段目标不是绝对保证值，但部署后应尽量达到以下范围：

Desktop:
- Performance 尽量 85+
- SEO 尽量 90+
- Best Practices 尽量 90+

Mobile:
- Performance 尽量 75+
- SEO 尽量 90+
- Best Practices 尽量 90+

当前网站仍使用轻量占位图。后续替换真实产品图、工厂图、包装图时必须控制图片体积，否则 Lighthouse Performance 会下降。建议继续优先使用 WebP 或 AVIF，并保持 `next/image`、首屏关键图 `priority`、非首屏图片懒加载。

## GitHub, Vercel, and Hostinger Deployment Guide

### Push to GitHub

Target repository:

```text
https://github.com/Congxx108/rovon-global-website.git
```

Before pushing, make sure these local files and folders are ignored and not committed:

```text
node_modules
.next
.env
.env.local
.env*.local
.vercel
dist
build
```

Recommended local checks before each deployment:

```bash
npm run typecheck
npm run lint
npm run build
```

### Import GitHub Repository to Vercel

1. Log in to Vercel.
2. Click `Add New Project`.
3. Choose `Import Git Repository`.
4. Select GitHub repository `Congxx108/rovon-global-website`.
5. Set Framework Preset to `Next.js`.
6. Add Environment Variables:
   - `NEXT_PUBLIC_SITE_URL=https://rovonglobal.com`
   - `NEXT_PUBLIC_WHATSAPP_NUMBER=8615302605504`
   - `NEXT_PUBLIC_WHATSAPP_DISPLAY=+86 153 0260 5504`
7. Click `Deploy`.
8. After deployment, first test the temporary `vercel.app` domain provided by Vercel.

### Hostinger Domain to Vercel

The domain `rovonglobal.com` is managed in Hostinger. After the Vercel project is deployed, add these domains in the Vercel project domain settings:

```text
rovonglobal.com
www.rovonglobal.com
```

Then follow the exact DNS instructions shown by Vercel in the Hostinger DNS manager. Common records are:

```text
A      @      76.76.21.21
CNAME  www    cname.vercel-dns.com
```

Use the Vercel dashboard instructions as the source of truth. If Hostinger still has old A records or CNAME records pointing to the previous WordPress / Hostinger website, delete or replace them, otherwise visitors may still reach the old site.

DNS propagation can take a few minutes to 24 hours. After Vercel verifies the domain, HTTPS will be configured automatically. The target setup is `https://rovonglobal.com` as the primary domain, with `www.rovonglobal.com` redirecting to `rovonglobal.com`.

### Post-Deployment Checklist

After deployment, check:

1. `/` opens correctly.
2. `/products` opens correctly.
3. `/manufacturing` opens correctly.
4. `/wholesale-solutions` opens correctly.
5. `/oem-odm` opens correctly.
6. `/faq` opens correctly.
7. `/contact` opens correctly.
8. `/sitemap.xml` opens correctly.
9. `/robots.txt` opens correctly.
10. WhatsApp buttons open `https://wa.me/8615302605504` with a prefilled inquiry message.
11. Contact page shows `cason@rovonglobal.com`, `+86 153 0260 5504`, and `No. 378, Wuyi Road, Baigou, Baoding, Hebei, China`.
12. Mobile navigation menu opens and closes correctly.
13. There is no horizontal scrolling on mobile.
14. Lighthouse checks Performance, SEO, and Best Practices.

## Production Verification Notes

Current SEO target domain:

```text
https://rovonglobal.com
```

Vercel Domains must use `rovonglobal.com` as the Primary Domain. If Vercel shows `https://rovonglobal.com` redirecting to `https://www.rovonglobal.com`, change the Primary Domain in Vercel Project Settings -> Domains to `rovonglobal.com`. The expected final behavior is:

```text
https://rovonglobal.com        -> 200 primary domain
https://www.rovonglobal.com    -> redirects to https://rovonglobal.com
```

Keep `NEXT_PUBLIC_SITE_URL=https://rovonglobal.com` so canonical URLs, Open Graph URLs, robots.txt, and sitemap.xml stay aligned with the primary domain.

Latest production verification notes:
- All static pages returned 200 when checked through the live domain.
- Current Vercel domain setting still needs attention if apex redirects to www.
- Sitemap and robots output use `https://rovonglobal.com`.
- WhatsApp links use `https://wa.me/8615302605504` with prefilled inquiry text.
- Contact details match the approved Cason email, WhatsApp display number, and Baigou address.
- Lighthouse sample results were within current-stage targets, but homepage mobile performance is close to the lower target and should be watched when replacing placeholder images.

## Content Enhancement Roadmap

Current phase still uses local static data and lightweight placeholder images. The next content phase should replace placeholders with verified ROVON Global materials and add more buyer-ready information without changing the site into a retail ecommerce store.

Priority content to prepare:

1. Real product images for every core category.
2. Real factory images, including exterior, workshop, sewing, inspection, and team-related views where available.
3. Real packing and warehouse images.
4. Real product examples for each category: travel bags, men's bags, women's backpacks, chest bags, waist bags, crossbody bags, and OEM/ODM custom bags.
5. Verified FAQ details for MOQ, samples, lead time, payment terms, logo methods, materials, packing, and shipping.
6. A downloadable catalog or structured inquiry form for buyers who want a faster quotation path.
7. A future product data workflow using Google Sheets or Supabase if the local data file becomes difficult to maintain.

The current site does not use a backend. Product and category content is managed in `src/data/products.ts` for this phase. Google Sheets or Supabase can be evaluated later after real product photos, category details, and catalog structure are clearer.

## Next Real Assets Replacement Plan

The next phase should replace placeholder visuals with verified ROVON Global assets. Do not use fake factory photos, unrelated stock portraits, or AI-generated people to represent Cason.

Please prepare:

1. One clear Cason profile photo for About, Contact, and CTA modules.
2. Two to four Cason video screenshots from real Facebook / TikTok product or sourcing videos.
3. One to three homepage hero product combination images.
4. Real product images for each core category: travel bags, men's bags, women's backpacks, chest bags, waist bags, crossbody bags, and OEM/ODM custom bags.
5. Factory, sewing, material, quality inspection, packing, warehouse, and shipping-related images.

Recommended image format and size:

- Use WebP or AVIF whenever possible.
- Hero images: 200KB - 400KB.
- Cason profile photo: 80KB - 150KB.
- Category images: 100KB - 250KB.
- Normal content images: 100KB - 300KB.

Prepared asset folders:

```text
public/images/cason
public/images/hero
public/images/products/travel-bags
public/images/products/mens-bags
public/images/products/womens-backpacks
public/images/products/chest-bags
public/images/products/waist-bags
public/images/products/crossbody-bags
public/images/factory
public/images/materials
public/images/packing-shipping
public/images/markets
```

## Cason Personal Business IP Positioning

ROVON Global remains the main brand and the factory-backed supplier positioning. Cason is the buyer communication entry point and a trust enhancer, not a replacement for the company brand.

How Cason should be presented:

- Cason is the direct contact for global B2B buyers.
- Buyers can contact Cason to request catalogs, discuss wholesale quotations, clarify OEM/ODM requirements, and follow up product needs.
- Cason helps buyers communicate efficiently through WhatsApp, especially when they need to explain categories, quantity range, materials, logo needs, packing requirements, and timeline.
- Cason-related content should stay professional, practical, and restrained.

Do not invent or imply unverified personal information:

- Do not describe Cason as founder, CEO, factory owner, or senior executive unless verified information is provided.
- Do not invent Cason's work history, awards, years of experience, factory ownership, or personal story.
- Do not turn the website into a personal blog. Cason supports trust and conversion, while ROVON Global remains the core manufacturing and wholesale supply brand.
