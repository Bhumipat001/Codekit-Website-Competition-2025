import React, { useState } from 'react';
import './css/PricingSection.css';
import Checkmark from './assets/Checkmark.png';

const PricingSection: React.FC = () => {
  const [isMonthly, setIsMonthly] = useState(true);

  const plans = [
    {
      title: 'Starter',
      price: 'Free',
      description: 'Trial plan for starters',
      features: [
        'For small teams – 5 users',
        'Community support',
        'Individual data – 20GB'
      ],
      buttonVariant: 'outline'
    },
    {
      title: 'Professional',
      price: isMonthly ? '$20' : '$200',
      description: 'For users who want more',
      features: [
        'For small teams – 15 users',
        'Individual support',
        'Individual data – 60GB'
      ],
      buttonVariant: 'solid'
    },
    {
      title: 'Organization',
      price: isMonthly ? '$50' : '$500',
      description: 'The best solution for Pro',
      features: [
        'For big teams – unlimited',
        'Individual support',
        'Individual data – unlimited',
        'Data history'
      ],
      buttonVariant: 'solid'
    }
  ];

  return (
    <section className="pricing-section">
      <div className="pricing-header">
        <div className="title-line">
          <h2>Our pricing</h2>
          <div className="line"></div>
        </div>
        <div className="pricing-toggle">
          <button 
            className={`toggle-btn ${isMonthly ? 'active' : ''}`}
            onClick={() => setIsMonthly(true)}
          >
            Monthly
          </button>
          <button 
            className={`toggle-btn ${!isMonthly ? 'active' : ''}`}
            onClick={() => setIsMonthly(false)}
          >
            Yearly
          </button>
        </div>
      </div>

      <div className="pricing-cards">
        {plans.map((plan, index) => (
          <div key={index} className="pricing-card">
            <div className="card-content">
              <div className="title-price">
                <h3>{plan.title}</h3>
                <div className="price-container">
                  <span className="price">{plan.price}</span>
                  {plan.price !== 'Free' && 
                    <span className="price-period">per editor/month</span>
                  }
                </div>
                <p className="description">{plan.description}</p>
              </div>

              <button className={`get-started-btn ${plan.buttonVariant}`}>
                Get started
              </button>

              <div className="features">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="feature">
                    <img 
                      src={Checkmark}
                      alt="checkmark" 
                      className="checkmark"
                    />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PricingSection;