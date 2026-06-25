---
title: "Getting Started with Next.js 15"
date: "2025-06-20"
excerpt: "Learn how to build modern web applications with Next.js 15 and its powerful new features including the App Router and React Server Components."
tags: ["react", "nextjs", "typescript"]
---

## Why Next.js?

Next.js has become the go-to framework for building React applications. With version 15, it introduces even more powerful features that make web development faster and more enjoyable.

### Key Features

- **App Router**: A new file-system based router built on React Server Components
- **Server Actions**: Mutate data on the server without building an API
- **Partial Prerendering**: The best of static and dynamic in one page
- **Streaming**: Progressive rendering for faster initial page loads

## Getting Started

To create a new Next.js project, run:

```bash
npx create-next-app@latest my-app --typescript --app
```

This sets up everything you need with sensible defaults.

### Project Structure

The App Router introduces a new directory structure under `app/`:

```
app/
├── layout.tsx      # Root layout
├── page.tsx        # Home page
├── blog/
│   ├── page.tsx    # Blog listing
│   └── [slug]/
│       └── page.tsx # Blog post
```

## React Server Components

By default, all components in the App Router are Server Components. They run on the server, reducing the JavaScript sent to the client.

```tsx
// This is a Server Component — can be async!
export default async function BlogPage() {
  const posts = await fetchPosts(); // Direct DB access
  return (
    <div>
      {posts.map(post => (
        <article key={post.slug}>{post.title}</article>
      ))}
    </div>
  );
}
```

## Conclusion

Next.js 15 represents a significant step forward in React development. Its combination of server components, streaming, and partial prerendering makes it the ideal choice for modern web applications.
