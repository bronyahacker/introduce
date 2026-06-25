export const siteConfig = {
  name: "Shuhang's Nest",
  description: "魏书航的个人博客 — 记录学习、思考与创造。",
  url: "https://shuhang-blog.vercel.app",
  author: {
    name: "魏书航",
    role: "Developer & Creator",
    bio: "热爱技术与设计，用代码构建美好的数字体验。专注于 React、TypeScript 和现代 Web 开发。",
    avatar: "/avatar-placeholder.svg",
  },
  navLinks: [
    { href: "/", label: "首页" },
    { href: "/blog", label: "博客" },
    { href: "/about", label: "关于" },
  ],
  socialLinks: [
    { href: "https://github.com", label: "GitHub" },
  ],
  typewriterPhrases: [
    "用代码构建数字体验。",
    "探索技术的无限可能。",
    "记录学习与思考。",
    "创造美好的界面与交互。",
  ],
} as const;
