import React, { useState } from 'react';
import { Settings, Zap, Shield, TrendingUp, ChevronLeft, ChevronRight } from 'lucide-react';

function ProductsSection() {
  const [activeCategory, setActiveCategory] = useState('power-tools');
  const [activeImageIndex, setActiveImageIndex] = useState({});

  const categories = [
    { id: 'power-tools', name: 'Power Tools', icon: Settings },
    { id: 'air-compressors', name: 'Air Compressors', icon: Zap },
    { id: 'pneumatic-tools', name: 'Pneumatic Tools', icon: Shield }
  ];

  const products = {
    'power-tools': [
      {
        id: 1,
        brand: "Bosch",
        model: "GSB 13 RE Professional",
        title: "Impact Drill",
        description: "Professional impact drill with 600W motor, perfect for drilling in concrete, masonry, and metal applications.",
        price: "€189",
        images: [
          "https://content-studio.biela.dev/i/content-studio/68f78c9c54b361c429584152/1761054085176-68f78c9c54b361c429584152/1761061420859.jpeg",
          "https://content-studio.biela.dev/i/content-studio/68f78c9c54b361c429584152/1761054085176-68f78c9c54b361c429584152/1761061420859.jpeg"
        ],
        specs: ["18V Biturbo", "165mm Blade", "5200 RPM", "54mm Cut Depth", "2.9kg Weight"],
        features: ["Biturbo Brushless", "Electronic Protection", "CutControl", "Bevel 50°"]
      },
      {
        id: 2,
        brand: "Makita",
        model: "HM1812 AVT",
        title: "Demolition Hammer",
        description: "Heavy-duty demolition hammer with Anti-Vibration Technology for professional demolition work.",
        price: "€1,299",
        images: [
          "https://content-studio.biela.dev/i/content-studio/68f78c9c54b361c429584152/1761054085176-68f78c9c54b361c429584152/1761061277596.jpeg",
          "https://content-studio.biela.dev/i/content-studio/68f78c9c54b361c429584152/1761054085176-68f78c9c54b361c429584152/1761061277596.jpeg"
        ],
        specs: ["1800W Motor", "70J Impact Energy", "300-600 BPM", "SDS-Max", "12.7kg Weight"],
        features: ["Anti-Vibration Technology", "Constant Speed Control", "Soft Start", "Service Light"]
      },
      {
        id: 3,
        brand: "Bosch",
        model: "GKS18V-25CN",
        title: "Circular Saw 18V",
        description: "Cordless circular saw with biturbo brushless technology for maximum performance and extended runtime.",
        price: "€245",
      images: [
        "https://content-studio.biela.dev/i/content-studio/68f78c9c54b361c429584152/1761054085176-68f78c9c54b361c429584152/1761061065307.jpeg",
        "https://content-studio.biela.dev/i/content-studio/68f78c9c54b361c429584152/1761054085176-68f78c9c54b361c429584152/1761061065307.jpeg"
      ],
        specs: ["18V Brushless", "165mm Blade", "5250 RPM", "57mm Cut Depth", "3kg Weight"],
        features: ["Brushless Motor", "LED Work Light", "Dust Port", "Bevel Capacity 50°"]
      },
      {
        id: 4,
        brand: "Metabo",
        model: "STE 100 Quick",
        title: "Jigsaw Professional",
        description: "Professional jigsaw with quick blade change system and precision cutting capabilities.",
        price: "€167",
        images: [
          "https://content-studio.biela.dev/i/content-studio/68f78c9c54b361c429584152/1761054085176-68f78c9c54b361c429584152/1761061509095.jpeg",
          "https://content-studio.biela.dev/i/content-studio/68f78c9c54b361c429584152/1761054085176-68f78c9c54b361c429584152/1761061509095.jpeg"
        ],
        specs: ["710W Motor", "26mm Stroke", "3100 SPM", "100mm Cut Depth", "2.3kg Weight"],
        features: ["Quick Blade Change", "Variable Speed", "Dust Blower", "LED Light"]
      }
    ],
    'air-compressors': [
      {
        id: 5,
        brand: "Fiac",
        model: "AB 50-268 M",
        title: "Belt Drive Compressor",
        description: "Professional belt-driven air compressor with 50L tank capacity, ideal for continuous operation.",
        price: "€485",
        images: [
          "https://content-studio.biela.dev/i/content-studio/68f78c9c54b361c429584152/1761054085176-68f78c9c54b361c429584152/1761061668912.jpeg",
          "https://content-studio.biela.dev/i/content-studio/68f78c9c54b361c429584152/1761054085176-68f78c9c54b361c429584152/1761061668912.jpeg"
        ],
        specs: ["2HP Motor", "50L Tank", "10 Bar Pressure", "268 L/min", "230V Single Phase"],
        features: ["Belt Drive System", "Pressure Gauge", "Safety Valve", "Drain Valve"]
      },
      {
        id: 6,
        brand: "Einhell",
        model: "TC-AC 480/50/8",
        title: "Oil-Free Compressor",
        description: "Maintenance-free oil-free compressor with 50L tank, perfect for spray painting and pneumatic tools.",
        price: "€329",
        images: [
          "https://content-studio.biela.dev/i/content-studio/68f78c9c54b361c429584152/1761054085176-68f78c9c54b361c429584152/1761061772967.jpeg",
          "https://content-studio.biela.dev/i/content-studio/68f78c9c54b361c429584152/1761054085176-68f78c9c54b361c429584152/1761061772967.jpeg"
        ],
        specs: ["2200W Motor", "50L Tank", "8 Bar Pressure", "480 L/min", "Oil-Free Pump"],
        features: ["Maintenance Free", "Quick Couplers", "Pressure Regulator", "Manometer"]
      },
    ],
    'pneumatic-tools': [
      {
        id: 8,
        brand: "Chicago Pneumatic",
        model: "CP7255CVE",
        title: "Impact Wrench 1/2\"",
        description: "High-performance pneumatic impact wrench with composite housing for reduced weight and vibration.",
        price: "€445",
        images: [
          "",
          ""
        ],
        specs: ["1690 Nm Torque", "1/2\" Drive", "7000 RPM", "6.3 Bar Pressure", "2.3kg Weight"],
        features: ["Composite Housing", "One-Hand Operation", "360° Swivel", "Twin Hammer Mechanism"]
      },
      {
        id: 9,
        brand: "Bosch",
        model: "0607560500",
        title: "Pneumatic Drill",
        description: "Professional pneumatic drill with reversible rotation and keyless chuck system.",
        price: "€289",
        images: [
          "",
          ""
        ],
        specs: ["13mm Chuck", "1800 RPM", "6.3 Bar Pressure", "283 L/min", "1.8kg Weight"],
        features: ["Keyless Chuck", "Reversible Rotation", "Speed Regulation", "Ergonomic Design"]
      },
      {
        id: 10,
        brand: "Makita",
        model: "MAC700",
        title: "Air Nailer 18GA",
        description: "Precision pneumatic brad nailer for finishing work with depth adjustment and contact safety.",
        price: "€215",
        images: [
          "https://content-studio.biela.dev/i/content-studio/68f78c9c54b361c429584152/1761054085176-68f78c9c54b361c429584152/1761061941830.jpeg",
          "https://content-studio.biela.dev/i/content-studio/68f78c9c54b361c429584152/1761054085176-68f78c9c54b361c429584152/1761061941830.jpeg"
        ],
        specs: ["18GA Nails", "15-50mm Length", "6.2-8.3 Bar", "100 Nail Magazine", "1.9kg Weight"],
        features: ["Depth Adjustment", "Contact Safety", "Tool-Free Jam Release", "Anti-Dry Fire"]
      },
      {
        id: 11,
        brand: "DeWalt",
        model: "DWMT70785",
        title: "Air Ratchet 3/8\"",
        description: "Compact pneumatic air ratchet with 360° swivel air inlet for maximum maneuverability.",
        price: "€156",
        images: [
          "",
          ""
        ],
        specs: ["3/8\" Drive", "203 RPM", "88 Nm Torque", "6.3 Bar Pressure", "1.4kg Weight"],
        features: ["360° Swivel Inlet", "Composite Handle", "Variable Speed", "Forward/Reverse"]
      }
    ]
  };

  const stats = [
    { icon: Settings, value: "Contact us", label: "for products available" },
    { icon: Zap, value: "99.8%", label: "Uptime Reliability" },
    { icon: Shield, value: "24/7", label: "Support Available" },
    { icon: TrendingUp, value: "10+", label: "Years in Business" }
  ];

  const nextImage = (productId) => {
    const product = Object.values(products).flat().find(p => p.id === productId);
    const currentIndex = activeImageIndex[productId] || 0;
    const nextIndex = (currentIndex + 1) % product.images.length;
    setActiveImageIndex({ ...activeImageIndex, [productId]: nextIndex });
  };

  const prevImage = (productId) => {
    const product = Object.values(products).flat().find(p => p.id === productId);
    const currentIndex = activeImageIndex[productId] || 0;
    const prevIndex = currentIndex === 0 ? product.images.length - 1 : currentIndex - 1;
    setActiveImageIndex({ ...activeImageIndex, [productId]: prevIndex });
  };

  return (
    <section id="products" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-neutral-900 sm:text-4xl lg:text-5xl mb-4">
            Professional Tools & Equipment
          </h2>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
            Browse our extensive catalog of professional power tools, air compressors, and pneumatic equipment from trusted brands. 
            Quality guaranteed with full support and training.
          </p>
        </div>

        {/* Category Navigation */}
        <div className="flex justify-center mb-12">
          <div className="flex space-x-1 bg-neutral-100 rounded-lg p-1">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-md transition-all duration-200 ${
                  activeCategory === category.id
                    ? 'bg-primary-600 text-white shadow-sm'
                    : 'text-neutral-600 hover:text-primary-600'
                }`}
              >
                <category.icon className="w-5 h-5" />
                <span className="font-medium">{category.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-16">
          {products[activeCategory]?.map((product) => (
            <div key={product.id} className="group bg-neutral-50 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="relative overflow-hidden">
                <img 
                  src={product.images[activeImageIndex[product.id] || 0]} 
                  alt={product.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-secondary-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {product.price}
                </div>
                {product.images.length > 1 && (
                  <div className="absolute inset-0 flex items-center justify-between p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button
                      onClick={() => prevImage(product.id)}
                      className="bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => nextImage(product.id)}
                      className="bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                )}
                {product.images.length > 1 && (
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                    {product.images.map((_, index) => (
                      <div
                        key={index}
                        className={`w-2 h-2 rounded-full ${
                          index === (activeImageIndex[product.id] || 0) ? 'bg-white' : 'bg-white/50'
                        }`}
                      />
                    ))}
                  </div>
                )}
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <span className="text-sm text-primary-600 font-semibold">{product.brand}</span>
                  <span className="text-xs text-neutral-500">{product.model}</span>
                </div>
                <h3 className="text-xl font-semibold text-neutral-900 mb-3">{product.title}</h3>
                <p className="text-neutral-600 mb-4 text-sm">{product.description}</p>
                
                <div className="space-y-3 mb-6">
                  <div>
                    <h4 className="text-sm font-semibold text-neutral-800 mb-2">Technical Specifications:</h4>
                    <div className="grid grid-cols-1 gap-1">
                      {product.specs.slice(0, 3).map((spec, specIndex) => (
                        <div key={specIndex} className="flex items-center text-xs text-neutral-600">
                          <div className="w-1 h-1 bg-primary-500 rounded-full mr-2"></div>
                          {spec}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-neutral-800 mb-2">Key Features:</h4>
                    <div className="grid grid-cols-1 gap-1">
                      {product.features.slice(0, 2).map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-xs text-neutral-600">
                          <div className="w-1 h-1 bg-secondary-500 rounded-full mr-2"></div>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 bg-neutral-900 rounded-2xl p-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-3">
                <stat.icon className="w-8 h-8 text-secondary-500" />
              </div>
              <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-neutral-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProductsSection;
