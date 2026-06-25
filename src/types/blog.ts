export interface BlogFrontMatter {
  title: string;
  date: string;
  excerpt: string;
  tags: string[];
  coverImage?: string;
  slug: string;
}

export interface BlogPost {
  slug: string;
  frontMatter: BlogFrontMatter;
  contentHtml: string;
  readingTime: number;
}
