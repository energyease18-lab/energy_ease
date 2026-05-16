import { Sparkles } from 'lucide-react';

const cuppingImg = new URL('../assets/CUPPING.jpg.jpeg', import.meta.url).href;
const cbdOilImg = new URL('../assets/CBD_OIL.jpg.jpeg', import.meta.url).href;
const scalpMassageImg = new URL('../assets/SCALP_MASSAGE_OIL.jpg.jpeg', import.meta.url).href;
const herbalOilImg = new URL('../assets/HERBAL_MASSAGE_OIL.jpg.jpeg', import.meta.url).href;
const hotStonesImg = new URL('../assets/HOT_STONES.jpg copy.jpeg', import.meta.url).href;

const addOns = [
  {
    title: 'Cupping',
    description:
      'Uses suction cups to boost circulation and relieve muscle tension.',
    image: cuppingImg,
    benefits: ['Improves blood flow', 'Reduces inflammation', 'Relieves pain'],
  },
  {
    title: 'CBD Oil',
    description:
      'Infuses your session with calming properties, reducing pain and anxiety.',
    image: cbdOilImg,
    benefits: ['Reduces anxiety', 'Alleviates pain', 'Promotes relaxation'],
  },
  {
    title: 'Scalp Massage',
    description:
      'Targets tension in the head and neck, improving blood flow and relaxation.',
    image: scalpMassageImg,
    benefits: ['Releases tension', 'Improves focus', 'Reduces headaches'],
  },
  {
    title: 'Herbal Massage Oil',
    description:
      'Infused with therapeutic herbs for stress relief and enhanced circulation.',
    image: herbalOilImg,
    benefits: ['Therapeutic herbs', 'Stress relief', 'Better circulation'],
  },
  {
    title: 'Hot Stone',
    description:
      'Utilizes heated stones to soothe muscles and enhance relaxation.',
    image: hotStonesImg,
    benefits: ['Deep relaxation', 'Muscle relief', 'Tension release'],
  },
  {
    title: 'Aromatherapy',
    description:
      'Incorporates essential oils to engage your senses and promote calm or invigoration.',
    image: scalpMassageImg,
    benefits: ['Sensory engagement', 'Mental clarity', 'Emotional balance'],
  },
];

export default function AddOns() {
  return (
    <section className="py-20 sm:py-32 bg-gradient-to-b from-white via-amber-50 to-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-200 rounded-full blur-3xl opacity-10 -mr-48 -mt-48"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-200 rounded-full blur-3xl opacity-10 -ml-48 -mb-48"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Sparkles size={32} className="text-amber-500 animate-pulse" />
            <h2 className="text-5xl sm:text-6xl font-bold bg-gradient-to-r from-teal-600 to-amber-500 bg-clip-text text-transparent">
              Elevate Your Experience
            </h2>
            <Sparkles size={32} className="text-amber-500 animate-pulse" />
          </div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Enhance your massage with our premium add-ons designed to amplify relaxation and wellness
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {addOns.map((addon, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 h-full"
            >
              <div className="relative h-64 overflow-hidden bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center">
                <img
                  src={addon.image}
                  alt={addon.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  onError={(e) => {
                    console.error(`Failed to load image: ${addon.image}`);
                    (e.target as HTMLImageElement).style.display = 'none';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
              </div>

              <div className="p-6 relative">
                <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-teal-600 transition-colors">
                  {addon.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {addon.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {addon.benefits.map((benefit, idx) => (
                    <span
                      key={idx}
                      className="inline-block bg-gradient-to-r from-amber-100 to-orange-100 text-amber-800 px-3 py-1 rounded-full text-xs font-semibold"
                    >
                      {benefit}
                    </span>
                  ))}
                </div>
              </div>

              <div className="absolute top-0 right-0 w-1 h-full bg-gradient-to-b from-amber-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
