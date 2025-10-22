import React from 'react';
import { CheckCircle, Users, Calendar, Building } from 'lucide-react';
function AboutSection() {
  const achievements = [
    "Over 1,000 successful projects completed",
    "Licensed and insured in all operational states",
    "ISO 9001:2015 certified quality management",
    "Zero-accident safety record for 3 consecutive years",
    "Partnerships with leading equipment manufacturers",
    "24/7 emergency response and support services"
  ];

  const teamStats = [
    { icon: Users, value: "55+", label: "Professional Team Members" },
    { icon: Calendar, value: "10+", label: "Years of Experience" },
    { icon: Building, value: "20", label: "Partner Companies" },
    { icon: CheckCircle, value: "98%", label: "Client Satisfaction Rate" }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-neutral-50 to-primary-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold text-neutral-900 sm:text-4xl lg:text-5xl mb-6">
              Building Excellence Since 1998
            </h2>
            <p className="text-lg text-neutral-600 mb-8">
              BuildPro has been a trusted partner in the construction industry for over two decades. 
              We combine traditional craftsmanship with modern technology to deliver outstanding results 
              for our clients across residential, commercial, and industrial sectors.
            </p>
            
            <div className="grid grid-cols-1 gap-4 mb-8">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-secondary-600 mt-0.5 flex-shrink-0" />
                  <span className="text-neutral-700">{achievement}</span>
                </div>
              ))}
            </div>
            
            <button className="bg-primary-600 text-white px-8 py-4 rounded-lg hover:bg-primary-700 transition-colors font-semibold">
              Learn More About Us
            </button>
          </div>
          
          <div className="space-y-6">
            <img 
              src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
              alt="Construction team at work"
              className="rounded-2xl shadow-lg"
            />
            
            <div className="grid grid-cols-2 gap-4">
              {teamStats.map((stat, index) => (
                <div key={index} className="bg-white rounded-xl p-6 text-center shadow-sm">
                  <div className="flex justify-center mb-3">
                    <stat.icon className="w-8 h-8 text-primary-600" />
                  </div>
                  <div className="text-2xl font-bold text-neutral-900 mb-1">{stat.value}</div>
                  <div className="text-sm text-neutral-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
