import { Heart, Award, Users, Clock } from 'lucide-react';

export default function About() {
  const features = [
    {
      icon: Heart,
      value: '100%',
      label: 'Personalized Care',
      description: 'Each session is customized to your specific needs and goals',
    },
    {
      icon: Award,
      value: 'Expert',
      label: 'Therapists',
      description: 'Certified professionals dedicated to your wellness journey',
    },
    {
      icon: Users,
      value: 'Proven',
      label: 'Results',
      description: 'Alleviate pain and promote lasting relaxation and relief',
    },
    {
      icon: Clock,
      value: 'Easy',
      label: 'Booking',
      description: 'Convenient scheduling that works with your busy life',
    },
  ];

  return (
    <section id="about" className="py-20 sm:py-32 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-teal-200 rounded-full blur-3xl opacity-5"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Why Choose
                <span className="block bg-gradient-to-r from-teal-600 to-amber-500 bg-clip-text text-transparent">
                  Energy & Ease?
                </span>
              </h2>
              <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                At Energy & Ease, we specialize in massage therapy, providing exceptional wellness services. Our mission is to enhance your well-being by sharing the healing power of massage with you.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                What sets us apart is our commitment to convenience and personalized care. Each session is tailored to your unique needs, ensuring you receive the most effective treatment possible.
              </p>
            </div>

          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="group relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden hover:-translate-y-2"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-teal-500 to-amber-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>

                  <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-3 bg-gradient-to-br from-teal-100 to-amber-100 rounded-lg group-hover:scale-110 transition-transform">
                        <Icon size={24} className="text-teal-600" />
                      </div>
                      <div className="text-3xl font-bold text-teal-600">
                        {feature.value}
                      </div>
                    </div>
                    <p className="text-gray-900 font-bold text-lg mb-2">
                      {feature.label}
                    </p>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
