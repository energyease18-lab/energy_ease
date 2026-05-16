import { Heart } from 'lucide-react';
import Logo from '../assets/Logo.png';
import InstaIcon from '../assets/Insta.png';
import YouTubeIcon from '../assets/YouTube.png';
import TikTokIcon from '../assets/Tiktok.png';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-gray-900 via-gray-900 to-black text-gray-300 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-teal-900 rounded-full blur-3xl opacity-10"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-900 rounded-full blur-3xl opacity-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="py-16 grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="flex flex-col items-center md:items-start space-y-3">
              <img src={Logo} alt="ENERGY & EASE" className="w-64 h-auto" />
            <p className="text-gray-400 text-sm mt-4 md:mt-0 text-center md:text-left">
              Where calmness blooms, healing flourishes.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-white mb-6 text-lg">Services</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#services" className="text-gray-400 hover:text-amber-400 transition-colors font-medium">
                  Deep Tissue
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-amber-400 transition-colors font-medium">
                  Swedish Massage
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-amber-400 transition-colors font-medium">
                  Chair Massage
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-amber-400 transition-colors font-medium">
                  Premium Add-ons
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-6 text-lg">Company</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#about" className="text-gray-400 hover:text-amber-400 transition-colors font-medium">
                  About Us
                </a>
              </li>
              <li>
                <a href="#hours" className="text-gray-400 hover:text-amber-400 transition-colors font-medium">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-6 text-lg">Connect</h4>
            <div className="space-y-4">
              <a
                href="tel:+1-203-550-6882"
                className="text-amber-400 hover:text-amber-300 font-semibold text-sm block transition-colors"
              >
                +1 (203) 550-6882
              </a>
              <a
                href="https://www.energyandease.com"
                className="text-gray-400 hover:text-amber-400 text-sm block transition-colors"
              >
                www.energyandease.com
              </a>
              <div className="flex gap-3 pt-2">
                <a
                  href="https://www.instagram.com/mardocheebijoux"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full flex items-center justify-center transition-all transform hover:scale-110"
                  title="Instagram"
                >
                  <img src={InstaIcon} alt="Instagram" className="w-8 h-8" />
                </a>
                <a
                  href="https://www.youtube.com/@mardocheebijoux"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full flex items-center justify-center transition-all transform hover:scale-110"
                  title="YouTube"
                >
                  <img src={YouTubeIcon} alt="YouTube" className="w-8 h-8" />
                </a>
                <a
                  href="https://www.tiktok.com/@mardocheebijoux"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full flex items-center justify-center transition-all transform hover:scale-110"
                  title="TikTok"
                >
                  <img src={TikTokIcon} alt="TikTok" className="w-8 h-8" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 pb-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <Heart size={16} className="text-amber-500" />
              <p>
                &copy; {currentYear} Energy & Ease. All rights reserved.
              </p>
            </div>
            <p className="text-gray-500 text-xs text-center md:text-right">
              Crafted with care for your wellness journey
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
