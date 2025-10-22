import React from 'react';
import { HardHat } from 'lucide-react';
function Footer() {
  return (
    <footer className="bg-neutral-800 text-neutral-300">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-2 mb-4">
                <HardHat className="w-8 h-8 text-secondary-600" />
                <span className="text-xl font-bold text-white">Gruppo Fratelli</span>
              </div>
              <p className="text-neutral-400 mb-6 max-w-xs">
                Professional construction services and quality equipment sales for over 10 years. 
                Your trusted partner in building excellence.
              </p>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Services</h3>
              <ul className="space-y-3">
                <li><a href="#" className="hover:text-white transition-colors">General Construction</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Specialized Services</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Infrastructure</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Consultation</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Products</h3>
              <ul className="space-y-3">
                <li><a href="#" className="hover:text-white transition-colors">Construction Products</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Power Tools</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Safety Equipment</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Construction Materials</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Contact</h3>
              <ul className="space-y-3">
                <li className="text-neutral-400">Via Monticelli 1/B</li>
                <li className="text-neutral-400">Soiano Del Lago, BS 25080</li>
                <li className="text-neutral-400">Italy - IVA 04213640982</li>
                <li className="text-neutral-400">+393808976262</li>
                <li><a href="mailto:support@gfratelicostruzione.center" className="hover:text-white transition-colors">support@gfratelicostruzione.center</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-neutral-700 py-4">
          <div className="text-center text-sm text-neutral-400">
            AI vibe coded development by Biela.dev, powered by TeachMeCode® Institute with @GruppoFratell Srl. 2025
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
