import { Sparkles } from 'lucide-react';
import onlyLeaf from '../assets/only_Leaf.png';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-teal-700 via-teal-600 to-amber-500 text-white py-24 sm:py-40 md:py-48">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-200 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 right-0 w-72 h-72 bg-teal-300 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center gap-8 md:gap-12">
          <div className="flex flex-col items-center gap-6">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-orange-400 rounded-full blur-xl opacity-75 animate-pulse"></div>
              <div className="relative flex items-center justify-center w-32 h-32 rounded-full border-4 border-white bg-gradient-to-br from-teal-500 to-teal-700 shadow-2xl">
                <img src={onlyLeaf} alt="Leaf" className="w-14 h-14" />
              </div>
            </div>

            <div className="space-y-3">
              <h1 className="text-6xl sm:text-7xl md:text-8xl font-bold tracking-tighter">
                ENERGY & EASE
              </h1>
              <div className="flex items-center justify-center gap-2">
                <Sparkles size={24} className="text-amber-300" />
                <p className="text-amber-200 text-2xl sm:text-3xl font-light tracking-wide">
                  Massage Therapy
                </p>
                <Sparkles size={24} className="text-amber-300" />
              </div>
            </div>
          </div>

          <div className="max-w-3xl space-y-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light leading-tight">
              Experience the transformative power of therapeutic massage
            </h2>
            <p className="text-teal-100 text-lg sm:text-xl leading-relaxed">
              At Energy & Ease, we specialize in personalized massage therapy designed to enhance your well-being, alleviate pain, and restore balance to your life. Every session is tailored to your unique needs.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <a
                href="https://brandedweb.mindbodyonline.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white hover:bg-gray-100 text-teal-700 px-10 py-4 rounded-full font-bold text-lg transition-all transform hover:scale-105 shadow-lg"
              >
                Book Your Session
              </a>
              <a
                href="#services"
                className="inline-block border-2 border-white hover:bg-white hover:text-teal-700 text-white px-10 py-4 rounded-full font-bold text-lg transition-all transform hover:scale-105"
              >
                Explore Services
              </a>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-white border-opacity-20">
            <div className="text-center">
              <p className="text-3xl font-bold text-amber-300 mb-2">100%</p>
              <p className="text-sm text-teal-100">Personalized</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-amber-300 mb-2">Expert</p>
              <p className="text-sm text-teal-100">Therapists</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-amber-300 mb-2">Proven</p>
              <p className="text-sm text-teal-100">Results</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
