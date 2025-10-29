# Blog System - Usage Guide

## Overview

This blog system uses markdown files to automatically generate blog posts with full SEO optimization, clean URLs, and responsive design.

## Creating a New Blog Post

### Step 1: Create a Markdown File

Create a new `.md` file in the `/content/blog/` directory. The filename will become the URL slug.

Example: `content/blog/ai-revolution-is-here.md` → `yourdomain.com/blog/ai-revolution-is-here`

### Step 2: Add Frontmatter

At the top of your markdown file, add frontmatter with metadata:

```markdown
---
title: "Your Post Title Here"
date: "2025-10-28"
excerpt: "A brief summary of your post (1-2 sentences). This appears in previews and meta descriptions."
author: "Shawn Sloan"
tags: ["AI", "Technology", "Business"]
featured_image: "/images/blog/your-image.jpg"  # Optional
---
```

### Step 3: Write Your Content

Below the frontmatter, write your content in standard markdown:

```markdown
# Main Heading

Your introduction paragraph goes here.

## Subheading

More content with **bold** and *italic* text.

### Another Section

- Bullet point one
- Bullet point two

> Quote or callout text

\`\`\`javascript
// Code blocks with syntax highlighting
function example() {
  console.log("Hello World")
}
\`\`\`
```

## Frontmatter Fields

| Field | Required | Description |
|-------|----------|-------------|
| `title` | Yes | The post title (appears in heading and SEO) |
| `date` | Yes | Publication date in YYYY-MM-DD format |
| `excerpt` | Yes | Brief summary for previews and SEO (1-2 sentences) |
| `author` | No | Author name (defaults to "Shawn Sloan") |
| `tags` | No | Array of tags for categorization |
| `featured_image` | No | Path to a featured image |

## Markdown Features Supported

- **Headings**: # H1, ## H2, ### H3, etc.
- **Emphasis**: *italic*, **bold**
- **Lists**: Ordered and unordered
- **Links**: [text](url)
- **Images**: ![alt](url)
- **Code**: Inline `code` and code blocks with syntax highlighting
- **Blockquotes**: > quote
- **Tables**: Standard markdown tables
- **Horizontal Rules**: ---

## SEO Optimization

Each blog post automatically generates:

1. **Meta Tags**:
   - `<title>` tag from post title
   - Meta description from excerpt
   - Open Graph tags for social sharing

2. **Structured Data**:
   - JSON-LD markup for search engines
   - Article schema with publish date, author, tags

3. **Clean URLs**:
   - SEO-friendly slugs from filename
   - No file extensions in URLs

4. **Performance**:
   - Static generation at build time
   - Optimized images
   - Fast page loads

## Workflow

1. **Write** your markdown file in `/content/blog/`
2. **Commit** the file to your repository
3. **Build** runs automatically on deploy
4. **Post** appears on `/blog` page

## Tips

- Use descriptive filenames (they become URLs)
- Keep excerpts concise and compelling
- Add relevant tags for discoverability
- Use clear, hierarchical headings (H2, H3, etc.)
- Break up long content with subheadings
- Include code examples when relevant
- Optimize images before adding them

## Example Post Structure

```markdown
---
title: "How AI is Transforming Small Business Operations"
date: "2025-10-28"
excerpt: "Discover how small businesses are leveraging AI to compete with enterprise-level operations without enterprise budgets."
author: "Shawn Sloan"
tags: ["AI", "Small Business", "Operations"]
---

# How AI is Transforming Small Business Operations

Introduction paragraph that hooks the reader...

## The Problem

Describe the current challenge...

## The Solution

Explain your approach...

## Real-World Examples

Share concrete examples...

## What's Next

Call to action or next steps...
```

## Need Help?

- Check `example-post.md` for a working example
- All markdown files in `/content/blog/` automatically become posts
- Questions? Reach out via the contact form
