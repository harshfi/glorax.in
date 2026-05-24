import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, MapPin, ChevronUp, MessageCircle } from 'lucide-react';
import Home from './pages/Home';
import Products from './pages/Products';
import About from './pages/About';
import Contact from './pages/Contact';

// Scroll To Top Component on Navigation
function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // If there is no hash in URL, scroll to top
    if (!hash) {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
}

// LocalBusiness + Organization + FAQPage JSON-LD Schema Markup
function SchemaMarkup() {
  useEffect(() => {
    const schemas = [
      // 1. LocalBusiness + Organization combined
      {
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": ["LocalBusiness", "Organization"],
            "@id": "https://glorax.in/#organization",
            "name": "Glorax Metal Recycling Private Limited",
            "alternateName": ["Glorax Metal Recycling", "Glorax Copper", "Glorax Recycling"],
            "url": "https://glorax.in",
            "logo": "https://glorax.in/images/glorax-logo.png",
            "image": "https://glorax.in/images/hero-bg.svg",
            "description": "India's trusted supplier of high-purity copper scrap — Strips, Rassa, Tally, AC Pipes and Dori. GST registered private limited company based in Rai Industrial Area, Sonipat, Haryana. Pan-India delivery.",
            "foundingDate": "2023-11-03",
            "telephone": "+919971721279",
            "email": "contact@glorax.in",
            "vatID": "06AAJCV6761B1ZA",
            "legalName": "Glorax Metal Recycling Private Limited",
            "priceRange": "$$$",
            "currenciesAccepted": "INR",
            "paymentAccepted": "Bank Transfer, UPI, Cheque",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "HSIIDC Industrial Estate Phase 1, Plot No. 1830, Sector 38, Rai Industrial Area",
              "addressLocality": "Sonipat",
              "addressRegion": "Haryana",
              "postalCode": "131029",
              "addressCountry": "IN"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 28.9664,
              "longitude": 77.1082
            },
            "areaServed": {
              "@type": "Country",
              "name": "India"
            },
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
              "opens": "09:00",
              "closes": "18:00"
            },
            "sameAs": [
              "https://glorax.in"
            ],
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Copper Scrap Products",
              "itemListElement": [
                { "@type": "Offer", "itemOffered": { "@type": "Product", "name": "Copper Strips (Patti)", "description": "Flat copper strips 99.9% purity for transformers, busbars and electrical winding applications." } },
                { "@type": "Offer", "itemOffered": { "@type": "Product", "name": "Copper Rassa (Wire)", "description": "High-conductivity Millberry bare copper wire scrap 99.9% purity for re-drawing." } },
                { "@type": "Offer", "itemOffered": { "@type": "Product", "name": "Copper Tally", "description": "Refined copper tally pieces 97-99% purity for smelting foundries." } },
                { "@type": "Offer", "itemOffered": { "@type": "Product", "name": "AC Pipes (Copper Tubes)", "description": "DHP grade copper pipes and tubes from HVAC systems." } },
                { "@type": "Offer", "itemOffered": { "@type": "Product", "name": "Copper Dori", "description": "Fine copper wire bundles 99.9% purity for motor rewinding and cable manufacturing." } }
              ]
            }
          }
        ]
      },
      // 2. FAQPage schema — drives Google featured snippets
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What copper scrap products does Glorax Metal Recycling supply?",
            "acceptedAnswer": { "@type": "Answer", "text": "Glorax Metal Recycling supplies five primary copper scrap categories: Copper Strips (Patti) for transformer and busbar use, Copper Rassa (Millberry bare wire) for re-drawing, Copper Tally for foundry smelting, AC Copper Pipes (DHP grade) from HVAC systems, and Copper Dori (hair wire) for motor rewinding. All products are GST invoiced with full documentation." }
          },
          {
            "@type": "Question",
            "name": "Where is Glorax Metal Recycling located?",
            "acceptedAnswer": { "@type": "Answer", "text": "Glorax Metal Recycling Private Limited is located at Plot No. 1830, Sector 38, HSIIDC Industrial Estate Phase 1, Rai Industrial Area, Sonipat, Haryana — 131029, India. We serve buyers across all major industrial cities in India." }
          },
          {
            "@type": "Question",
            "name": "Is Glorax Metal Recycling GST registered?",
            "acceptedAnswer": { "@type": "Answer", "text": "Yes, Glorax Metal Recycling Private Limited is a fully GST-registered company with GSTIN 06AAJCV6761B1ZA, operating as a Regular taxpayer incorporated under the Registrar of Companies, Haryana since November 2023." }
          },
          {
            "@type": "Question",
            "name": "Do you deliver copper scrap across India?",
            "acceptedAnswer": { "@type": "Answer", "text": "Yes, Glorax Metal Recycling has a pan-India logistics network and delivers to major industrial hubs including Delhi NCR, Mumbai, Ahmedabad, Rajkot, Ludhiana, Chennai, Bengaluru, Hyderabad, Kolkata, and more. We coordinate with reliable freight partners for timely delivery." }
          },
          {
            "@type": "Question",
            "name": "What is the purity of copper scrap at Glorax?",
            "acceptedAnswer": { "@type": "Answer", "text": "Copper Strips and Rassa carry minimum 99.9% copper purity (ETP/Millberry grade). Copper Tally ranges from 97% to 99% purity. AC Pipes are DHP (Deoxidized High Phosphorus) grade copper. All products are inspected and graded before dispatch." }
          },
          {
            "@type": "Question",
            "name": "How can I contact Glorax Metal Recycling for bulk orders?",
            "acceptedAnswer": { "@type": "Answer", "text": "You can contact Glorax Metal Recycling at +91 99717 21279 (call or WhatsApp), email contact@glorax.in, or submit an enquiry through the contact form at glorax.in/contact. We respond within 24 hours on business days." }
          }
        ]
      },
      // 3. BreadcrumbList schema
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://glorax.in/" },
          { "@type": "ListItem", "position": 2, "name": "Products", "item": "https://glorax.in/products" },
          { "@type": "ListItem", "position": 3, "name": "About", "item": "https://glorax.in/about" },
          { "@type": "ListItem", "position": 4, "name": "Contact", "item": "https://glorax.in/contact" }
        ]
      }
    ];

    // Inject all schemas
    schemas.forEach((schema, i) => {
      const id = `glorax-schema-${i}`;
      const existing = document.getElementById(id);
      if (existing) existing.remove();
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.id = id;
      script.innerHTML = JSON.stringify(schema);
      document.head.appendChild(script);
    });

    return () => {
      [0, 1, 2].forEach(i => document.getElementById(`glorax-schema-${i}`)?.remove());
    };
  }, []);

  return null;
}


