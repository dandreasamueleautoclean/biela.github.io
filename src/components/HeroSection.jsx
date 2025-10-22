import React from 'react';
import { ArrowRight, Shield, Award } from 'lucide-react';

function HeroSection() {
  return (
    <section id="home" className="relative bg-gradient-to-br from-neutral-900 via-neutral-800 to-primary-900 py-20">
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent"></div>
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center space-x-4 mb-6">
              <div className="flex items-center space-x-2 bg-secondary-600/20 px-3 py-1 rounded-full">
                <Shield className="w-4 h-4 text-secondary-400" />
                <span className="text-secondary-300 text-sm font-medium">Licensed & Insured</span>
              </div>
              <div className="flex items-center space-x-2 bg-primary-600/20 px-3 py-1 rounded-full">
                <Award className="w-4 h-4 text-primary-400" />
                <span className="text-primary-300 text-sm font-medium">10+ Years Experience</span>
              </div>
            </div>
            
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl mb-6">
              Quality Construction
              <span className="text-secondary-500"> Solutions</span>
            </h1>
            
            <p className="text-xl leading-8 text-neutral-300 mb-8 max-w-xl">
              From construction services to construction products sales, we provide comprehensive solutions 
              for all your building and equipment needs.
            </p>
            
          </div>
          
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Construction site with heavy machinery"
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/40 to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
