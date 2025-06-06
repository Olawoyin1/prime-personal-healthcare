

import { MdCheckCircle, MdTrendingUp, MdFavorite, MdSecurity } from 'react-icons/md';

const benefits = [
  {
    icon: MdTrendingUp,
    title: 'Improved Quality of Life',
    description: 'Personalized care plans that enhance daily living and promote overall well-being.'
  },
  {
    icon: MdSecurity,
    title: 'Increased Independence',
    description: 'Maintain your autonomy while receiving the support you need in familiar surroundings.'
  },
  {
    icon: MdCheckCircle,
    title: 'Reduced Hospital Visits',
    description: 'Preventive care and early intervention help avoid unnecessary hospital readmissions.'
  },
  {
    icon: MdFavorite,
    title: 'Emotional & Social Support',
    description: 'Compassionate caregivers provide not just medical care, but genuine human connection.'
  }
];

const BenefitsSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-slate mb-4">
            Why Choose Our Care Services?
          </h2>
          <p className="font-body text-lg text-gray-600 max-w-2xl mx-auto">
            Experience the difference that personalized, compassionate healthcare can make in your life.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-[#10B981]/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#10B981] group-hover:scale-110 transition-all duration-300">
                  <IconComponent className="h-8 w-8 text-[#10B981] group-hover:text-white" />
                </div>
                <h3 className="font-heading font-semibold text-lg text-slate mb-2">
                  {benefit.title}
                </h3>
                <p className="font-body text-gray-600 text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;