import React, { useState } from 'react';
import './css/PricingSection.css';
import Checkmark from './assets/Checkmark.png';
import CheckmarkWhite from './assets/CheckmarkWhite.png';

interface PricingPlan {
  title: string;
  price: string;
  features: string[];
  isHighlighted?: boolean;
}

const PricingSection: React.FC = () => {
  const [billingCycle, setBillingCycle] = useState<'Mo' | 'Yr'>('Mo');

  const pricingPlans: PricingPlan[] = [
    {
      title: 'Free trial',
      price: '$0',
      features: [
        'For small teams – 5 users',
        'Community support'
      ]
    },
    {
      title: 'Lite',
      price: '$99',
      features: [
        'For small teams – 15 users',
        'Individual support',
        'Individual data – 60GB'
      ]
    },
    {
      title: 'Basic',
      price: '$199',
      features: [
        'For big teams – 30 users',
        'Individual support',
        'Individual data – 120GB',
        'Advanced permissions'
      ],
      isHighlighted: true
    },
    {
      title: 'For enterprises',
      price: 'Custom',
      features: [
        'Unlimited team members',
        'Individual support',
        'Unlimited Individual data',
        'Advanced permissions',
        'Data history',
        'Audit log',
        'All functions included'
      ]
    }
  ];

  const getPrice = (price: string, title: string) => {
    if (price === 'Custom') return price;
    if (title === 'Free trial') return '$0';
    const monthlyPrice = parseFloat(price.replace('$', ''));
    const yearlyPrice = (monthlyPrice * 12 * 0.9).toFixed(2);
    return billingCycle === 'Mo' ? `$${monthlyPrice}` : `$${yearlyPrice}`;
  };

  return (
    <section className="pricing-section">
      <h2 className="pricing-title">Our pricing</h2>
      <div className="pricing-cards">
        {pricingPlans.map((plan, index) => (
          <div 
            key={index} 
            className={`pricing-card ${plan.isHighlighted ? 'highlighted' : ''}`}
          >
            <div className="title-price">
              <h3 className="plan-title">{plan.title}</h3>
              <div className="price-container">
                <span className="price">{getPrice(plan.price, plan.title)}</span>
                <div className="billing-toggle">
                  <button 
                    className={`toggle-btn ${billingCycle === 'Mo' ? 'active' : ''}`}
                    onClick={() => setBillingCycle('Mo')}
                  >
                    Mo
                  </button>
                  <button 
                    className={`toggle-btn ${billingCycle === 'Yr' ? 'active' : ''}`}
                    onClick={() => setBillingCycle('Yr')}
                    disabled={plan.title === 'Free trial'}
                  >
                    Yr
                  </button>
                </div>
              </div>
            </div>
            <button className="choose-plan-btn">
              Choose plan
            </button>
            <div className="features-list">
              {plan.features.map((feature, featureIndex) => (
                <div key={featureIndex} className="feature-item">
                  <img 
                    src={plan.title === 'Basic' ? CheckmarkWhite : Checkmark}
                    alt="checkmark" 
                    className="checkmark"
                  />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PricingSection;