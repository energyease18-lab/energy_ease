import { ChevronLeft } from 'lucide-react';

const deepTissueImg = new URL('../assets/DEEP_TISSUE.jpg.jpeg', import.meta.url).href;
const swedishImg = new URL('../assets/SWEDISH_MASSAGE.jpg.jpeg', import.meta.url).href;
const chairImg = new URL('../assets/CHAIR_MASSAGE.jpg.jpeg', import.meta.url).href;

interface ServiceDetailProps {
  serviceId: string;
  onBack: () => void;
}

const serviceDetails: Record<
  string,
  {
    title: string;
    image: string;
    fullDescription: string;
    benefits: string[];
    idealFor: string;
  }
> = {
  'deep-tissue': {
    title: 'Deep Tissue Massage',
    image: deepTissueImg,
    fullDescription:
      'Deep tissue massage focuses on the deeper layers of muscle and connective tissue using firm, slow, deliberate pressure. This technique is designed to reach the innermost layers of your muscles, releasing tension and promoting healing from within.',
    benefits: [
      'Alleviates chronic pain and muscle tension',
      'Improves flexibility and range of motion',
      'Reduces muscle stiffness and soreness',
      'Promotes better posture and alignment',
      'Enhances circulation to affected areas',
      'Speeds up recovery from injuries',
    ],
    idealFor:
      'Individuals dealing with chronic pain, tight muscles, postural tension, or those recovering from injuries. Perfect for athletes and active individuals.',
  },
  swedish: {
    title: 'Swedish Massage',
    image: swedishImg,
    fullDescription:
      'Swedish massage uses long, flowing strokes combined with gentle kneading and circular movements. This soothing technique improves blood circulation, reduces stress, and promotes deep relaxation throughout the body.',
    benefits: [
      'Reduces stress and anxiety',
      'Improves blood circulation',
      'Promotes overall relaxation',
      'Enhances sleep quality',
      'Relieves muscle tension',
      'Boosts mood and well-being',
    ],
    idealFor:
      'Anyone seeking relaxation and stress relief. Ideal for first-time massage clients and those looking for a gentle, soothing experience.',
  },
  chair: {
    title: 'Chair Massage',
    image: chairImg,
    fullDescription:
      'Chair massage delivers therapeutic benefits in a compact, convenient format. Performed while you remain seated in a comfortable massage chair, it targets the neck, shoulders, back, and arms.',
    benefits: [
      'Perfect for busy schedules',
      'Targets problem areas quickly',
      'No need to undress',
      'Great for office wellness',
      'Provides immediate stress relief',
      'Improves circulation efficiently',
    ],
    idealFor:
      'Busy professionals, corporate wellness programs, and anyone needing quick, effective relief. Perfect for office environments and on-the-go relaxation.',
  },
};

export default function ServiceDetail({
  serviceId,
  onBack,
}: ServiceDetailProps) {
  const service = serviceDetails[serviceId];

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-600 mb-4">Service not found</p>
          <button
            onClick={onBack}
            className="text-teal-600 hover:text-teal-700 font-semibold"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 text-teal-600 hover:text-teal-700 font-semibold p-4 sm:p-6 lg:p-8 transition-colors"
        >
          <ChevronLeft size={20} />
          Back to Services
        </button>

        <div className="px-4 sm:px-6 lg:px-8 pb-20">
          <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-8 underline decoration-amber-500 decoration-4 underline-offset-4">
            {service.title}
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div className="rounded-lg overflow-hidden h-96 lg:h-full bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center">
              <img
                src={service.image}
                alt={service.title}
                loading="lazy"
                className="w-full h-full object-cover"
                onError={(e) => {
                  console.error(`Failed to load image: ${service.image}`);
                  (e.target as HTMLImageElement).style.display = 'none';
                }}
              />
            </div>

            <div className="flex flex-col justify-center">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  What to Expect
                </h2>
                <p className="text-gray-700 text-lg leading-relaxed">
                  {service.fullDescription}
                </p>
              </div>

              <a
                href="tel:+1-203-550-6882"
                className="inline-block bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-full font-bold text-lg transition-all transform hover:scale-105 w-fit"
              >
                Book This Service
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Key Benefits
              </h2>
              <ul className="space-y-3">
                {service.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="flex-shrink-0 mt-1">
                      <div className="flex items-center justify-center h-6 w-6 rounded-full bg-amber-500 text-white font-bold text-sm">
                        ✓
                      </div>
                    </div>
                    <span className="text-gray-700 text-lg">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-teal-50 p-8 rounded-lg border-2 border-teal-200">
              <h2 className="text-3xl font-bold text-teal-900 mb-4">
                Ideal For
              </h2>
              <p className="text-teal-800 text-lg leading-relaxed mb-6">
                {service.idealFor}
              </p>

              <div className="space-y-4">
                <div>
                  <h3 className="font-bold text-teal-900 mb-2">
                    Session Duration
                  </h3>
                  <p className="text-teal-800">30, 60, or 90 minutes</p>
                </div>

                <div>
                  <h3 className="font-bold text-teal-900 mb-2">
                    Customization
                  </h3>
                  <p className="text-teal-800">
                    Each session is tailored to your specific needs and preferences
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-teal-900 mb-2">Add-ons</h3>
                  <p className="text-teal-800">
                    Enhance your experience with aromatherapy, hot stones, CBD oil, or other premium add-ons
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 bg-gradient-to-r from-teal-600 to-teal-700 text-white p-12 rounded-lg text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Experience Relief?</h2>
            <p className="text-lg mb-6 text-teal-100">
              Contact us today to schedule your personalized massage session
            </p>
            <div
              className="inline-block bg-amber-500 hover:bg-amber-600 text-white px-8 py-3 rounded-full font-bold text-lg transition-colors"
            >
              Call +1 (203) 550-6882
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
