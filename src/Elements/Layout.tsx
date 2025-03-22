import React from 'react';
import './css/Layout.css';
import Header_HeroSection from './Header_HeroSection';
import FeaturesSection from './FeaturesSection';
import CompanyOverviewSection from './CompanyOverviewSection';
import BenefitsSection from './BenefitsSection';
import TestimonialsSection from './TestimonialsSection';
import PricingSection from './PricingSection';
import BlogSection from './BlogSection';
import ContactUsSection from './ContactUsSection';
import SubscribeSection from './SubscribeSection';
import Footer from './Footer';

const Layout: React.FC = () => {
  return (
    <div className="layout-container">
      <Header_HeroSection />
      <FeaturesSection />
      <CompanyOverviewSection />
      <BenefitsSection />
      <TestimonialsSection />
      <PricingSection />
      <BlogSection />
      <ContactUsSection />
      <SubscribeSection />
      <Footer />
    </div>
  );
};

export default Layout;