import { Clock, Phone, Globe } from 'lucide-react';
import InstaIcon from '../assets/Insta.png';
import YouTubeIcon from '../assets/YouTube.png';
import TikTokIcon from '../assets/Tiktok.png';
export default function Hours() {
  return (
    <section id="contact" className="py-20 sm:py-32 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-200 rounded-full blur-3xl opacity-5"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          <div className="space-y-8">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-gradient-to-br from-teal-100 to-amber-100 rounded-lg">
                <Clock size={32} className="text-teal-600" />
              </div>
              <h2 className="text-5xl sm:text-6xl font-bold text-gray-900">
                Hours & Contact
              </h2>
            </div>

            <div className="space-y-6">
              <div className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl border-l-4 border-teal-500 shadow-lg hover:shadow-xl transition-shadow">
                <p className="font-bold text-2xl text-gray-900 mb-2">Tuesday</p>
                <p className="text-gray-600 text-lg">11:00 AM - 7:00 PM</p>
              </div>

              <div className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl border-l-4 border-amber-500 shadow-lg hover:shadow-xl transition-shadow">
                <p className="font-bold text-2xl text-gray-900 mb-2">Thursday</p>
                <p className="text-gray-600 text-lg">11:00 AM - 7:00 PM</p>
              </div>

              <div className="bg-gradient-to-br from-teal-50 to-teal-100 p-8 rounded-2xl border-2 border-teal-300 mt-8">
                <p className="text-teal-900 font-bold text-lg mb-2">
                  Limited Availability
                </p>
                <p className="text-teal-800 mb-6">
                  Book early to secure your preferred time slot. Personalized sessions require advanced notice.
                </p>
                <a
                  href="https://brandedweb.mindbodyonline.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 text-white px-8 py-3 rounded-lg font-bold transition-all transform hover:scale-105"
                >
                  Book Now
                </a>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-teal-700 via-teal-600 to-amber-500 text-white p-12 rounded-2xl shadow-2xl relative overflow-hidden group">
            <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
              <div className="absolute top-0 right-0 w-40 h-40 bg-white rounded-full blur-3xl"></div>
            </div>

            <div className="relative z-10 space-y-10">
              <h3 className="text-4xl font-bold mb-8">Get In Touch</h3>

              <div className="space-y-3">
                <div className="flex items-start gap-4">
                  <Phone size={24} className="text-amber-300 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-teal-100 font-semibold mb-1">Phone</p>
                    <a
                      href="tel:+1-203-550-6882"
                      className="text-white text-xl font-bold hover:text-amber-200 transition-colors"
                    >
                      +1 (203) 550-6882
                    </a>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-start gap-4">
                  <Globe size={24} className="text-amber-300 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-teal-100 font-semibold mb-1">Website</p>
                    <a
                      href="https://www.energyandease.com"
                      className="text-white text-lg hover:text-amber-200 transition-colors"
                    >
                      www.energyandease.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="pt-8 border-t border-white border-opacity-30 space-y-4">
                <p className="text-teal-100 font-bold text-lg">Follow Our Journey</p>
                <div className="flex gap-4">
                  <div className="flex gap-3 pt-2">
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full flex items-center justify-center transition-all transform hover:scale-110"
                  title="Instagram"
                >
                  <img src={InstaIcon} alt="Instagram" className="w-12 h-12" />
                </a>
                <a
                  href="https://www.youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full flex items-center justify-center transition-all transform hover:scale-110"
                  title="YouTube"
                >
                  <img src={YouTubeIcon} alt="YouTube" className="w-12 h-12" />
                </a>
                <a
                  href="https://www.tiktok.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full flex items-center justify-center transition-all transform hover:scale-110"
                  title="TikTok"
                >
                  <img src={TikTokIcon} alt="TikTok" className="w-12 h-12" />
                </a>
              </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
