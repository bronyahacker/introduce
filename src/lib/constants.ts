export const siteConfig = {
  name: "Bronya",
  description: "Bronya 的个人博客 — 记录学习、思考与创造。",
  url: "https://bronya.vercel.app",
  author: {
    name: "Bronya",
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
    { href: "https://github.com/bronyahacker", label: "GitHub" },
  ],
  typewriterPhrases: [
    "Hello, I'm Bronya.",
    "Welcome to my blog.",
    "Exploring the future of tech.",
    "Building cool stuff.",
  ],
} as const;
