import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ShieldCheck, MapPin, PhoneCall, Award, ArrowRight, CheckCircle2, ChevronRight } from 'lucide-react';

const trustItems = [
  { icon: ShieldCheck, title: "GST Registered", desc: "GSTIN: 06AAJCV6761B1ZA" },
  { icon: MapPin, title: "Sonipat, Haryana", desc: "HSIIDC Industrial Area" },
  { icon: PhoneCall, title: "+91 99717 21279", desc: "Direct Call / WhatsApp" },
  { icon: Award, title: "Est. 2023", desc: "Private Limited Company" },
];

const whyChooseUs = [
  { title: "GST Compliant & Registered", desc: "Fully compliant Indian private limited company, adhering to all legal and environmental standards." },
  { title: "High Purity Copper Products", desc: "Meticulous quality control ensuring highest copper purity grades for electrical & manufacturing use." },
  { title: "Pan-India Supply Network", desc: "Robust logistics infrastructure enabling prompt and reliable delivery to any corner of the country." },
  { title: "Accurate Weighing & Grading", desc: "State-of-the-art calibrated weighing systems ensuring fair, transparent transactions every single time." },
  { title: "Responsive Customer Support", desc: "Direct channel communication with managers to address custom order specifications and logistics." },
  { title: "Sustainable Recycling Practices", desc: "Eco-friendly recycling processes designed to reduce environmental carbon footprints and promote circular economy." }
];

