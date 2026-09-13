import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import DepthExperience from './components/DepthExperience';
import TrustStats from './components/TrustStats';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import ProductShowcase from './components/ProductShowcase';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import { PlanType } from './types';

export default function App() {
  const [selectedPlan, setSelectedPlan] = useState<PlanType>('Professional');

  const handleSelectPlan = (plan: PlanType) => {
    setSelectedPlan(plan);
  };

  const handleScrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToFeatures = () => {
    const el = document.getElementById('features');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#F7F8FC] text-slate-900 flex flex-col font-['Plus_Jakarta_Sans',sans-serif]">
      {/* 1. Sticky Navigation Bar */}
      <Navbar onNavigateToPlan={handleSelectPlan} />

      <main className="flex-1">
        {/* 2. Hero Section */}
        <Hero
          onStartFreeClick={handleScrollToContact}
          onExploreFeaturesClick={handleScrollToFeatures}
        />

        {/* 3. 3D / Depth Product Presentation */}
        <DepthExperience />

        {/* 4. Trust Statistics */}
        <TrustStats />

        {/* 5. Features Section */}
        <Features />

        {/* 6. How It Works Timeline */}
        <HowItWorks />

        {/* 7. Product Showcase — Fictional Launchly Dashboard Prototype */}
        <ProductShowcase />

        {/* 8. Pricing Section with Monthly/Yearly Toggle */}
        <Pricing onSelectPlan={handleSelectPlan} />

        {/* 9. Testimonials Section */}
        <Testimonials />

        {/* 10. FAQ Accordion Section */}
        <FAQ />

        {/* 11. Contact / Enquiry Form with Web3Forms Integration */}
        <ContactForm
          selectedPlan={selectedPlan}
          onPlanChange={setSelectedPlan}
        />
      </main>

      {/* 12. Professional Footer */}
      <Footer />
    </div>
  );
}
