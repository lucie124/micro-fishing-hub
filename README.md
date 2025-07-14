# 小物之美 - 小物钓新手入门网站

一个专为小物钓新手打造的，集美学、教学与社区于一体的线上指南。

## 项目特色

### 🎨 设计理念
- **自然主义**: 采用来源于自然的色彩方案
- **治愈感**: 通过柔和的视觉设计营造宁静氛围
- **极简风格**: 遵循"少即是多"的设计原则
- **日系杂志感**: 参考《KINFOLK》和《POPEYE》的排版风格

### 🎯 核心功能
- **新手必读**: 从零开始的小物钓入门指南
- **装备库**: 精心挑选的新手友好装备推荐
- **技巧堂**: 详细的钓鱼技巧教学
- **鱼种图鉴**: 常见小物钓目标鱼种介绍
- **玩家社区**: 钓友交流分享平台

### 🎨 视觉风格
- **色彩方案**: 
  - 主色调：纯白 (#FFFFFF) 和暖灰 (#F8F8F6)
  - 自然绿：薄荷绿 (#A8D8B9) 和鼠尾草绿 (#B2C2A5)
  - 溪流蓝：淡蓝色 (#A1CCD1, #87CEEB)
  - 点缀色：宝石蓝、活力橙、胭脂红
- **字体**: 思源黑体、苹方、Lato、Nunito
- **布局**: 非对称网格、卡片式设计、大量留白

## 技术栈

- **框架**: Next.js 14 (App Router)
- **语言**: TypeScript
- **样式**: Tailwind CSS
- **动画**: Framer Motion
- **图标**: Lucide React
- **字体**: Google Fonts

## 快速开始

### 安装依赖
```bash
npm install
```

### 开发模式
```bash
npm run dev
```

### 构建生产版本
```bash
npm run build
```

### 启动生产服务器
```bash
npm start
```

## 项目结构

```
micro-fishing-beginners-hub/
├── app/                    # Next.js App Router
│   ├── globals.css        # 全局样式
│   ├── layout.tsx         # 根布局
│   ├── page.tsx           # 首页
│   └── beginners/         # 新手必读页面
├── components/            # React 组件
│   ├── Navigation.tsx     # 导航栏
│   ├── Footer.tsx         # 页脚
│   ├── HeroSection.tsx    # 英雄区域
│   ├── FeaturedSection.tsx # 特色内容
│   ├── AboutSection.tsx   # 关于区域
│   └── StatsSection.tsx   # 统计区域
├── public/               # 静态资源
├── tailwind.config.js    # Tailwind 配置
├── next.config.js        # Next.js 配置
└── package.json          # 项目依赖
```

## 设计系统

### 色彩变量
```css
/* 主色调 */
--primary-white: #FFFFFF
--primary-warm-gray: #F8F8F6
--primary-text: #333333

/* 辅助色 */
--natural-mint: #A8D8B9
--natural-sage: #B2C2A5
--stream-blue: #A1CCD1
--stream-light: #87CEEB
--earth-beige: #D2B48C

/* 点缀色 */
--fish-gem-blue: #4A90E2
--fish-vibrant-orange: #FF6B35
--fish-crimson: #E74C3C
```

### 组件类名
```css
.btn-primary          /* 主要按钮样式 */
.btn-secondary       /* 次要按钮样式 */
.card                /* 卡片组件样式 */
.section-padding     /* 区域内边距 */
.container-custom    /* 自定义容器 */
.text-gradient       /* 渐变文字 */
.glass-effect        /* 毛玻璃效果 */
```

## 页面结构

### 首页 (/)
- 英雄区域：全屏背景 + 主要标语
- 特色内容：新手必读、装备库、鱼种图鉴、社区
- 关于区域：小物钓理念介绍
- 统计区域：网站数据展示

### 新手必读 (/beginners)
- 入门指南列表
- 分步式教学内容
- 社区引导

### 装备库 (/equipment)
- 装备分类展示
- 产品详情页
- 新手推荐标签

### 技巧堂 (/techniques)
- 技巧分类
- 视频教学
- 图文教程

### 鱼种图鉴 (/fish-guide)
- 鱼种卡片展示
- 详细信息页
- 垂钓技巧

### 玩家社区 (/community)
- 瀑布流布局
- 用户分享
- 互动功能

## 开发指南

### 添加新页面
1. 在 `app/` 目录下创建新的文件夹
2. 添加 `page.tsx` 文件
3. 在导航组件中添加链接

### 添加新组件
1. 在 `components/` 目录下创建新文件
2. 使用 TypeScript 和 Tailwind CSS
3. 遵循现有的设计规范

### 样式指南
- 使用 Tailwind CSS 类名
- 遵循设计系统的色彩方案
- 保持一致的间距和圆角
- 添加适当的动画效果

## 贡献指南

1. Fork 项目
2. 创建功能分支
3. 提交更改
4. 推送到分支
5. 创建 Pull Request

## 许可证

MIT License

## 联系我们

- 邮箱: hello@microfishing.com
- GitHub: https://github.com/micro-fishing-hub

---

**小物之美** - 发现微小世界的美好 🌿 