const productsHighlight = [
  {
    name: "Copper Strips (Patti)",
    image: "/images/strips-1.jpg",
    desc: "Flat copper strips used in transformers, busbars, and winding applications.",
    slug: "strips"
  },
  {
    name: "Copper Rassa (Wire)",
    image: "/images/rassa-1.jpg",
    desc: "High-conductivity bare and uncoated copper wire scrap, ideal for re-drawing.",
    slug: "rassa"
  },
  {
    name: "Copper Tally",
    image: "/images/tally-1.jpg",
    desc: "Refined copper tally pieces consistent in purity, suitable for melting and alloys.",
    slug: "tally"
  },
  {
    name: "AC Pipes (Copper Tubes)",
    image: "/images/ac-pipes.svg",
    desc: "AC unit copper pipes recovered, graded, and available in straight & bent forms.",
    slug: "ac-pipes"
  },
  {
    name: "Copper Dori",
    image: "/images/dori-1.jpg",
    desc: "Fine copper wire bundles and strands, ideal for motor rewinding and cables.",
    slug: "dori"
  }
];

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="w-full">
      {/* 1. Hero Section */}
      <section className="relative w-full min-h-[calc(100vh-80px)] py-24 sm:py-32 flex items-center justify-start overflow-hidden bg-primary">
        {/* Background Image with Dark Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-45"
          style={{ backgroundImage: `url('/images/hero-bg.svg')` }}
        />
        
        {/* Copper shimmer overlay */}
        <div className="absolute inset-0 copper-shimmer opacity-15 pointer-events-none" />
        
        {/* Radial Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-transparent" />

        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="md:col-span-11 lg:col-span-10 flex flex-col items-start text-left z-10"
          >
            <span className="inline-block font-condensed tracking-widest font-bold text-sm sm:text-base uppercase bg-gradient-to-r from-accent to-amber-accent text-transparent bg-clip-text px-3.5 py-1.5 rounded-full border border-accent/30 mb-5">
              ✦ Industrial Metal Recycling Experts ✦
            </span>
            
            <h1 className="text-5xl sm:text-6xl lg:text-8xl font-heading font-black text-white leading-[0.95] uppercase mb-6 tracking-tight">
              India's Trusted <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E8923A] via-[#D4A853] to-[#B87333] drop-shadow-[0_2px_12px_rgba(184,115,51,0.5)]">
                Copper &amp; Non-Ferrous
              </span> <br />
              Metal Recyclers
            </h1>
            
            <p className="text-[#C8C8C8] text-base sm:text-lg lg:text-xl font-sans font-medium max-w-2xl leading-relaxed mb-8">
              Premium quality copper scrap, strips, rassa, tally, AC pipes &amp; dori — sourced responsibly, delivered reliably across India.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <button 
                onClick={() => navigate('/products')}
                className="w-full sm:w-auto px-8 py-4 bg-accent hover:bg-accent-hover text-white font-sans font-bold uppercase rounded shadow-lg hover:shadow-accent/20 border border-transparent transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer"
              >
                View Our Products
                <ArrowRight className="h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
              </button>
              
              <Link 
                to="/contact"
                className="w-full sm:w-auto px-8 py-4 bg-transparent hover:bg-white/5 text-white font-sans font-semibold uppercase rounded border border-white/20 hover:border-white transition-all duration-300 flex items-center justify-center cursor-pointer"
              >
                Get a Quote
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. Trust Bar */}
      <section className="relative -mt-12 z-20 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 bg-white p-6 rounded-xl shadow-xl border border-bg-warm/80">
          {trustItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="flex items-center gap-4 p-3 border-r last:border-r-0 border-gray-100 sm:border-none lg:border-r"
              >
                <div className="bg-accent/10 p-3 rounded-lg flex-shrink-0">
                  <Icon className="h-6 w-6 text-accent" />
                </div>
                <div className="text-left">
                  <h4 className="font-sans font-bold text-[#1A1A1A] text-sm uppercase tracking-wide">{item.title}</h4>
                  <p className="font-sans text-xs text-secondary-text mt-0.5">{item.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* 3. About Snippet */}
      <section className="pt-20 pb-8 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 text-left"
          >
            <span className="font-condensed tracking-widest font-bold text-xs uppercase text-transparent bg-clip-text bg-gradient-to-r from-accent to-amber-accent block mb-3">
              ◆ Who We Are ◆
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-black text-[#111] uppercase leading-tight mb-6 tracking-tight">
              Empowering Industries Through <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-amber-accent">Professional Copper</span> Recycling
            </h2>
            <p className="font-sans font-medium text-[#333] text-base sm:text-lg leading-relaxed mb-6">
              Glorax Metal Recycling Pvt. Ltd. is a Haryana-based private limited company specializing in high-quality copper and non-ferrous scrap recycling. We supply trusted metal products to manufacturers, traders, and industries across India.
            </p>
            <p className="font-sans text-[#555] text-sm sm:text-base leading-relaxed mb-8">
              Founded on principles of extreme integrity, precise grading, and transparency, we facilitate smooth business transactions while adhering strictly to statutory norms like regular GST compliance. We bridge the gap between metal scrap generation and secondary manufacturing, driving circular economy.
            </p>
            
            <Link 
              to="/about"
              className="inline-flex items-center gap-2 text-accent hover:text-accent-hover font-sans font-bold uppercase text-sm tracking-wider transition-colors duration-200"
            >
              Discover Our History
              <ChevronRight className="h-5 w-5" />
            </Link>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 relative"
          >
            <div className="absolute inset-0 bg-accent rounded-2xl transform rotate-3 scale-95 opacity-10" />
            <div className="relative border-4 border-white shadow-2xl rounded-2xl overflow-hidden bg-primary/5">
              <img 
                src="/images/director-shahid.png" 
                alt="Mohmmad Shahid, Director &amp; Owner of Glorax Metal Recycling" 
                className="w-full h-auto object-cover object-top max-h-[420px]"
                loading="lazy"
              />
            </div>
          </motion.div>

        </div>
      </section>

      {/* 3.5. Trusted Clients Section */}
      <section className="bg-bg-warm/50 py-10 border-y border-bg-warm/80">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Header info */}
            <div className="lg:col-span-4 text-left">
              <span className="font-condensed tracking-widest font-bold text-xs uppercase text-transparent bg-clip-text bg-gradient-to-r from-accent to-amber-accent block mb-1">
                ◆ Our Partnerships ◆
              </span>
              <h3 className="text-2xl sm:text-3xl font-heading font-black text-[#111] uppercase tracking-tight">
                10+ <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-amber-accent">Trusted</span> Clients
              </h3>
              <p className="font-sans font-medium text-xs text-[#555] mt-2 max-w-sm">
                Proud supplier of high-purity recycled copper to India's leading industrial buyers, aggregators, and manufacturing hubs.
              </p>
            </div>
            
            {/* Client Badges */}
            <div className="lg:col-span-8 flex flex-wrap items-center justify-start lg:justify-end gap-4 sm:gap-6">
              {/* OfBusiness */}
              <div className="bg-white border border-[#EBEAE6] px-5 py-3 rounded-xl shadow-sm hover:shadow-md transition-all flex items-center justify-center h-14 w-32 sm:w-36 group">
                <img 
                  src="/images/logo-ofbusiness.png" 
                  alt="OfBusiness Logo" 
                  className="h-8 sm:h-10 w-auto object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                />
              </div>
              
              {/* Recykal */}
              <div className="bg-black border border-black/20 px-5 py-3 rounded-xl shadow-sm hover:shadow-md transition-all flex items-center justify-center h-14 w-32 sm:w-36 group overflow-hidden">
                <img 
                  src="/images/logo-recykal.png" 
                  alt="Recykal Logo" 
                  className="h-8 sm:h-10 w-auto object-contain transition-all duration-300"
                />
              </div>
              
              {/* Adani Kutch Copper */}
              <div className="bg-white border border-[#EBEAE6] px-5 py-3 rounded-xl shadow-sm hover:shadow-md transition-all flex items-center justify-center h-14 w-44 sm:w-48 group">
                <img 
                  src="/images/logo-adani.jpg" 
                  alt="Adani Kutch Copper Logo" 
                  className="h-8 sm:h-10 w-auto object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Product Highlights (Preview) */}
      <section className="py-20 bg-white border-y border-bg-warm">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full text-left">
          
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-12">
            <div>
              <span className="font-condensed tracking-widest font-bold text-xs uppercase text-transparent bg-clip-text bg-gradient-to-r from-accent to-amber-accent block mb-3">
                ◆ Our Offerings ◆
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-black text-[#111] uppercase leading-tight tracking-tight">
                Premium <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-amber-accent">Copper</span> Products
              </h2>
            </div>
            <Link 
              to="/products"
              className="mt-4 sm:mt-0 px-5 py-2.5 bg-primary hover:bg-[#2d2d2d] text-white text-xs font-sans font-bold uppercase rounded tracking-wider transition-colors"
            >
              View Full Catalog
            </Link>
          </div>

          {/* Horizontal scroll on mobile, flex/grid on desktop */}
          <div className="flex overflow-x-auto pb-6 -mx-6 px-6 gap-6 md:grid md:grid-cols-3 lg:grid-cols-5 md:overflow-x-visible md:pb-0 md:px-0 md:mx-0 scrollbar-thin">
            {productsHighlight.map((prod, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="flex-shrink-0 w-[280px] md:w-auto bg-[#F9F8F6] rounded-xl overflow-hidden border border-[#EBEAE6] hover:border-accent/40 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="relative h-44 overflow-hidden bg-primary/5 flex items-center justify-center">
                    <img 
                      src={prod.image} 
                      alt={prod.name} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <span className="absolute bottom-3 left-3 bg-primary text-white text-[10px] uppercase font-bold px-2 py-0.5 tracking-wider rounded">
                      Copper
                    </span>
                  </div>
                  <div className="p-5 text-left">
                    <h3 className="font-heading font-black text-base text-[#111] uppercase tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-accent group-hover:to-amber-accent transition-all duration-300">
                      {prod.name}
                    </h3>
                    <p className="font-sans font-medium text-xs text-[#555] mt-2.5 line-clamp-3 leading-relaxed">
                      {prod.desc}
                    </p>
                  </div>
                </div>
                
                <div className="p-5 pt-0">
                  <button 
                    onClick={() => navigate(`/products#${prod.slug}`)}
                    className="w-full py-2 bg-transparent hover:bg-accent/5 text-accent border border-accent/20 hover:border-accent/60 text-xs font-sans font-bold uppercase tracking-wider rounded transition-colors text-center cursor-pointer"
                  >
                    Learn More
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. Why Choose Us Section */}
      <section className="py-20 bg-bg-warm">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full text-center">
          
          <span className="font-condensed tracking-widest font-bold text-xs uppercase text-transparent bg-clip-text bg-gradient-to-r from-accent to-amber-accent block mb-3">
            ◆ Our Edge ◆
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-black text-[#111] uppercase leading-tight mb-14 tracking-tight">
            Setting <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-amber-accent">Standards</span> in Metal Recycling
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
            {whyChooseUs.map((point, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="bg-white p-8 rounded-xl border border-[#EBEAE6] shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-3.5 mb-4">
                  <div className="p-1 bg-accent/10 rounded-full flex-shrink-0">
                    <CheckCircle2 className="h-5 w-5 text-accent" />
                  </div>
                  <h3 className="font-heading font-black text-base text-[#111] uppercase tracking-tight">
                    {point.title}
                  </h3>
                </div>
                <p className="font-sans font-medium text-xs sm:text-sm text-[#555] leading-relaxed">
                  {point.desc}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* 6. Call to Action Banner */}
      <section className="relative bg-primary py-16 overflow-hidden">
        {/* Shimmer line */}
        <div className="absolute inset-0 copper-shimmer opacity-10 pointer-events-none" />
        <div className="absolute -left-1/4 -top-1/2 w-1/2 h-full bg-accent/20 rounded-full blur-3xl opacity-20" />
        
        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-left max-w-3xl">
            <h2 className="text-2xl sm:text-4xl font-heading font-black text-white uppercase tracking-tight leading-tight">
              Looking to <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E8923A] via-[#D4A853] to-[#B87333]">Buy or Sell</span> Copper Scrap?
            </h2>
            <p className="font-sans font-medium text-gray-400 text-sm sm:text-base mt-3">
              Get in touch with our team today for updated market pricing, bulk contracts, and delivery schedules.
            </p>
          </div>
          <Link 
            to="/contact"
            className="w-full md:w-auto px-8 py-4 bg-accent hover:bg-accent-hover text-white text-center font-sans font-bold uppercase rounded shadow-lg transition-colors cursor-pointer whitespace-nowrap"
          >
            Contact Us Today
          </Link>
        </div>
      </section>
    </div>
  );
}
