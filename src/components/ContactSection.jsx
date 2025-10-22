import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Contact form submitted:", formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: ["+393808976262"],
      subtitle: "24/7 Emergency Line Available"
    },
    {
      icon: Mail,
      title: "Email",
      details: ["support@gfratelicostruzione.center"],
      subtitle: "We respond within 24 hours"
    },
    {
      icon: MapPin,
      title: "Office",
      details: ["Via Monticelli 1/B", "Soiano Del Lago, BS 25080, Italy"],
      subtitle: "Visit our showroom"
    },
    {
      icon: Clock,
      title: "Hours",
      details: ["Mon-Fri: 7:00 AM - 6:00 PM", "Sat: 8:00 AM - 4:00 PM"],
      subtitle: "Sunday: Emergency only"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-neutral-900">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl mb-4">
            Get Your Project Started
          </h2>
          <p className="text-lg text-neutral-300 max-w-3xl mx-auto">
            Ready to begin your construction project or need equipment? Contact our team for a free consultation 
            and personalized quote tailored to your specific needs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1">
            <h3 className="text-xl font-semibold text-white mb-6">Contact Information</h3>
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center">
                    <info.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">{info.title}</h4>
                    {info.details.map((detail, detailIndex) => (
                      <p key={detailIndex} className="text-neutral-300">{detail}</p>
                    ))}
                    <p className="text-sm text-neutral-400 mt-1">{info.subtitle}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="bg-neutral-800 rounded-2xl p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-white mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg border-0 bg-neutral-700 px-4 py-3 text-white placeholder:text-neutral-400 focus:ring-2 focus:ring-primary-500 transition-colors"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-white mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg border-0 bg-neutral-700 px-4 py-3 text-white placeholder:text-neutral-400 focus:ring-2 focus:ring-primary-500 transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-white mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full rounded-lg border-0 bg-neutral-700 px-4 py-3 text-white placeholder:text-neutral-400 focus:ring-2 focus:ring-primary-500 transition-colors"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
                <div>
                  <label htmlFor="service" className="block text-sm font-semibold text-white mb-2">
                    Service Needed
                  </label>
                  <select
                    name="service"
                    id="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full rounded-lg border-0 bg-neutral-700 px-4 py-3 text-white focus:ring-2 focus:ring-primary-500 transition-colors"
                  >
                    <option value="">Select a service</option>
                    <option value="construction">Construction Services</option>
                    <option value="equipment">Equipment Purchase</option>
                    <option value="consultation">Consultation</option>
                    <option value="maintenance">Maintenance & Support</option>
                  </select>
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-semibold text-white mb-2">
                  Project Details *
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg border-0 bg-neutral-700 px-4 py-3 text-white placeholder:text-neutral-400 focus:ring-2 focus:ring-primary-500 resize-none transition-colors"
                  placeholder="Tell us about your project requirements, timeline, and any specific needs..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-secondary-600 text-white py-4 rounded-lg hover:bg-secondary-700 transition-colors font-semibold text-lg"
              >
                Request Free Quote
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
