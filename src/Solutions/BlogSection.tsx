import React from 'react';
import './css/BlogSection.css';
import StaffingSoftware from './assets/StaffingSoftware.png';
import SoftwareDevelopment from './assets/SoftwareDevelopment.png';
import BusinessAnalysis from './assets/BusinessAnalysis.png';
import Arrow from './assets/Arrow.png';
 
interface BlogPost {
  date: string;
  title: string;
  image: string;
}

const BlogSection: React.FC = () => {
  const blogPosts: BlogPost[] = [
    {
      date: '22 June 2022',
      title: 'Staffing software: key capabilities and top products',
      image: StaffingSoftware,
    },
    {
      date: '22 June 2022',
      title: '2022 software development trends explained with benefits',
      image: SoftwareDevelopment,
    },
    {
      date: '22 June 2022',
      title: 'Business analysis helps you in finance',
      image: BusinessAnalysis,
    },
  ];

  return (
    <section className="blog-section">
      <div className="blog-title">
        <h2>Ensome blog</h2>
        <div className="title-line"></div>
      </div>
      
      <div className="blog-cards">
        {blogPosts.map((post, index) => (
          <div key={index} className="blog-card">
            <div className="blog-image">
              <img src={post.image} alt={post.title} />
            </div>
            <div className="blog-content">
              <span className="blog-date">{post.date}</span>
              <h3 className="blog-card-title">{post.title}</h3>
              <button className="read-more">
                Read more
                <img src={`${Arrow}`} alt="arrow" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogSection;

