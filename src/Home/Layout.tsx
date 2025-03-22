import React from 'react';
import Header from './Header';
import HeroSection from './HeroSection';
import ClientLogos from './Logos';
import AdvantagesSection from './AdvantagesSection';
import FeatureSection from './FeatureSection';
import BlogSection from './BlogSection';
import ReviewsSection from './ReviewsSection';
import CompanyOverviewSection from './CompanyOverviewSection';
import ContactUsSection from './ContactUsSection';
import SubscribeSection from './SubscribeSection';
import FooterSection from './FooterSection';
import './css/Layout.css';

const Layout: React.FC = () => {
  return (
    <div className="layout">
      <Header />
      <HeroSection />
      <ClientLogos />
      <AdvantagesSection />
      <FeatureSection />
      <BlogSection />
      <ReviewsSection />
      <CompanyOverviewSection />
      <ContactUsSection />
      <SubscribeSection />
      <FooterSection />
    </div>
  );
};

export default Layout;
