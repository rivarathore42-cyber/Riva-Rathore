/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { TilesGallery } from './components/TilesGallery';
import { GstTrustBanner } from './components/GstTrustBanner';
import { ProductCategories } from './components/ProductCategories';
import { InteractiveVisualizer } from './components/InteractiveVisualizer';
import { TileCalculator } from './components/TileCalculator';
import { CatalogSection } from './components/CatalogSection';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';
import { ProductCategoryType } from './types';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [selectedCategoryFilter, setSelectedCategoryFilter] = useState<ProductCategoryType | 'all'>('all');

  const scrollTo = (id: string) => {
    setActiveSection(id);

    // Route specific navigation targets
    if (id === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (id === 'tiles') {
      const el = document.getElementById('tiles-section');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
      return;
    }

    if (id === 'sanitaryware' || id === 'granito' || id === 'plumbing') {
      setSelectedCategoryFilter(
        id === 'granito' ? 'granite' : (id as ProductCategoryType)
      );
      const el = document.getElementById('catalog-section');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
      return;
    }

    const element = document.getElementById(`${id}-section`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleCategorySelect = (categoryId: ProductCategoryType) => {
    setSelectedCategoryFilter(categoryId);
    const element = document.getElementById('catalog-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleFeatureCardClick = (target: string) => {
    scrollTo(target);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-800 selection:bg-teal-500 selection:text-white">
      {/* 1. Header Navigation Bar styled exactly like reference image */}
      <Header onNavigate={scrollTo} activeSection={activeSection} />

      <main className="flex-grow">
        {/* 2. Hero Section + 4 Floating Cards + Contact Details Bar + Signature Bar matching reference */}
        <section id="home-section">
          <HeroSection
            onExploreCollections={() => scrollTo('tiles')}
            onSelectFeatureCard={handleFeatureCardClick}
          />
        </section>

        {/* 3. Dedicated Tiles Gallery with High-Resolution Tiles Images & Details */}
        <div id="tiles-section">
          <TilesGallery
            onOpenCalculator={() => scrollTo('calculator')}
            onOpenVisualizer={() => scrollTo('visualizer')}
          />
        </div>

        {/* 4. GST Registration & Authenticity Banner */}
        <GstTrustBanner />

        {/* 5. Complete Product Categories Grid (7+ Interactive 3D Cards) */}
        <div id="products-section">
          <ProductCategories onSelectCategory={handleCategorySelect} />
        </div>

        {/* 6. Interactive 3D Room & Surface Visualizer */}
        <div id="visualizer-section">
          <InteractiveVisualizer />
        </div>

        {/* 7. Tile & Material Box Calculator */}
        <div id="calculator-section">
          <TileCalculator />
        </div>

        {/* 8. Full Product Catalog with Filter & Search */}
        <div id="catalog-section">
          <CatalogSection
            selectedCategoryFilter={selectedCategoryFilter}
            onCategoryFilterChange={setSelectedCategoryFilter}
          />
        </div>

        {/* 9. About Firm & Quarry Sourcing */}
        <div id="about-section">
          <AboutSection />
        </div>

        {/* 10. Contact, Google Map & Instant Quote Dispatcher */}
        <div id="contact-section">
          <ContactSection />
        </div>
      </main>

      {/* Footer */}
      <Footer onNavigate={scrollTo} />

      {/* Floating Action Buttons */}
      <FloatingActions />
    </div>
  );
}
