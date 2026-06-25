---
title: "Building Beautiful UIs with shadcn/ui"
date: "2025-06-10"
excerpt: "Discover how shadcn/ui empowers you to build accessible, customizable, and beautiful user interfaces by giving you full control over your component code."
tags: ["react", "design", "typescript"]
---

## What Makes shadcn/ui Different?

Unlike traditional npm packages, shadcn/ui integrates by copying source code directly into your project. This gives you full ownership and control over every component.

### Core Principles

- **Own your code**: Components live in your repo, not in node_modules
- **Accessibility first**: Built on Radix UI primitives
- **Customizable**: Modify any component to fit your needs
- **Beautiful by default**: Professionally designed components
- **Tailwind CSS**: Uses the utility-first approach you already know

## Setting Up

```bash
npx shadcn@latest init
npx shadcn@latest add button card dialog
```

This creates a `components/ui/` directory with fully typed, accessible components you can modify freely.

## Composing Components

The real power of shadcn/ui comes from composition:

```tsx
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

function FeatureCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Amazing Feature</CardTitle>
      </CardHeader>
      <CardContent>
        <p>Build something incredible with our powerful tools.</p>
        <Button className="mt-4">Get Started</Button>
      </CardContent>
    </Card>
  );
}
```

## Theming

shadcn/ui supports deep customization through CSS variables. You can create entirely new themes by changing a few variables:

```css
:root {
  --background: 240 10% 3.9%;
  --foreground: 0 0% 98%;
  --primary: 263.4 70% 50.4%;
}
```

## Conclusion

shadcn/ui strikes the perfect balance between ready-to-use components and full creative control. It's become the standard choice for React UI development, and for good reason.
