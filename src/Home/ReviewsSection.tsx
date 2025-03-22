import React, { useState } from 'react';
import './css/ReviewsSection.css';
import AlexBern1 from './assets/AlexBern1.png';
import AlexBern2 from './assets/AlexBern2.png';
import Previous from './assets/Previous.png';
import Next from './assets/Next.png';

interface Review {
  id: number;
  name: string;
  title: string;
  description: string;
  image: string;
}

const ReviewsSection: React.FC = () => {
  const reviews: Review[] = [
    {
      id: 1,
      name: "Alex Bern",
      title: "CEO by PixelPerfect",
      description: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum.",
      image: AlexBern1
    },
    {
      id: 2,
      name: "Alex Bern",
      title: "CEO by NOX",
      description: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum.",
      image: AlexBern2
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex(prev => (prev > 0 ? prev - 1 : 0));
  };

  const handleNext = () => {
    setCurrentIndex(prev => (prev < reviews.length - 2 ? prev + 1 : prev));
  };

  return (
    <section className="reviews-section">
      <div className="reviews-header">
        <h1>Trusted by the best in the business</h1>
        <div className="controls">
          <button 
            className={`control-btn ${currentIndex === 0 ? 'disabled' : ''}`}
            onClick={handlePrev}
          >
            <img src={Previous} alt="Previous" />
          </button>
          <button 
            className={`control-btn ${currentIndex >= reviews.length - 2 ? 'disabled' : ''}`}
            onClick={handleNext}
          >
            <img src={Next} alt="Next" />
          </button>
        </div>
      </div>
      <div className="reviews-container">
        {reviews.slice(currentIndex, currentIndex + 2).map((review) => (
          <div key={review.id} className="review-card">
            <div className="review-image">
              <img src={review.image} alt={review.name} />
            </div>
            <div className="review-content">
              <p className="review-description">{review.description}</p>
              <div className="review-author">
                <h3 className="author-name">{review.name}</h3>
                <p className="author-title">{review.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ReviewsSection;

