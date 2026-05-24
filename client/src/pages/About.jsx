import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Landmark, Calendar, FileText, MapPin, BadgeCheck, Users2 } from 'lucide-react';

const companyDetails = [
  { icon: FileText, label: "GSTIN", value: "06AAJCV6761B1ZA" },
  { icon: Landmark, label: "Constitution", value: "Private Limited Company" },
  { icon: Calendar, label: "Valid From", value: "03/11/2023" },
  { icon: BadgeCheck, label: "Registration Type", value: "Regular" },
];

export default function About() {
  useEffect(() => {
    document.title = 'About Glorax Metal Recycling | GST Registered Copper Scrap Dealer Haryana';
    document.querySelector('meta[name="description"]')?.setAttribute('content',
      'Glorax Metal Recycling Pvt. Ltd. — established 2023, Sonipat Haryana. GST registered private limited company (GSTIN: 06AAJCV6761B1ZA) specializing in non-ferrous copper scrap recycling. Trusted by OfBusiness, Recykal & Adani Copper.'
    );
    document.querySelector('link[rel="canonical"]')?.setAttribute('href', 'https://glorax.in/about');
  }, []);

  return (
    <div className="w-full">
      {/* Header */}
      <section className="bg-primary text-white py-16 px-6 relative overflow-hidden">
        <div className="absolute inset-0 copper-shimmer opacity-5 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full text-left">
          <span className="text-accent font-condensed tracking-wider font-semibold text-sm uppercase block mb-3">
            Company History &amp; Identity
          </span>
          <h1 className="text-3xl sm:text-5xl font-heading font-extrabold uppercase mb-4">
            About Glorax
          </h1>
          <p className="font-sans text-gray-300 text-sm sm:text-base max-w-2xl leading-relaxed">
            A registered Private Limited metal recycling firm committed to sustainable waste reduction, rigorous quality grading, and legal compliance.
          </p>
        </div>
      </section>

      {/* Main Story & Details */}
      <section className="py-20 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start text-left">
          
          {/* Company Story */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7"
          >
            <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-[#1A1A1A] uppercase tracking-wide mb-6">
              Our Journey &amp; Values
            </h2>
            <div className="space-y-5 font-sans text-secondary-text text-sm sm:text-base leading-relaxed">
              <p>
                Glorax Metal Recycling Private Limited was established in November 2023 with a mission to industrialize and streamline the recycling sector of non-ferrous scraps. Based in Haryana's prominent industrial hub, Sonipat, we serve as an essential link in the copper manufacturing value chain.
              </p>
              <p>
                By processing scrap copper elements like wires, sheets, plates, and tubes, we deliver high-purity recycled metals to smelting operations, cable wire manufacturers, and specialized foundries. Our processes are governed by a commitment to quality and transparency.
              </p>
              <p>
                As a fully registered corporate entity with a regular GST status, we take Pride in being a reliable transactional partner. We eliminate risks related to compliance, supplying complete documentation, and guaranteeing exact quantities and grades for every contract.
              </p>
            </div>

            {/* Core Values Bullets */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              <div className="flex gap-3">
                <span className="h-2 w-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                <div>
                  <h4 className="font-sans font-bold text-sm text-primary uppercase">Unmatched Purity</h4>
                  <p className="font-sans text-xs text-secondary-text mt-1">Strict quality checkpoints for grade compliance.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <span className="h-2 w-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                <div>
                  <h4 className="font-sans font-bold text-sm text-primary uppercase">Full Legality</h4>
                  <p className="font-sans text-xs text-secondary-text mt-1">Standardized GST transactions and logistics papers.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <span className="h-2 w-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                <div>
                  <h4 className="font-sans font-bold text-sm text-primary uppercase">Industrial Focus</h4>
                  <p className="font-sans text-xs text-secondary-text mt-1">Ready to supply bulk orders matching foundry tolerances.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <span className="h-2 w-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                <div>
                  <h4 className="font-sans font-bold text-sm text-primary uppercase">Eco Recycling</h4>
                  <p className="font-sans text-xs text-secondary-text mt-1">Mitigating metal refinement emissions through recycling.</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Details Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:col-span-5 bg-white border border-[#EBEAE6] shadow-lg rounded-xl overflow-hidden"
          >
            <div className="bg-primary p-6 text-white border-b border-accent/20">
              <h3 className="font-heading font-extrabold uppercase text-lg tracking-wide">
                Corporate Identification
              </h3>
              <p className="font-sans text-gray-400 text-xs mt-1">Registered under Registrar of Companies (ROC)</p>
            </div>
            
            <div className="p-6 divide-y divide-gray-100">
              {companyDetails.map((detail, index) => {
                const Icon = detail.icon;
                return (
                  <div key={index} className="py-4 first:pt-0 last:pb-0 flex items-center gap-4">
                    <div className="bg-[#F5F3F0] p-2.5 rounded-lg flex-shrink-0">
                      <Icon className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <span className="font-sans text-[10px] uppercase font-bold text-secondary-text tracking-wide block">
                        {detail.label}
                      </span>
                      <span className="font-sans text-sm font-semibold text-primary block mt-0.5">
                        {detail.value}
                      </span>
                    </div>
                  </div>
                );
              })}
              
              <div className="py-4 pb-0 flex items-start gap-4">
                <div className="bg-[#F5F3F0] p-2.5 rounded-lg flex-shrink-0 mt-1">
                  <MapPin className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <span className="font-sans text-[10px] uppercase font-bold text-secondary-text tracking-wide block">
                    Principal Place of Business
                  </span>
                  <address className="font-sans text-xs font-semibold text-primary not-italic block mt-1 leading-relaxed">
                    HSIIDC Industrial Estate, Plot 1830, Sector 38,<br />
                    Rai Industrial Area, Sonipat, Haryana — 131029
                  </address>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* Directors Section */}
      <section className="py-20 bg-white border-y border-bg-warm">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full text-center">
          
          <div className="max-w-3xl mx-auto mb-16">
            <Users2 className="h-10 w-10 text-accent mx-auto mb-3" />
            <span className="text-accent font-condensed tracking-wider font-semibold text-sm uppercase block">
              Corporate Governance
            </span>
            <h2 className="text-3xl font-heading font-extrabold text-[#1A1A1A] uppercase tracking-wide mt-2">
              Board of Directors
            </h2>
            <p className="font-sans text-secondary-text text-xs sm:text-sm mt-3">
              Steering Glorax Metal Recycling Private Limited with strategic long-term vision, robust industrial expertise, and strong compliance management.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Director 1 */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-[#F9F8F6] p-8 rounded-2xl border border-[#EBEAE6] text-center group hover:shadow-md transition-shadow"
            >
              <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-2 border-accent mb-6 bg-primary/5 flex items-center justify-center">
                <img 
                  src="/images/director-vali.svg" 
                  alt="Director Vali Mohd" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              <h3 className="font-sans font-extrabold text-lg text-primary uppercase tracking-wide">
                Vali Mohd
              </h3>
              <span className="text-accent font-condensed font-semibold text-xs uppercase tracking-wider block mt-1">
                Director &amp; Co-founder
              </span>
              <p className="font-sans text-xs text-secondary-text mt-4 leading-relaxed">
                Resident of Delhi. Oversees strategic partnerships, market operations, and metal sourcing networks across Northern India.
              </p>
            </motion.div>

            {/* Director 2 */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-[#F9F8F6] p-8 rounded-2xl border border-[#EBEAE6] text-center group hover:shadow-md transition-shadow"
            >
              <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-2 border-amber-accent mb-6 bg-primary/5 flex items-center justify-center">
                <img 
                  src="/images/director-shahid.png" 
                  alt="Director Mohmmad Shahid" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              <h3 className="font-sans font-extrabold text-lg text-primary uppercase tracking-wide">
                Mohmmad Shahid
              </h3>
              <span className="text-amber-accent font-condensed font-semibold text-xs uppercase tracking-wider block mt-1">
                Director &amp; Co-founder
              </span>
              <p className="font-sans text-xs text-secondary-text mt-4 leading-relaxed">
                Resident of Delhi. Directs operations at the Rai facility, quality grading compliance, logistics management, and financial reporting.
              </p>
            </motion.div>
          </div>

        </div>
      </section>

      {/* Client Partnerships */}
      <section className="py-20 bg-bg-warm/30 border-t border-bg-warm">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full text-center">
          <span className="text-accent font-condensed tracking-wider font-semibold text-sm uppercase block">
            Market Footprint
          </span>
          <h2 className="text-3xl font-heading font-extrabold text-[#1A1A1A] uppercase tracking-wide mt-2 mb-4">
            Trusted by 10+ Industry Leaders
          </h2>
          <p className="font-sans text-secondary-text text-xs sm:text-sm max-w-2xl mx-auto mb-12 leading-relaxed">
            As a licensed supplier of top-grade non-ferrous copper scrap, we are a proud transaction partner to India's major tech-aggregators, corporate supply platforms, and smelting houses.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {/* Client Card 1 */}
            <div className="bg-white border border-[#EBEAE6] p-6 rounded-2xl shadow-sm flex flex-col items-center justify-center hover:shadow-md transition-shadow h-44 group">
              <div className="h-16 flex items-center justify-center">
                <img 
                  src="/images/logo-ofbusiness.png" 
                  alt="OfBusiness Logo" 
                  className="h-12 w-auto object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                />
              </div>
              <p className="font-sans text-[10px] text-secondary-text uppercase font-bold tracking-wider mt-4">
                Corporate Supply Platform
              </p>
            </div>

            {/* Client Card 2 */}
            <div className="bg-black border border-black/20 p-6 rounded-2xl shadow-sm flex flex-col items-center justify-center hover:shadow-md transition-shadow h-44 group overflow-hidden">
              <div className="h-16 flex items-center justify-center">
                <img 
                  src="/images/logo-recykal.png" 
                  alt="Recykal Logo" 
                  className="h-12 w-auto object-contain transition-all duration-300"
                />
              </div>
              <p className="font-sans text-[10px] text-gray-400 uppercase font-bold tracking-wider mt-4">
                Tech-Enabled Circular Platform
              </p>
            </div>

            {/* Client Card 3 */}
            <div className="bg-white border border-[#EBEAE6] p-6 rounded-2xl shadow-sm flex flex-col items-center justify-center hover:shadow-md transition-shadow h-44 group">
              <div className="h-16 flex items-center justify-center">
                <img 
                  src="/images/logo-adani.jpg" 
                  alt="Adani Kutch Copper Logo" 
                  className="h-12 w-auto object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                />
              </div>
              <p className="font-sans text-[10px] text-secondary-text uppercase font-bold tracking-wider mt-4">
                Primary Copper Production Hub
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Banner */}
      <section className="relative bg-[#1C1C1C] py-20 overflow-hidden text-center">
        <div className="absolute inset-0 copper-shimmer opacity-10 pointer-events-none" />
        <div className="relative max-w-4xl mx-auto px-6">
          <blockquote className="font-heading font-extrabold text-2xl sm:text-4xl text-white uppercase leading-tight tracking-wide">
            "Recycling metals. Building futures. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-amber-accent">
              One copper wire at a time.
            </span>"
          </blockquote>
          <p className="font-sans text-xs text-gray-500 uppercase tracking-widest mt-6">
            Glorax Metal Recycling Private Limited
          </p>
        </div>
      </section>
    </div>
  );
}
