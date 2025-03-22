import React, { useState } from 'react';
import './css/BlogSection.css';
import ISO13485 from './assets/ISO13485.png';
import BusinessAnalysis from './assets/BusinessAnalysis.png';
import WebPortalExamples from './assets/WebPortalExamples.png';
import Previous from './assets/Previous.png';
import Next from './assets/Next.png';
import ReadMore from './assets/ReadMore.png';

interface BlogPost {
  date: string;
  title: string;
  description: string;
  image: string;
}

const BlogSection: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const blogPosts: BlogPost[] = [
    {
      date: "22 June 2022",
      title: "ISO 13485 compliance of medical devices",
      description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas. Quis autem vel eum iure...",
      image: ISO13485
    },
    {
      date: "22 June 2022",
      title: "Business analysis helps you in finance",
      description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas. Quis autem vel eum iure...",
      image: BusinessAnalysis
    },
    {
      date: "22 June 2022",
      title: "5 web portal examples your business can learn from",
      description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas. Quis autem vel eum iure...",
      image: WebPortalExamples
    }
  ];

  const handlePrevious = () => {
    setCurrentPage(prev => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentPage(prev => Math.min(prev + 1, Math.ceil(blogPosts.length / 3) - 1));
  };

  return (
    <div className="blog-section">
      <div className="blog-header">
        <h2>Our blog</h2>
        <div className="blog-controls">
          <button 
            className={`control-button ${currentPage === 0 ? 'disabled' : ''}`}
            onClick={handlePrevious}
            disabled={currentPage === 0}
          >
            <img src={Previous} alt="Previous" />
          </button>
          <button 
            className="control-button"
            onClick={handleNext}
          >
            <img src={Next} alt="Next" />
          </button>
        </div>
      </div>
      <div className="blog-cards">
        {blogPosts.map((post, index) => (
          <div key={index} className="blog-card">
            <div className="blog-image">
              <img src={post.image} alt={post.title} />
            </div>
            <div className="blog-content">
              <span className="blog-date">{post.date}</span>
              <h3 className="blog-title">{post.title}</h3>
              <p className="blog-description">{post.description}</p>
              <div className="read-more">
                <span>Read more</span>
                <img src={ReadMore} alt="Read more" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogSection;