import Link from 'next/link';
import React from 'react'

export default function Blogs() {
  const blogs = [
    {
      id: 1,
      title: "Getting Started with Next.js",
      description:
        "Learn the basics of Next.js and build fast, modern web applications with React.",
      author: "Nusrat Jahan",
      category: "Web Development",
      date: "2026-10-01",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      tags: ["Next.js", "React", "JavaScript"],
    },
    {
      id: 2,
      title: "Mastering Tailwind CSS",
      description:
        "Discover how Tailwind CSS helps you create beautiful and responsive user interfaces quickly.",
      author: "John Smith",
      category: "CSS",
      date: "2026-10-03",
      image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8",
      tags: ["Tailwind CSS", "CSS", "Design"],
    },
    {
      id: 3,
      title: "Understanding JavaScript Arrays",
      description:
        "Explore essential JavaScript array methods such as map, filter, reduce, and find.",
      author: "Sarah Ahmed",
      category: "JavaScript",
      date: "2026-10-05",
      image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4",
      tags: ["JavaScript", "Arrays", "Programming"],
    },
    {
      id: 4,
      title: "Building Responsive Websites",
      description:
        "Learn practical techniques for creating websites that work smoothly on mobile, tablet, and desktop.",
      author: "Alex Brown",
      category: "Web Design",
      date: "2026-10-08",
      image: "https://images.unsplash.com/photo- responsive-web-design",
      tags: ["Responsive Design", "HTML", "CSS"],
    },
  ];
  return (
    <div className="grid grid-cols-4 mt-4">
      {blogs.map((blog) => (
        <div key={blog.id}>
          <h1 className="text-2xl font-bold pb-2">{blog.author}</h1>
          <Link href={`/blogs/${blog.id}`} className="btn">
            show more
          </Link>
        </div>
      ))}
    </div>
  );
}
