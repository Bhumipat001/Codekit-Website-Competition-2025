import React, { useState } from 'react';
import './css/TestimonialsSection.css';
import AlexBern from './assets/AlexBern.png';
import RubenChifundo from './assets/RubenChifundo.png';
import TigranNazaret from './assets/TigranNazaret.png';
import Previous from './assets/Previous.png';
import Next from './assets/Next.png';

interface Testimonial {
  image: string;
  name: string;
  role: string;
  description: string;
}

const TestimonialsSection: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      image: AlexBern,
      name: 'Alex Bern',
      role: 'CEO by PixelPerfect',
      description: '"Ut enim ad minima veniam, quis nostrum exercitationem ullam corpor suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis utem vel eum iure reprehender qui in ea voluptate velit esse quam nihil molesti consequatur, vel illum."'
    },
    {
      image: RubenChifundo,
      name: 'Ruben Chifundo',
      role: 'CEO by NOX',
      description: '"Ut enim ad minima veniam, quis nostrum exercitationem ullam corpor suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis utem vel eum iure reprehender qui in ea voluptate velit esse quam nihil molesti consequatur, vel illum."'
    },
    {
      image: TigranNazaret,
      name: 'Tigran Nazaret',
      role: 'Data analyst',
      description: '"Ut enim ad minima veniam, quis nostrum exercitationem ullam corpor suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis utem vel eum iure reprehender qui in ea voluptate velit esse quam nihil molesti consequatur, vel illum."'
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : prev));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < testimonials.length - 3 ? prev + 1 : prev));
  };

  return (
    <section className="testimonials-section">
      <div className="testimonials-header">
        <h2>Testimonials</h2>
        <div className="controls">
          <button 
            className={`control-btn ${currentIndex === 0 ? 'disabled' : ''}`}
            onClick={handlePrev}
          >
            <img src={Previous} alt="Previous" />
          </button>
          <button 
            className={`control-btn ${currentIndex >= testimonials.length - 3 ? 'disabled' : ''}`}
            onClick={handleNext}
          >
            <img src={Next} alt="Next" />
          </button>
        </div>
      </div>
      
      <div className="testimonials-container">
        {testimonials.slice(currentIndex, currentIndex + 3).map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <div className="profile">
              <div className="profile-image">
                <img src={testimonial.image} alt={testimonial.name} />
              </div>
              <div className="profile-info">
                <h3>{testimonial.name}</h3>
                <p>{testimonial.role}</p>
              </div>
            </div>
            <p className="testimonial-text">{testimonial.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;