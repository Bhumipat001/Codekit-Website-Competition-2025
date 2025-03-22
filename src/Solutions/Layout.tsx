import React from 'react';
import './css/Layout.css';
import HeroSection from './HeroSection';
import FeaturesSection from './FeaturesSection';
import CompanyOverviewSection from './CompanyOverviewSection';
import BenefitsSection from './BenefitsSection';
import ReviewsSection from './ReviewsSection';
import PricingSection from './PricingSection';
import BlogSection from './BlogSection';
import ClientsLogosSection from './LogosSection';
import ContactInformationSection from './ContactInformationSection';
import SubscribeSection from './SubscribeSection';
import FooterSection from './FooterSection';

const Layout: React.FC = () => {
  return (
    <div className="layout-container">
      <HeroSection />
      <FeaturesSection />
      <CompanyOverviewSection />
      <BenefitsSection />
      <ReviewsSection />
      <PricingSection />
      <BlogSection />
      <ClientsLogosSection />
      <ContactInformationSection />
      <SubscribeSection />
      <FooterSection />
    </div>
  );
};

export default Layout;
