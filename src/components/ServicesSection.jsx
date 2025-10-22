import React from 'react';
import { Building, Wrench, Truck, Users } from 'lucide-react';

function ServicesSection() {
  const services = [
    {
      icon: Building,
      title: "General Construction",
      description: "Complete building construction services from foundation to finishing, including residential and commercial projects.",
      features: ["New Construction", "Renovations", "Extensions", "Project Management"]
    },
    {
      icon: Wrench,
      title: "Specialized Services",
      description: "Expert specialized construction services for unique projects requiring advanced technical expertise.",
      features: ["Steel Structure", "Concrete Works", "Electrical Systems", "Plumbing Installation"]
    },
    {
      icon: Truck,
      title: "Infrastructure",
      description: "Large-scale infrastructure development including roads, bridges, and utility installations.",
      features: ["Road Construction", "Bridge Building", "Utility Installation", "Site Preparation"]
    },
    {
      icon: Users,
      title: "Consultation",
      description: "Professional construction consultation and project planning services to ensure successful outcomes.",
      features: ["Project Planning", "Cost Estimation", "Technical Advice", "Quality Control"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-neutral-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-neutral-900 sm:text-4xl lg:text-5xl mb-4">
            Construction Services
          </h2>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
            Professional construction services delivered by experienced teams with a commitment to quality, 
            safety, and on-time completion.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-neutral-100">
              <div className="flex items-center justify-center w-16 h-16 bg-primary-100 rounded-xl mb-6 group-hover:bg-primary-600 transition-colors">
                <service.icon className="w-8 h-8 text-primary-600 group-hover:text-white transition-colors" />
              </div>
              
              <h3 className="text-xl font-semibold text-neutral-900 mb-3">{service.title}</h3>
              <p className="text-neutral-600 mb-6">{service.description}</p>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-neutral-600">
                    <div className="w-1.5 h-1.5 bg-secondary-500 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
