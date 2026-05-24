import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Globe, Send, Loader2, CheckCircle, AlertCircle } from 'lucide-react';

// Contact Zod Schema
const contactSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters long." }),
  companyName: z.string().optional(),
  phone: z.string().refine(
    (val) => {
      // Matches standard Indian mobile numbers: with or without +91 / 91 prefix, starting with 6-9, followed by 9 digits
      const cleaned = val.replace(/\s+/g, '');
      return /^(?:\+91|91)?[6-9]\d{9}$/.test(cleaned);
    },
    { message: "Please enter a valid 10-digit Indian phone number (e.g. 9876543210 or +91 9876543210)." }
  ),
  email: z.string().email({ message: "Please enter a valid email address." }),
  product: z.string().default("All Products"),
  message: z.string().min(10, { message: "Enquiry message must be at least 10 characters long." })
});

const productsList = [
  "All Products",
  "Copper Strips (Patti)",
  "Copper Rassa (Wire)",
  "Copper Tally",
  "AC Pipes (Copper Tubes)",
  "Copper Dori",
  "Custom Copper Specification"
];

export default function Contact() {
  const [searchParams] = useSearchParams();
  const initialProduct = searchParams.get('product') || "All Products";

  const [submitStatus, setSubmitStatus] = useState(null);
  const [statusMessage, setStatusMessage] = useState("");

  // Per-page SEO
  useEffect(() => {
    document.title = 'Contact Glorax Metal Recycling | Copper Scrap Enquiry | +91 99717 21279';
    document.querySelector('meta[name="description"]')?.setAttribute('content',
      'Get in touch with Glorax Metal Recycling for copper scrap pricing, bulk orders, and delivery. Call +91 99717 21279 or email contact@glorax.in. Based in Rai Industrial Area, Sonipat, Haryana.'
    );
    document.querySelector('link[rel="canonical"]')?.setAttribute('href', 'https://glorax.in/contact');
  }, []);

  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      product: initialProduct,
      name: "",
      companyName: "",
      phone: "",
      email: "",
      message: ""
    }
  });

  const onSubmit = async (data) => {
    setSubmitStatus('loading');
    
    // API endpoint configured from env or default local port 5001
    const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5001';
    
    try {
      const response = await fetch(`${apiUrl}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitStatus('success');
        setStatusMessage(result.message || "Thank you! We'll get back to you within 24 hours.");
        reset({
          product: "All Products",
          name: "",
          companyName: "",
          phone: "",
          email: "",
          message: ""
        });
      } else {
        setSubmitStatus('error');
        setStatusMessage(result.error || "Failed to submit enquiry. Please check the fields and try again.");
      }
    } catch (err) {
      console.error("Enquiry submission error:", err);
      setSubmitStatus('error');
      setStatusMessage("Could not connect to the enquiry server. Please try again later or email us directly at contact@glorax.in.");
    }
  };

  return (
    <div className="w-full">
      {/* Header */}
      <section className="bg-primary text-white py-16 px-6 relative overflow-hidden">
        <div className="absolute inset-0 copper-shimmer opacity-5 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full text-left">
          <span className="text-accent font-condensed tracking-wider font-semibold text-sm uppercase block mb-3">
            Get In Touch
          </span>
          <h1 className="text-3xl sm:text-5xl font-heading font-extrabold uppercase mb-4">
            Contact Us &amp; Enquiries
          </h1>
          <p className="font-sans text-gray-300 text-sm sm:text-base max-w-2xl leading-relaxed">
            Have questions about copper scrap specifications, bulk sales, or delivery logistics? Write to us or drop by our facility in Rai Industrial Area.
          </p>
        </div>
      </section>

      {/* Contact Section Grid */}
      <section className="py-20 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start text-left">
          
          {/* Left Column: Info Cards & Google Maps */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <h2 className="text-2xl font-heading font-extrabold text-[#1A1A1A] uppercase tracking-wide mb-4">
                Corporate Contacts
              </h2>
              <p className="font-sans text-secondary-text text-sm leading-relaxed">
                Reach out to our procurement and sales desks directly. We operate Monday to Saturday from 9:00 AM to 6:00 PM.
              </p>
            </div>

            {/* Direct Contact Links card */}
            <div className="bg-white border border-[#EBEAE6] rounded-xl p-6 shadow-sm space-y-5">
              
              <div className="flex items-start gap-4">
                <div className="bg-accent/10 p-2.5 rounded-lg flex-shrink-0 mt-0.5">
                  <MapPin className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <span className="font-sans text-[10px] uppercase font-bold text-secondary-text tracking-wide block">
                    Registered Facility Address
                  </span>
                  <address className="font-sans text-xs sm:text-sm font-semibold text-primary not-italic block mt-1 leading-relaxed">
                    Glorax Metal Recycling Private Limited<br />
                    HSIIDC Industrial Estate Phase 1, Plot No. 1830,<br />
                    Sector 38, Rai Industrial Area, Sonipat, Haryana — 131029
                  </address>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-accent/10 p-2.5 rounded-lg flex-shrink-0">
                  <Phone className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <span className="font-sans text-[10px] uppercase font-bold text-secondary-text tracking-wide block">
                    Direct Sales Phone
                  </span>
                  <a 
                    href="tel:+919971721279" 
                    className="font-sans text-sm sm:text-base font-bold text-primary hover:text-accent transition-colors block mt-0.5"
                  >
                    +91 99717 21279
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-accent/10 p-2.5 rounded-lg flex-shrink-0">
                  <Mail className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <span className="font-sans text-[10px] uppercase font-bold text-secondary-text tracking-wide block">
                    Corporate Email
                  </span>
                  <a 
                    href="mailto:contact@glorax.in" 
                    className="font-sans text-sm font-semibold text-primary hover:text-accent transition-colors block mt-0.5"
                  >
                    contact@glorax.in
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-accent/10 p-2.5 rounded-lg flex-shrink-0">
                  <Globe className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <span className="font-sans text-[10px] uppercase font-bold text-secondary-text tracking-wide block">
                    Website domain
                  </span>
                  <a 
                    href="https://glorax.in" 
                    className="font-sans text-sm font-semibold text-primary hover:text-accent transition-colors block mt-0.5"
                  >
                    glorax.in
                  </a>
                </div>
              </div>

            </div>

            {/* Google Maps Iframe */}
            <div className="rounded-xl overflow-hidden shadow-md border border-[#EBEAE6] h-[300px] w-full">
              <iframe
                title="Glorax Metal Recycling Location, Sonipat, Haryana"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13962.697426868843!2d77.10825313936997!3d28.96647247343606!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390dae6503c4f74d%3A0xb3debb98d4d7f551!2sRai%20Industrial%20Area%2C%20Sonipat%2C%20Haryana!5e0!3m2!1sen!2sin!4v1716254823901!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white border border-[#EBEAE6] shadow-xl rounded-xl p-8">
              <h3 className="font-heading font-extrabold text-xl text-primary uppercase tracking-wide mb-6 pb-3 border-b border-gray-100">
                Submit Enquiry Form
              </h3>

              {/* Status Toasts */}
              {submitStatus === 'success' && (
                <motion.div 
                  initial={{ opacity: 0, y: -10 }} 
                  animate={{ opacity: 1, y: 0 }} 
                  className="mb-6 p-4 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-lg flex items-start gap-3"
                >
                  <CheckCircle className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <div className="text-xs sm:text-sm font-sans">
                    <p className="font-bold">Enquiry Sent Successfully!</p>
                    <p className="mt-0.5">{statusMessage}</p>
                  </div>
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div 
                  initial={{ opacity: 0, y: -10 }} 
                  animate={{ opacity: 1, y: 0 }} 
                  className="mb-6 p-4 bg-rose-50 border border-rose-200 text-rose-800 rounded-lg flex items-start gap-3"
                >
                  <AlertCircle className="h-5 w-5 text-rose-600 mt-0.5 flex-shrink-0" />
                  <div className="text-xs sm:text-sm font-sans">
                    <p className="font-bold">Submission Failed</p>
                    <p className="mt-0.5">{statusMessage}</p>
                  </div>
                </motion.div>
              )}

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Full Name */}
                  <div className="flex flex-col text-left">
                    <label className="font-sans font-bold text-[#1A1A1A] text-xs uppercase tracking-wide mb-2">
                      Full Name *
                    </label>
                    <input 
                      type="text" 
                      placeholder="e.g. Rajesh Kumar" 
                      {...register("name")}
                      className={`font-sans text-sm border p-3 rounded bg-bg-warm/30 focus:outline-none focus:ring-1 focus:bg-white transition-all ${
                        errors.name ? 'border-rose-400 focus:ring-rose-400' : 'border-gray-200 focus:ring-accent focus:border-accent'
                      }`}
                    />
                    {errors.name && (
                      <span className="font-sans text-rose-500 text-xs mt-1.5">{errors.name.message}</span>
                    )}
                  </div>

                  {/* Company Name */}
                  <div className="flex flex-col text-left">
                    <label className="font-sans font-bold text-[#1A1A1A] text-xs uppercase tracking-wide mb-2">
                      Company Name (Optional)
                    </label>
                    <input 
                      type="text" 
                      placeholder="e.g. Acme Cable Ltd" 
                      {...register("companyName")}
                      className="font-sans text-sm border border-gray-200 p-3 rounded bg-bg-warm/30 focus:outline-none focus:ring-1 focus:ring-accent focus:border-accent focus:bg-white transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Phone Number */}
                  <div className="flex flex-col text-left">
                    <label className="font-sans font-bold text-[#1A1A1A] text-xs uppercase tracking-wide mb-2">
                      Phone Number *
                    </label>
                    <input 
                      type="text" 
                      placeholder="e.g. +91 99717 21279" 
                      {...register("phone")}
                      className={`font-sans text-sm border p-3 rounded bg-bg-warm/30 focus:outline-none focus:ring-1 focus:bg-white transition-all ${
                        errors.phone ? 'border-rose-400 focus:ring-rose-400' : 'border-gray-200 focus:ring-accent focus:border-accent'
                      }`}
                    />
                    {errors.phone && (
                      <span className="font-sans text-rose-500 text-xs mt-1.5">{errors.phone.message}</span>
                    )}
                  </div>

                  {/* Email Address */}
                  <div className="flex flex-col text-left">
                    <label className="font-sans font-bold text-[#1A1A1A] text-xs uppercase tracking-wide mb-2">
                      Email Address *
                    </label>
                    <input 
                      type="email" 
                      placeholder="e.g. buyer@glorax.in" 
                      {...register("email")}
                      className={`font-sans text-sm border p-3 rounded bg-bg-warm/30 focus:outline-none focus:ring-1 focus:bg-white transition-all ${
                        errors.email ? 'border-rose-400 focus:ring-rose-400' : 'border-gray-200 focus:ring-accent focus:border-accent'
                      }`}
                    />
                    {errors.email && (
                      <span className="font-sans text-rose-500 text-xs mt-1.5">{errors.email.message}</span>
                    )}
                  </div>
                </div>

                {/* Product of Interest Dropdown */}
                <div className="flex flex-col text-left">
                  <label className="font-sans font-bold text-[#1A1A1A] text-xs uppercase tracking-wide mb-2">
                    Product of Interest
                  </label>
                  <select 
                    {...register("product")}
                    className="font-sans text-sm border border-gray-200 p-3 rounded bg-bg-warm/30 focus:outline-none focus:ring-1 focus:ring-accent focus:border-accent focus:bg-white transition-all cursor-pointer"
                  >
                    {productsList.map((item, idx) => (
                      <option key={idx} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div className="flex flex-col text-left">
                  <label className="font-sans font-bold text-[#1A1A1A] text-xs uppercase tracking-wide mb-2">
                    Message / Enquiry Specification *
                  </label>
                  <textarea 
                    rows="5" 
                    placeholder="Provide details about your required quantity, delivery location, thickness constraints, or buying scrap..." 
                    {...register("message")}
                    className={`font-sans text-sm border p-3 rounded bg-bg-warm/30 focus:outline-none focus:ring-1 focus:bg-white transition-all ${
                      errors.message ? 'border-rose-400 focus:ring-rose-400' : 'border-gray-200 focus:ring-accent focus:border-accent'
                    }`}
                  />
                  {errors.message && (
                    <span className="font-sans text-rose-500 text-xs mt-1.5">{errors.message.message}</span>
                  )}
                </div>

                {/* Submit button */}
                <button 
                  type="submit" 
                  disabled={submitStatus === 'loading'}
                  className="w-full py-4 bg-accent hover:bg-accent-hover disabled:bg-gray-400 text-white font-sans font-bold uppercase tracking-wider rounded transition-colors duration-200 cursor-pointer flex items-center justify-center gap-2.5"
                >
                  {submitStatus === 'loading' ? (
                    <>
                      <Loader2 className="h-5 w-5 animate-spin" />
                      Sending Enquiry...
                    </>
                  ) : (
                    <>
                      <Send className="h-4.5 w-4.5" />
                      Send Enquiry
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
