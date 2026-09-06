import React, { useEffect } from 'react';
import { Download, ShieldCheck, MapPin, Camera, AlertCircle, Coffee, PhoneCall, FileText, ChevronRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const DriverApp = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const features = [
    {
      icon: <MapPin className="h-6 w-6 text-green-500" />,
      title: 'Live Tracking & Navigation',
      description: 'Accurate real-time GPS tracking and route optimization for faster, safer deliveries.',
      bg: 'bg-green-50'
    },
    {
      icon: <Camera className="h-6 w-6 text-amber-500" />,
      title: 'POD & Document Capture',
      description: 'Easily scan and upload Proof of Delivery (POD), fuel receipts, and toll slips.',
      bg: 'bg-amber-50'
    },
    {
      icon: <AlertCircle className="h-6 w-6 text-red-500" />,
      title: 'Emergency Help (SOS)',
      description: 'One-click SOS button to instantly share live location with the emergency team.',
      bg: 'bg-red-50'
    },
    {
      icon: <Coffee className="h-6 w-6 text-blue-500" />,
      title: 'Break / Stop Management',
      description: 'Log rest breaks and stops effortlessly to maintain compliance and safety.',
      bg: 'bg-blue-50'
    },
    {
      icon: <PhoneCall className="h-6 w-6 text-emerald-500" />,
      title: 'Call Help Support',
      description: 'Direct line to office support and emergency contacts directly from the app.',
      bg: 'bg-emerald-50'
    },
    {
      icon: <FileText className="h-6 w-6 text-purple-500" />,
      title: 'Document Vault',
      description: 'Securely store and access all your trip documents, e-Way bills, and receipts.',
      bg: 'bg-purple-50'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      {/* Hero Banner Section */}
      <section className="bg-[#0F172A] pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          <div className="rounded-3xl overflow-hidden shadow-2xl border border-white/10 mb-12">
            <img 
              src="/images/driver-app-poster.png" 
              alt="Glorax Driver App - Drive Smart, Deliver Safe" 
              className="w-full h-auto object-cover"
            />
          </div>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <a 
              href="/downloads/glorax-driver-app.apk" 
              download="Glorax-Driver-App.apk"
              className="flex items-center justify-center gap-3 bg-gradient-to-r from-accent to-yellow-500 hover:from-yellow-500 hover:to-accent text-primary font-bold py-4 px-10 rounded-xl shadow-xl hover:shadow-accent/30 transition-all duration-300 transform hover:-translate-y-1"
            >
              <Download className="h-6 w-6" />
              <div className="text-left">
                <div className="text-[10px] uppercase tracking-wider opacity-80">Download direct APK</div>
                <div className="text-lg leading-tight">For Android</div>
              </div>
            </a>
            
            <button 
              disabled
              className="flex items-center justify-center gap-3 bg-white/5 border border-white/10 text-white/50 cursor-not-allowed font-bold py-4 px-10 rounded-xl backdrop-blur-sm transition-all duration-300"
            >
              <svg viewBox="0 0 1024 1024" className="h-7 w-7 opacity-70 grayscale" xmlns="http://www.w3.org/2000/svg">
                <path fill="#00D3FA" d="M110.1 76.1c-13.6 14.1-22.1 36.4-22.1 66.8v738.2c0 30.5 8.5 52.8 22.1 66.8l7.6 6.9 397-397.6v-14l-397-397.6-7.6 6.5z"/>
                <path fill="#FFC900" d="M647.7 671.3l-133-133v-14.1l133-133 16.6 9.4 157.9 89.8c45.2 25.6 45.2 67.5 0 93.1L664.3 661.8l-16.6 9.5z"/>
                <path fill="#FF394A" d="M664.3 661.9L514.7 512.3l-404.6 404.6c15.2 15.9 39.7 18.1 70.8 0l483.4-255z"/>
                <path fill="#00E676" d="M664.3 362.1l-483.4-255c-31.1-18.1-55.6-15.9-70.8 0L514.7 511.7l149.6-149.6z"/>
              </svg>
              <div className="text-left">
                <div className="text-[10px] uppercase tracking-wider">Play Store</div>
                <div className="text-lg leading-tight">Coming Soon</div>
              </div>
            </button>
          </div>

        </div>
      </section>

      {/* Features Grid Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-4">Everything a driver needs</h2>
            <p className="text-gray-600 text-lg">
              The Glorax Driver App is built to simplify the delivery process, ensure safety, and keep you connected with the office effortlessly.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
                <div className={`w-14 h-14 ${feature.bg} rounded-xl flex items-center justify-center mb-6`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Install Instructions Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-12">How to Install</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left relative">
            {/* Connecting line for desktop */}
            <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-0.5 bg-gray-100 z-0"></div>
            
            <div className="relative z-10 bg-white pt-6">
              <div className="w-12 h-12 rounded-full bg-accent text-primary font-bold flex items-center justify-center text-xl mb-6 mx-auto md:mx-0 shadow-lg">1</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 text-center md:text-left">Download APK</h3>
              <p className="text-gray-600 text-center md:text-left">Click the download button above to save the .apk file to your Android device.</p>
            </div>
            
            <div className="relative z-10 bg-white pt-6">
              <div className="w-12 h-12 rounded-full bg-accent text-primary font-bold flex items-center justify-center text-xl mb-6 mx-auto md:mx-0 shadow-lg">2</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 text-center md:text-left">Allow Installation</h3>
              <p className="text-gray-600 text-center md:text-left">Open the downloaded file. If prompted, go to Settings and allow "Install from unknown sources".</p>
            </div>
            
            <div className="relative z-10 bg-white pt-6">
              <div className="w-12 h-12 rounded-full bg-accent text-primary font-bold flex items-center justify-center text-xl mb-6 mx-auto md:mx-0 shadow-lg">3</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 text-center md:text-left">Login & Drive</h3>
              <p className="text-gray-600 text-center md:text-left">Open the app, enter your driver credentials provided by the office, and start your trip.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-accent">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-6">Ready to hit the road?</h2>
          <p className="text-primary/80 text-lg mb-10 max-w-2xl mx-auto">
            Get the Glorax Driver App today and experience a seamless, secure, and smart way to manage your deliveries.
          </p>
          <a 
            href="/downloads/glorax-driver-app.apk" 
            download="Glorax-Driver-App.apk"
            className="inline-flex items-center gap-3 bg-primary hover:bg-gray-900 text-white font-bold py-4 px-10 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 text-lg"
          >
            <Download className="h-5 w-5" />
            Download APK Now
          </a>
        </div>
      </section>
    </div>
  );
};

export default DriverApp;
