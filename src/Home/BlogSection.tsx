import React from 'react';
import './css/BlogSection.css';

interface BlogCardProps {
  date: string;
  title: string;
  description: string;
}

const defaultBlogs: BlogCardProps[] = [
  {
    date: "22 June 2020",
    title: "Sed ut perspiciatis unde omnis at vero blanditils",
    description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti..."
  },
  {
    date: "22 June 2020",
    title: "Sed ut perspiciatis unde omnis at vero blanditils",
    description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti..."
  },
  {
    date: "22 June 2020",
    title: "Sed ut perspiciatis unde omnis at vero blanditils",
    description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti..."
  }
];

const BlogSection: React.FC = () => {
  return (
    <section className="blog-section">
      <h1 className="blog-title">Glad to help your success</h1>
      <div className="blog-content">
        <div className="blog-cards">
          {defaultBlogs.map((blog, index) => (
            <div key={index} className="blog-card">
              <span className="date">{blog.date}</span>
              <div className="content-tags">
                <h2 className="card-title">{blog.title}</h2>
                <p className="description">{blog.description}</p>
                <div className="tags">
                  <div className="tag">
                    <span>Proxy</span>
                  </div>
                  <div className="tag">
                    <span>VPN</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button className="learn-more">Learn more</button>
      </div>
    </section>
  );
};

export default BlogSection;

