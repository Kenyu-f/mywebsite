# 📝 ブログ記事の追加方法 / How to Add Blog Posts

## 日本語版

### 記事の追加手順

1. **`content/posts`フォルダを開く**
   
2. **新しいMarkdownファイルを作成**
   - ファイル名は英語で、ハイフン区切り: `my-new-post.md`
   - このファイル名がURLになります（例: `/blog/my-new-post`）

3. **以下のテンプレートをコピー＆ペースト**

```markdown
---
title: "記事のタイトル"
date: "2024-01-25"
excerpt: "記事の短い説明文（150文字程度）"
---

# 見出し

ここに本文を書きます。

## 小見出し

Markdownの基本的な記法が使えます：

- **太字**
- *斜体*
- [リンク](https://example.com)
- \`コード\`
```

4. **内容を編集**
   - \`title\`: 記事のタイトル
   - \`date\`: 投稿日（YYYY-MM-DD形式）
   - \`excerpt\`: 一覧ページに表示される説明文
   - \`---\`の下に本文を書く

5. **ファイルを保存**
   - 自動的にブログに反映されます！
   - 最新の記事が一番上に表示されます

### Markdownの基本

```markdown
# 大見出し
## 中見出し
### 小見出し

**太字** または __太字__
*斜体* または _斜体_

- リスト項目1
- リスト項目2

1. 番号付きリスト
2. 番号付きリスト

[リンクテキスト](https://example.com)

![画像の説明](画像のURL)

\`インラインコード\`

\\\`\\\`\\\`javascript
// コードブロック
const hello = "world";
\\\`\\\`\\\`
```

---

## English Version

### How to Add a Blog Post

1. **Open the \`content/posts\` folder**

2. **Create a new Markdown file**
   - Use kebab-case for the filename: \`my-new-post.md\`
   - This filename becomes the URL (e.g., \`/blog/my-new-post\`)

3. **Copy and paste this template**

```markdown
---
title: "Your Article Title"
date: "2024-01-25"
excerpt: "A brief description of your article (around 150 characters)"
---

# Main Heading

Write your content here.

## Subheading

You can use basic Markdown syntax:

- **Bold text**
- *Italic text*
- [Links](https://example.com)
- \`Code\`
```

4. **Edit the content**
   - \`title\`: Your article title
   - \`date\`: Publication date (YYYY-MM-DD format)
   - \`excerpt\`: Short description shown on the blog list page
   - Write your content below the \`---\`

5. **Save the file**
   - It will automatically appear on your blog!
   - The latest posts appear at the top

### Markdown Basics

```markdown
# Heading 1
## Heading 2
### Heading 3

**Bold** or __Bold__
*Italic* or _Italic_

- List item 1
- List item 2

1. Numbered list
2. Numbered list

[Link text](https://example.com)

![Image alt text](image-url)

\`Inline code\`

\\\`\\\`\\\`javascript
// Code block
const hello = "world";
\\\`\\\`\\\`
```

### Tips

- Use descriptive filenames (they become URLs)
- Keep excerpts concise and engaging
- Add proper dates to keep posts organized
- Use headings to structure your content
- Preview locally before deploying: \`npm run dev\`

### スキルスタックのカスタマイズ / Customizing Skills

スキルスタックを編集するには、\`components/skills-dialog.tsx\`を開いて、以下の配列を編集してください：

To customize your skills, open \`components/skills-dialog.tsx\` and edit these arrays:

```typescript
const programmingLanguages = ["JavaScript", "TypeScript", "Python", ...]
const frameworks = ["React", "Next.js", "Node.js", ...]
const languages = [
  { name: "Japanese", level: "Native" },
  ...
]
```