function AppContent() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Monitor scroll for header styling & scroll to top visibility
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <div className="flex flex-col min-h-screen bg-bg-warm text-near-black">
      <SchemaMarkup />
      <ScrollToTop />

      {/* 5. Navbar */}
      <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled
        ? 'bg-white/95 backdrop-blur-md shadow-md py-2 border-b border-gray-100'
        : 'bg-white py-3 border-b border-bg-warm/50'
        }`}>
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full flex items-center justify-between">
          {/* Logo — full size, no clipping */}
          <Link to="/" className="flex items-center group select-none">
            <img
              src="/images/glorax-logo.png"
              alt="Glorax Metal Recycling Pvt. Ltd."
              className="h-14 sm:h-16 w-auto object-contain transition-opacity duration-200 group-hover:opacity-80"
            />
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `font-sans font-semibold text-xs uppercase tracking-widest transition-all duration-200 ${isActive
                  ? 'text-accent border-b-2 border-accent pb-0.5'
                  : 'text-[#333] hover:text-accent'
                }`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/products"
              className={({ isActive }) =>
                `font-sans font-semibold text-xs uppercase tracking-widest transition-all duration-200 ${isActive
                  ? 'text-accent border-b-2 border-accent pb-0.5'
                  : 'text-[#333] hover:text-accent'
                }`
              }
            >
              Products
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `font-sans font-semibold text-xs uppercase tracking-widest transition-all duration-200 ${isActive
                  ? 'text-accent border-b-2 border-accent pb-0.5'
                  : 'text-[#333] hover:text-accent'
                }`
              }
            >
              About
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `font-sans font-semibold text-xs uppercase tracking-widest transition-all duration-200 ${isActive
                  ? 'text-accent border-b-2 border-accent pb-0.5'
                  : 'text-[#333] hover:text-accent'
                }`
              }
            >
              Contact
            </NavLink>
          </nav>

          {/* Right Side Call CTA Chip */}
          <div className="hidden md:flex items-center">
            <a
              href="tel:+919971721279"
              className="px-4 py-2 bg-[#F9F8F6] border border-[#EBEAE6] hover:border-accent/40 rounded-full flex items-center gap-2 font-sans font-bold text-xs text-primary hover:text-accent shadow-sm hover:shadow transition-all group"
            >
              <Phone className="h-3.5 w-3.5 text-accent transform group-hover:scale-110 transition-transform" />
              +91 99717 21279
            </a>
          </div>

          {/* Mobile Menu Hamburger Trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-primary hover:text-accent focus:outline-none cursor-pointer transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Nav Slide-in Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden fixed inset-0 top-[65px] bg-[#1C1C1C]/60 backdrop-blur-sm z-40 transition-opacity" onClick={closeMenu}>
            <div
              className="bg-white w-3/4 max-w-sm h-full shadow-2xl p-6 flex flex-col justify-between border-r border-bg-warm"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex flex-col gap-6 text-left mt-6">
                <NavLink
                  to="/"
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    `font-sans font-bold text-sm uppercase tracking-wide border-b border-gray-100 pb-2 ${isActive ? 'text-accent' : 'text-[#333]'
                    }`
                  }
                >
                  Home
                </NavLink>
                <NavLink
                  to="/products"
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    `font-sans font-bold text-sm uppercase tracking-wide border-b border-gray-100 pb-2 ${isActive ? 'text-accent' : 'text-[#333]'
                    }`
                  }
                >
                  Products
                </NavLink>
                <NavLink
                  to="/about"
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    `font-sans font-bold text-sm uppercase tracking-wide border-b border-gray-100 pb-2 ${isActive ? 'text-accent' : 'text-[#333]'
                    }`
                  }
                >
                  About
                </NavLink>
                <NavLink
                  to="/contact"
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    `font-sans font-bold text-sm uppercase tracking-wide border-b border-gray-100 pb-2 ${isActive ? 'text-accent' : 'text-[#333]'
                    }`
                  }
                >
                  Contact
                </NavLink>
              </div>

              {/* Mobile Drawer Footer Contacts */}
              <div className="space-y-4 border-t border-gray-100 pt-6 text-left">
                <p className="font-sans text-[10px] uppercase font-bold text-secondary-text tracking-wide">
                  Direct Inquiries
                </p>
                <a href="tel:+919971721279" className="flex items-center gap-3 font-sans text-xs font-bold text-primary">
                  <Phone className="h-4 w-4 text-accent" />
                  +91 99717 21279
                </a>
                <a href="mailto:contact@glorax.in" className="flex items-center gap-3 font-sans text-xs font-medium text-secondary-text">
                  <Mail className="h-4 w-4 text-accent" />
                  contact@glorax.in
                </a>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Main Pages Render */}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      {/* 4. WhatsApp CTA Floating Widget */}
      <a
        href="https://wa.me/919971721279?text=Hi%2C%20I'm%20interested%20in%20your%20copper%20products."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 bg-[#25D366] hover:bg-[#20ba59] text-white p-3.5 rounded-full shadow-2xl transition-all duration-300 hover:scale-105 group flex items-center justify-center cursor-pointer"
        aria-label="Contact us on WhatsApp"
      >
        <MessageCircle className="h-6.5 w-6.5 fill-current" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-[150px] group-hover:ml-2.5 transition-all duration-500 ease-out font-sans font-bold text-xs uppercase tracking-wider whitespace-nowrap">
          WhatsApp Us
        </span>

        {/* Radar Ring indicator */}
        <span className="absolute inset-0 rounded-full border-2 border-[#25D366] opacity-75 animate-ping -z-10 pointer-events-none" />
      </a>

      {/* Scroll to Top Arrow Button */}
      {showScrollTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-24 right-6 z-40 bg-white hover:bg-bg-warm text-primary border border-gray-200 hover:border-accent/40 p-3 rounded-full shadow-lg transition-all duration-300 cursor-pointer flex items-center justify-center"
          aria-label="Scroll to top"
        >
          <ChevronUp className="h-5 w-5" />
        </button>
      )}

      {/* 6. Footer */}
      <footer className="bg-primary text-gray-300 border-t border-accent/20 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 text-left mb-12">

          {/* Logo & Description */}
          <div className="lg:col-span-4 space-y-4">
            <Link to="/" className="flex items-center select-none">
              <div className="bg-white rounded-xl px-3 py-2 shadow-md inline-flex">
                <img
                  src="/images/glorax-logo.png"
                  alt="Glorax Metal Recycling Pvt. Ltd."
                  className="h-10 w-auto object-contain"
                />
              </div>
            </Link>
            <p className="font-sans text-xs text-gray-400 leading-relaxed max-w-sm">
              Glorax Metal Recycling Private Limited is an Indian registered company based in Rai, Haryana. We process non-ferrous copper scraps to generate sustainable raw inputs for smelting and electrical manufacturers.
            </p>
          </div>

          {/* Quick links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-sans font-bold text-[#fff] text-xs uppercase tracking-wider border-b border-white/5 pb-2">
              Sitemap
            </h4>
            <div className="flex flex-col gap-2.5 text-xs">
              <Link to="/" className="hover:text-accent transition-colors">Home</Link>
              <Link to="/products" className="hover:text-accent transition-colors">Products</Link>
              <Link to="/about" className="hover:text-accent transition-colors">About Us</Link>
              <Link to="/contact" className="hover:text-accent transition-colors">Contact</Link>
            </div>
          </div>

          {/* Products lists */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-sans font-bold text-[#fff] text-xs uppercase tracking-wider border-b border-white/5 pb-2">
              Our Products
            </h4>
            <div className="flex flex-col gap-2.5 text-xs">
              <Link to="/products#strips" className="hover:text-accent transition-colors">Strips (Patti)</Link>
              <Link to="/products#rassa" className="hover:text-accent transition-colors">Rassa (Wire)</Link>
              <Link to="/products#tally" className="hover:text-accent transition-colors">Copper Tally</Link>
              <Link to="/products#ac-pipes" className="hover:text-accent transition-colors">AC Pipes</Link>
              <Link to="/products#dori" className="hover:text-accent transition-colors">Copper Dori</Link>
            </div>
          </div>

          {/* Contacts details */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="font-sans font-bold text-[#fff] text-xs uppercase tracking-wider border-b border-white/5 pb-2">
              Facility Address
            </h4>
            <div className="space-y-3.5 text-xs">
              <div className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                <address className="not-italic text-gray-400 leading-relaxed">
                  Plot No. 1830, Sector 38, Phase 1, HSIIDC Industrial Area,<br />
                  Rai Industrial Area, Sonipat, Haryana — 131029
                </address>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 text-accent flex-shrink-0" />
                <a href="tel:+919971721279" className="hover:text-accent transition-colors">
                  +91 99717 21279
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 text-accent flex-shrink-0" />
                <a href="mailto:contact@glorax.in" className="hover:text-accent transition-colors">
                  contact@glorax.in
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full border-t border-white/5 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-center">
          <p className="font-sans text-[10px] sm:text-xs text-gray-500">
            © 2026 Glorax Metal Recycling Private Limited | GSTIN: 06AAJCV6761B1ZA | <a href="https://glorax.in" className="hover:text-accent">glorax.in</a>
          </p>

        </div>
      </footer>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}
