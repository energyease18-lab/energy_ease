import { ChevronRight, Zap } from 'lucide-react';

const deepTissueImg = new URL('../assets/DEEP_TISSUE.jpg.jpeg', import.meta.url).href;
const swedishImg = new URL('../assets/SWEDISH_MASSAGE.jpg.jpeg', import.meta.url).href;
const chairImg = new URL('../assets/CHAIR_MASSAGE.jpg.jpeg', import.meta.url).href;

interface ServicesProps {
  onServiceClick: (serviceId: string) => void;
}

const services = [
  {
    id: 'deep-tissue',
    title: 'Deep Tissue',
    description:
      'Targets deeper layers of muscle and connective tissue using firm, slow pressure. Ideal for chronic pain and muscle tension.',
    image: deepTissueImg,
    fullDescription:
      'This massage focuses on the deeper layers of muscle and connective tissue using firm, slow pressure. Ideal for individuals dealing with chronic pain, tight muscles, or postural tension.',
    badge: 'Most Popular',
    color: 'from-red-500 to-orange-500',
  },
  {
    id: 'swedish',
    title: 'Swedish',
    description:
      'Offers a soothing, gentle experience ideal for overall relaxation and stress relief.',
    image: swedishImg,
    fullDescription:
      'Using long, flowing strokes and gentle kneading, this massage improves circulation, reduces stress, and promotes deep relaxation. Essential oils may be used for an enhanced soothing experience.',
    badge: 'Relaxation',
    color: 'from-pink-500 to-rose-500',
  },
  {
    id: 'chair',
    title: 'Chair Massage',
    description:
      'Delivers quick relief in a compact format, perfect for busy schedules and office wellness.',
    image: chairImg,
    fullDescription:
      'Perfect for busy schedules, our chair massage targets the neck, shoulders, and back while you remain comfortably seated. Great for stress relief, office wellness, or a quick reset.',
    badge: 'Quick Relief',
    color: 'from-blue-500 to-cyan-500',
  },
];

export default function Services({ onServiceClick }: ServicesProps) {
  return (
    <section id="services" className="py-20 sm:py-32 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-teal-200 rounded-full blur-3xl opacity-5"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-200 rounded-full blur-3xl opacity-5"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Zap size={28} className="text-amber-500" />
            <h2 className="text-5xl sm:text-6xl font-bold bg-gradient-to-r from-teal-600 to-amber-500 bg-clip-text text-transparent">
              Our Services
            </h2>
            <Zap size={28} className="text-amber-500" />
          </div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            We offer a range of massage styles to suit your unique needs, from alleviating chronic pain to promoting relaxation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <button
              key={service.id}
              onClick={() => onServiceClick(service.id)}
              className="group cursor-pointer text-left h-full"
            >
              <div className="relative overflow-hidden rounded-2xl mb-6 h-80 bg-gradient-to-br from-gray-300 to-gray-400 shadow-lg flex items-center justify-center">
                {service.badge && (
                  <div className={`absolute top-4 right-4 bg-gradient-to-r ${service.color} text-white px-4 py-2 rounded-full text-xs font-bold shadow-lg z-10`}>
                    {service.badge}
                  </div>
                )}
                <img
                  src={service.image}
                  alt={service.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  onError={(e) => {
                    console.error(`Failed to load image: ${service.image}`);
                    (e.target as HTMLImageElement).style.display = 'none';
                  }}
                />
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </div>

              <div className="space-y-3">
                <h3 className="text-3xl font-bold text-gray-900 mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-teal-600 group-hover:to-amber-500 group-hover:bg-clip-text transition-all">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed group-hover:text-gray-700 transition-colors">
                  {service.description}
                </p>

                <div className="flex items-center gap-2 text-teal-600 font-semibold group-hover:gap-3 transition-all pt-2">
                  <span>Discover More</span>
                  <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-teal-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </button>
          ))}
        </div>

      </div>
    </section>
  );
}
