import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, HelpCircle, ChevronLeft, ChevronRight } from 'lucide-react';

// Image Carousel Subcomponent
function ImageCarousel({ images, name }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const prevSlide = (e) => {
    e.stopPropagation();
    setActiveIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = (e) => {
    e.stopPropagation();
    setActiveIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  // Autoplay
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 4500);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="w-full h-full relative group select-none">
      {/* Slides */}
      {images.map((img, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
            idx === activeIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          <img
            src={img}
            alt={`${name} view ${idx + 1}`}
            className="w-full h-full object-cover animate-fade-in"
            loading="lazy"
          />
        </div>
      ))}

      {/* Prev Arrow */}
      <button
        onClick={prevSlide}
        className="absolute left-3 top-1/2 -translate-y-1/2 z-20 bg-black/45 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer"
        aria-label="Previous image"
      >
        <ChevronLeft className="h-4.5 w-4.5" />
      </button>

      {/* Next Arrow */}
      <button
        onClick={nextSlide}
        className="absolute right-3 top-1/2 -translate-y-1/2 z-20 bg-black/45 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer"
        aria-label="Next image"
      >
        <ChevronRight className="h-4.5 w-4.5" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex gap-1.5 bg-black/30 px-2.5 py-1.5 rounded-full">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={(e) => {
              e.stopPropagation();
              setActiveIndex(idx);
            }}
            className={`h-1.5 w-1.5 rounded-full transition-all cursor-pointer ${
              idx === activeIndex ? 'bg-white scale-110' : 'bg-white/50 hover:bg-white/80'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

const products = [
  {
    id: "strips",
    name: "Copper Strips (Patti)",
    category: "Copper | Non-Ferrous",
    image: "/images/strips-1.jpg",
    images: [
      "/images/strips-1.jpg",
      "/images/strips-2.jpg",
      "/images/strips-3.jpg",
      "/images/strips-4.jpg"
    ],
    description: "Flat copper strips used in electrical transformers, busbars, and winding applications. Available in various widths and thicknesses.",
    specs: [
      "Grade: Electrolytic Tough Pitch (ETP) / Oxygen-Free",
      "Purity: 99.9% Minimum Copper content",
      "Applications: Busbars, transformer windings, electrical panels",
      "Thickness: Custom thickness tailored to order specifications"
    ]
  },
  {
    id: "rassa",
    name: "Copper Rassa (Wire)",
    category: "Copper | Non-Ferrous",
    image: "/images/rassa-1.jpg",
    images: [
      "/images/rassa-1.jpg",
      "/images/rassa-2.jpg"
    ],
    description: "High-conductivity copper wire scrap, ideal for re-drawing into fine wire. Clean, bare, and uncoated.",
    specs: [
      "Grade: Bare Bright Copper Scrap (Millberry)",
      "Purity: 99.9% High Conductivity Copper",
      "Format: Interlocked, bundled ropes (Rassa)",
      "Recyclability: Direct melting capability with minimal slag"
    ]
  },
  {
    id: "tally",
    name: "Copper Tally",
    category: "Copper | Non-Ferrous",
    image: "/images/tally-1.jpg",
    images: [
      "/images/tally-1.jpg",
      "/images/tally-2.jpg",
      "/images/tally-3.jpg"
    ],
    description: "Refined copper tally pieces — consistent in size and purity, suitable for melting and secondary copper production.",
    specs: [
      "Grade: Mixed heavy copper solids",
      "Purity: 97% to 99% pure scrap grading",
      "Form: Clean cut copper plates and segment blocks",
      "Industry: Casting foundries, secondary smelting units"
    ]
  },
  {
    id: "ac-pipes",
    name: "AC Pipes (Copper Tubes)",
    category: "Copper | Non-Ferrous",
    image: "/images/ac-pipes.svg",
    description: "Copper pipes and tubes recovered from air conditioning units. Available in straight and bent forms.",
    specs: [
      "Grade: Deoxidized High Phosphorus (DHP) copper",
      "Source: HVAC units, radiator tubes, plumbing scrap",
      "Format: Compressed bundles or sorted length segments",
      "Quality: Free of iron fittings, brass attachments or solder joints"
    ]
  },
  {
    id: "dori",
    name: "Copper Dori",
    category: "Copper | Non-Ferrous",
    image: "/images/dori-1.jpg",
    images: [
      "/images/dori-1.jpg",
      "/images/dori-2.jpg"
    ],
    description: "Fine copper wire bundles and strands — light, flexible, and used in motor rewinding and cable manufacturing.",
    specs: [
      "Grade: Hair wire / Winding wire scrap",
      "Purity: 99.9% pure enamel-coated or bare strands",
      "Condition: Stripped clean of outer PVC insulation layer",
      "Usage: Cable cores, alloy mixtures, motor manufacturing"
    ]
  }
];

export default function Products() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Per-page SEO
    document.title = 'Copper Strips, Rassa, Tally, AC Pipes & Dori | Glorax Metal Recycling Products';
    document.querySelector('meta[name="description"]')?.setAttribute('content',
      'Buy high-purity copper scrap products — Copper Strips (Patti), Rassa (Wire), Tally, AC Pipes, Dori. GST compliant supplier in Haryana. Bulk orders, pan-India delivery. Call +91 99717 21279.'
    );
    document.querySelector('link[rel="canonical"]')?.setAttribute('href', 'https://glorax.in/products');

    // Inject Product JSON-LD schemas
    const productSchema = {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "name": "Copper Scrap Products — Glorax Metal Recycling",
      "description": "High-purity copper scrap and non-ferrous metal products available for bulk purchase across India.",
      "url": "https://glorax.in/products",
      "numberOfItems": 5,
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Copper Strips (Patti)", "url": "https://glorax.in/products#strips",
          "description": "Flat copper strips for electrical transformers, busbars and winding. Purity 99.9% min. ETP and oxygen-free grades available." },
        { "@type": "ListItem", "position": 2, "name": "Copper Rassa (Wire)", "url": "https://glorax.in/products#rassa",
          "description": "High-conductivity bare copper wire scrap (Millberry grade) for re-drawing. 99.9% purity." },
        { "@type": "ListItem", "position": 3, "name": "Copper Tally", "url": "https://glorax.in/products#tally",
          "description": "Refined copper tally pieces 97-99% purity for smelting foundries and secondary copper production." },
        { "@type": "ListItem", "position": 4, "name": "AC Pipes (Copper Tubes)", "url": "https://glorax.in/products#ac-pipes",
          "description": "Recovered copper pipes and tubes from HVAC/AC units. DHP grade, sorted in compressed bundles." },
        { "@type": "ListItem", "position": 5, "name": "Copper Dori", "url": "https://glorax.in/products#dori",
          "description": "Fine copper wire bundles (hair wire/winding wire). 99.9% purity for motor rewinding and cable manufacturing." }
      ]
    };
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = 'products-schema-jsonld';
    script.innerHTML = JSON.stringify(productSchema);
    const existing = document.getElementById('products-schema-jsonld');
    if (existing) existing.remove();
    document.head.appendChild(script);

    return () => {
      document.getElementById('products-schema-jsonld')?.remove();
    };
  }, []);

  useEffect(() => {
    // Check if URL has hash (e.g. #rassa) and scroll to that element
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 150);
      }
    }
  }, [location]);

  const handleEnquiry = (name) => {
    navigate(`/contact?product=${encodeURIComponent(name)}`);
  };

  return (
    <div className="w-full">
      {/* Page Header */}
      <section className="bg-primary text-white py-16 px-6 relative overflow-hidden">
        <div className="absolute inset-0 copper-shimmer opacity-5 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full text-left">
          <span className="text-accent font-condensed tracking-wider font-semibold text-sm uppercase block mb-3">
            Product Portfolio
          </span>
          <h1 className="text-3xl sm:text-5xl font-heading font-extrabold uppercase mb-4">
            Industrial Copper Catalog
          </h1>
          <p className="font-sans text-gray-300 text-sm sm:text-base max-w-2xl leading-relaxed">
            We provide graded, high-purity copper scrap and secondary manufacturing inputs. All products are processed under expert supervision in Rai Industrial Area, Haryana.
          </p>
        </div>
      </section>

      {/* Products list */}
      <section className="py-20 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full">
        <div className="space-y-24">
          {products.map((prod, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div 
                key={prod.id} 
                id={prod.id}
                className="scroll-mt-24 border-b border-gray-200 pb-16 last:border-b-0 last:pb-0"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                  
                  {/* Product Image */}
                  <motion.div 
                    initial={{ opacity: 0, x: isEven ? -25 : 25 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className={`lg:col-span-5 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}
                  >
                    <div className="border border-gray-200 bg-white p-4 rounded-xl shadow-md">
                      <div className="aspect-[4/3] rounded-lg overflow-hidden bg-gray-50 flex items-center justify-center relative">
                        {prod.images ? (
                          <ImageCarousel images={prod.images} name={prod.name} />
                        ) : (
                          <img 
                            src={prod.image} 
                            alt={prod.name} 
                            className="w-full h-full object-cover"
                            loading="lazy"
                          />
                        )}
                      </div>
                    </div>
                  </motion.div>

                  {/* Product Details */}
                  <motion.div 
                    initial={{ opacity: 0, x: isEven ? 25 : -25 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className={`lg:col-span-7 text-left ${isEven ? 'lg:order-2' : 'lg:order-1'}`}
                  >
                    <div className="flex items-center gap-3.5 mb-4">
                      <span className="bg-accent/10 border border-accent/20 text-accent font-sans font-bold uppercase text-[10px] px-3 py-1 rounded">
                        {prod.category}
                      </span>
                    </div>

                    <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-[#1A1A1A] uppercase tracking-wide mb-4">
                      {prod.name}
                    </h2>

                    <p className="font-sans text-secondary-text text-sm sm:text-base leading-relaxed mb-6">
                      {prod.description}
                    </p>

                    {/* Specifications list */}
                    <div className="bg-white rounded-lg p-5 border border-bg-warm mb-8">
                      <h4 className="font-sans font-bold text-[#1A1A1A] text-xs uppercase tracking-wide mb-3 border-b border-gray-100 pb-2">
                        Product Specifications
                      </h4>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {prod.specs.map((spec, specIdx) => (
                          <li key={specIdx} className="font-sans text-xs text-[#444] flex items-start gap-2.5">
                            <span className="h-1.5 w-1.5 bg-accent rounded-full mt-1.5 flex-shrink-0" />
                            <span>{spec}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3">
                      <button 
                        onClick={() => handleEnquiry(prod.name)}
                        className="px-6 py-3.5 bg-accent hover:bg-accent-hover text-white text-xs font-sans font-bold uppercase tracking-wider rounded transition-colors duration-200 cursor-pointer flex items-center justify-center gap-2"
                      >
                        Enquire Now
                        <ArrowRight className="h-4 w-4" />
                      </button>
                    </div>
                  </motion.div>

                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* FAQ Section — targets Google featured snippets */}
      <section className="py-20 bg-bg-warm border-t border-[#EBEAE6]">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 w-full">
          <div className="text-center mb-12">
            <span className="font-condensed tracking-widest font-bold text-xs uppercase text-transparent bg-clip-text bg-gradient-to-r from-accent to-amber-accent block mb-3">
              ◆ Common Questions ◆
            </span>
            <h2 className="text-3xl sm:text-4xl font-heading font-black text-[#111] uppercase tracking-tight">
              Copper Scrap — Frequently Asked Questions
            </h2>
          </div>
          <div className="space-y-4">
            {[
              { q: "What types of copper scrap does Glorax supply?", a: "Glorax Metal Recycling supplies five primary copper scrap categories: Copper Strips (Patti) for transformer & busbar use, Copper Rassa (bare wire/Millberry) for re-drawing, Copper Tally for smelting, AC Pipes (DHP copper tubes) from HVAC systems, and Copper Dori (hair wire) for motor rewinding. All grades are available for bulk orders with full GST invoicing." },
              { q: "What is the minimum order quantity for copper scrap?", a: "We cater to both small and large bulk buyers. Minimum order quantities vary by product — typically starting from 100 kg for retail and 1 MT+ for wholesale/industrial supply. Contact us at +91 99717 21279 for specific order requirements." },
              { q: "Do you supply copper scrap across all of India?", a: "Yes. Glorax Metal Recycling has a pan-India logistics network enabling delivery to major industrial hubs including Delhi NCR, Mumbai, Ahmedabad, Chennai, Bengaluru, Hyderabad, Kolkata, Rajkot, and Ludhiana. We partner with reliable freight carriers for timely delivery." },
              { q: "What is the purity of your copper scrap products?", a: "Our copper scrap products are rigorously graded. Copper Strips and Rassa carry a minimum 99.9% copper purity (ETP/Millberry grade). Copper Tally ranges from 97% to 99% purity. AC Pipes are DHP grade copper. All products undergo quality inspection before dispatch." },
              { q: "Is Glorax Metal Recycling GST registered?", a: "Yes. Glorax Metal Recycling Private Limited is a fully GST-registered company with GSTIN 06AAJCV6761B1ZA, incorporated under the Registrar of Companies, Haryana. We provide complete documentation including GST invoices, e-way bills, and weight certificates for every transaction." }
            ].map((faq, idx) => (
              <details key={idx} className="bg-white border border-[#EBEAE6] rounded-xl shadow-sm group">
                <summary className="flex items-center justify-between p-5 cursor-pointer font-sans font-bold text-sm text-[#1A1A1A] list-none">
                  <span>{faq.q}</span>
                  <HelpCircle className="h-4 w-4 text-accent flex-shrink-0 ml-4" />
                </summary>
                <div className="px-5 pb-5 font-sans text-sm text-secondary-text leading-relaxed border-t border-gray-100 pt-4">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Dynamic CTA Banner */}
      <section className="bg-[#1C1C1C] py-16 text-white text-center border-t border-accent/20">
        <div className="max-w-4xl mx-auto px-6">
          <HelpCircle className="h-10 w-10 text-accent mx-auto mb-4" />
          <h2 className="text-xl sm:text-2xl font-heading font-bold uppercase tracking-wide">
            Need custom size or specialized grading?
          </h2>
          <p className="font-sans text-gray-400 text-xs sm:text-sm max-w-lg mx-auto mt-2 mb-6">
            We work closely with foundry engineers and industrial purchasers to supply raw materials matching exact physical and metallurgical parameters.
          </p>
          <button 
            onClick={() => handleEnquiry("Custom Copper Specification")}
            className="px-6 py-3.5 bg-transparent border border-[#fff]/25 hover:border-white text-[#fff] text-xs font-sans font-bold uppercase tracking-wider rounded transition-colors cursor-pointer"
          >
            Submit Specifications
          </button>
        </div>
      </section>
    </div>
  );
}
