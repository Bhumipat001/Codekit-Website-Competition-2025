import React, { useState } from 'react';
import './css/ReviewsSection.css';
import AlexBern from './assets/AlexBern.png';
import RubenChifundo from './assets/RubenChifundo.png';
import Previous from './assets/Previous.png';
import Next from './assets/Next.png';

interface Review {
  id: number;
  name: string;
  role: string;
  image: string;
  content: string;
}

const reviews: Review[] = [
  {
    id: 1,
    name: "Alex Bern",
    role: "CEO by PixelPerfect",
    image: AlexBern,
    content: "“Ut enim ad minima veniam, quis nostrum exercitationem ullam corpor suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis utem vel eum iure reprehender qui in ea voluptate velit esse quam nihil molesti consequatur, vel illum.”"
  },
  {
    id: 2,
    name: "Ruben Chifundo",
    role: "CEO by NOX",
    image: RubenChifundo,
    content: "“Ut enim ad minima veniam, quis nostrum exercitationem ullam corpor suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis utem vel eum iure reprehender qui in ea voluptate velit esse quam nihil molesti consequatur, vel illum.”"
  }
];

const ReviewsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : reviews.length - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < reviews.length - 1 ? prev + 1 : 0));
  };

  return (
    <section className="reviews-section">
      <div className="title-container">
        <h2>What our customers say</h2>
        <div className="title-line"></div>
      </div>

      <div className="controls">
        <button 
          className={`control-btn ${currentIndex === 0 ? 'disabled' : ''}`}
          onClick={handlePrev}
        >
          <img src={Previous} alt="Previous" />
        </button>
        <button 
          className="control-btn"
          onClick={handleNext}
        >
          <img src={Next} alt="Next" />
        </button>
      </div>

      <div className="reviews-container">
        {reviews.slice(currentIndex, currentIndex + 2).map((review) => (
          <div key={review.id} className="review-card">
            <div className="reviewer-info">
              <img src={review.image} alt={review.name} className="reviewer-image" />
              <div className="reviewer-details">
                <h3>{review.name}</h3>
                <p>{review.role}</p>
              </div>
            </div>
            <p className="review-content">{review.content}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ReviewsSection;