import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowLeft, Share2, Heart } from "lucide-react";
import Link from "next/link";

// Mock blog post data - in a real app, this would come from a CMS or API
const getBlogPost = (id) => {
  const posts = {
    1: {
      title: "Mastering React Hooks: A Complete Guide",
      category: "React Tips",
      date: "2024-12-15",
      readTime: "8 min read",
      image: "/react-hooks-code-editor.png",
      color: "from-blue-400 to-cyan-400",
      content: `
# Introduction to React Hooks

React Hooks revolutionized the way we write React components by allowing us to use state and other React features in functional components. In this comprehensive guide, we'll explore the most important hooks and how to use them effectively.

## useState Hook

The \`useState\` hook is the most fundamental hook for managing state in functional components:

\`\`\`javascript
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
\`\`\`

## useEffect Hook

The \`useEffect\` hook lets you perform side effects in functional components:

\`\`\`javascript
import React, { useState, useEffect } from 'react';

function Example() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = \`You clicked \${count} times\`;
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
\`\`\`

## Custom Hooks

Creating custom hooks allows you to extract component logic into reusable functions:

\`\`\`javascript
import { useState, useEffect } from 'react';

function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return width;
}
\`\`\`

## Best Practices

1. **Always use hooks at the top level** - Don't call hooks inside loops, conditions, or nested functions
2. **Use the dependency array correctly** - Include all values from component scope that are used inside useEffect
3. **Separate concerns** - Use multiple useEffect hooks for different concerns
4. **Create custom hooks** - Extract complex logic into reusable custom hooks

## Conclusion

React Hooks provide a powerful and flexible way to manage state and side effects in functional components. By mastering these patterns, you'll be able to write cleaner, more maintainable React code.
      `,
    },
  }

  return posts[id] || null
}

// Generate static params for static export
export async function generateStaticParams() {
  return [
    { id: '1' },
  ]
}

export default function BlogPostPage({ params }) {
  const post = getBlogPost(params.id)

  if (!post) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
          <Link href="/blog">
            <Button className="bg-gradient-to-r from-cyan-500 to-purple-600">Back to Blog</Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black text-white py-20 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <div className="mb-8">
          <Link href="/blog">
            <Button
              variant="outline"
              className="border-gray-600 text-gray-300 hover:border-cyan-400 hover:text-cyan-400 bg-transparent"
            >
              <ArrowLeft size={16} className="mr-2" />
              Back to Blog
            </Button>
          </Link>
        </div>

        {/* Header */}
        <div className="mb-12">
          <Badge className={`bg-gradient-to-r ${post.color} text-black font-semibold mb-4`}>{post.category}</Badge>

          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
            {post.title}
          </h1>

          <div className="flex items-center gap-6 text-gray-400 mb-8">
            <div className="flex items-center gap-2">
              <Calendar size={16} />
              <span>{new Date(post.date).toLocaleDateString()}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={16} />
              <span>{post.readTime}</span>
            </div>
          </div>

          <img
            src={post.image || "/placeholder.svg"}
            alt={post.title}
            className="w-full h-64 md:h-96 object-cover rounded-lg mb-8"
          />
        </div>

        {/* Content */}
        <div className="prose prose-invert prose-lg max-w-none mb-12">
          <div className="text-gray-300 leading-relaxed space-y-6">
            {post.content.split("\n\n").map((paragraph, index) => {
              if (paragraph.startsWith("#")) {
                const level = paragraph.match(/^#+/)?.[0].length || 1
                const text = paragraph.replace(/^#+\s/, "")
                const HeadingTag = `h${level}`
                return (
                  <HeadingTag key={index} className="text-white font-bold mb-4">
                    {text}
                  </HeadingTag>
                )
              } else if (paragraph.startsWith("```")) {
                const code = paragraph.replace(/```\w*\n?/, "").replace(/```$/, "")
                return (
                  <pre key={index} className="bg-gray-800 p-4 rounded-lg overflow-x-auto">
                    <code className="text-cyan-400 text-sm">{code}</code>
                  </pre>
                )
              } else if (paragraph.trim()) {
                return <p key={index}>{paragraph}</p>
              }
              return null
            })}
          </div>
        </div>

        {/* Social Actions */}
        <div className="flex items-center justify-between border-t border-gray-700 pt-8">
          <div className="flex items-center gap-4">
            <Button
              variant="outline"
              className="border-red-400 text-red-400 hover:bg-red-400 hover:text-black bg-transparent"
            >
              <Heart size={16} className="mr-2" />
              Like
            </Button>
            <Button
              variant="outline"
              className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-black bg-transparent"
            >
              <Share2 size={16} className="mr-2" />
              Share
            </Button>
          </div>

          <div className="text-gray-400 text-sm">Written by Din Muhammad Rezwoan</div>
        </div>
      </div>
    </div>
  )
}
