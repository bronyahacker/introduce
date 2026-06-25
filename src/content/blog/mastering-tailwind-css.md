---
title: "Mastering Tailwind CSS v4"
date: "2025-06-15"
excerpt: "Dive deep into Tailwind CSS v4's new CSS-first configuration, container queries, and improved performance. Learn how to build beautiful UIs faster than ever."
tags: ["css", "tailwind", "design"]
---

## The Evolution of Tailwind CSS

Tailwind CSS v4 represents a fundamental shift in how we configure and use the framework. The new CSS-first configuration model makes it more performant and easier to set up.

### What's New in v4

- **CSS-first configuration**: No more `tailwind.config.js`
- **Native CSS cascade layers**: Better specificity control
- **Zero-config content detection**: No need to configure content paths
- **Container queries**: Built-in responsive design at the component level
- **3x faster builds**: Thanks to the new Oxide engine

## CSS-First Configuration

The biggest change in v4 is moving configuration entirely to CSS:

```css
@import "tailwindcss";

@theme {
  --color-primary: #8B5CF6;
  --color-secondary: #06B6D4;
  --font-display: "Cabinet Grotesk", sans-serif;
}
```

This approach means Tailwind integrates seamlessly with your existing CSS, and tools like PostCSS plugin ordering are no longer an issue.

## Container Queries

Component-level responsiveness has never been easier:

```html
<div class="@container">
  <div class="grid grid-cols-1 @md:grid-cols-2 @lg:grid-cols-3">
    <!-- Cards that respond to their container, not the viewport -->
  </div>
</div>
```

## Performance

The new Oxide engine compiles CSS up to 5x faster in development and 3x faster in production builds. The JIT engine is now the only engine, making the development experience consistently fast.

## Conclusion

Tailwind CSS v4 is a massive improvement that makes utility-first CSS even more powerful and performant. The CSS-first configuration is the right direction for the ecosystem.
