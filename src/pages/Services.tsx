import  { useState } from 'react';
import ServiceCard from '../components/ServiceCard';
// import ServiceModal from '../components/ServiceModal';
import { primaryServices, specializedServices, addonServices, deliveryTypes } from '../data';
import { Service } from '../type';
import { Link } from 'react-router-dom';
import ServiceModal from '../components/ServiceModal';

const Services = () => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleLearnMore = (service: Service) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedService(null);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-green-50 py-16">
        <div className="container mx-auto text-center">
          <h1 className="font-heading font-extrabold text-3xl sm:text-4xl text-slate mb-4">
            Comprehensive Healthcare Services
          </h1>
          <p className="font-body text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From basic daily care to specialized medical support, we provide a full range of 
            healthcare services designed to meet your unique needs and enhance your quality of life.
          </p>
        </div>
      </section>

      {/* Primary Services */}
      <section className="py-16 bg-white">
        <div className="container mx-auto ">
          <div className="mb-12">
            <h2 className="font-heading font-extrabold text-3xl text-slate mb-4">
              Primary Care Services
            </h2>
            <p className="font-body text-lg text-gray-600">
              Essential healthcare services that form the foundation of our care approach.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {primaryServices.map((service) => (
              <ServiceCard 
                key={service.id} 
                service={service} 
                onLearnMore={handleLearnMore}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Specialized Services */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto ">
          <div className="mb-12">
            <h2 className="font-heading font-extrabold text-3xl text-slate mb-4">
              Specialized Care Services
            </h2>
            <p className="font-body text-lg text-gray-600">
              Tailored care solutions for specific health conditions and recovery needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {specializedServices.map((service) => (
              <ServiceCard 
                key={service.id} 
                service={service}
                onLearnMore={handleLearnMore}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Add-On Services */}
      <section className="py-16 bg-white">
        <div className="container mx-auto ">
          <div className="mb-12">
            <h2 className="font-heading font-extrabold text-3xl text-slate mb-4">
              Enhanced Care Options
            </h2>
            <p className="font-body text-lg text-gray-600">
              Additional services to provide comprehensive support for complex care needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2  gap-6">
            {addonServices.map((service) => (
              <ServiceCard 
                key={service.id} 
                service={service}
                onLearnMore={handleLearnMore}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Service Delivery Methods */}
      <section className="py-16 bg-gradient-to-r from-[#0EA5E9]/5 to-[#10B981]/5">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl text-slate mb-4">
              Flexible Care Delivery
            </h2>
            <p className="font-body text-gray-600 max-w-2xl mx-auto">
              We adapt to your preferences and needs with multiple care delivery options.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {deliveryTypes.map((type) => {
              const IconComponent = type.icon;
              return (
                <div key={type.id} className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 text-center hover:shadow-lg transition-shadow">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#0EA5E9] to-[#10B981] rounded-full flex items-center justify-center mx-auto mb-6">
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-heading font-semibold text-xl text-slate mb-3">
                    {type.title}
                  </h3>
                  <p className="font-body text-gray-600 leading-relaxed">
                    {type.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-slate-800 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading font-bold text-3xl mb-4">
            Need Help Choosing the Right Service?
          </h2>
          <p className="font-body text-gray-300 mb-8">
            Our care coordinators are here to help you find the perfect combination of services 
            for your unique situation. Get a free consultation today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              className="bg-[#0EA5E9] px-8 py-3 rounded text-sm hover:bg-[#0EA5E9]/90 text-white font-body font-medium"
            >
              <Link to="/contact">Schedule Consultation</Link>
            </button>
            <button 
              className="border-white text-white hover:bg-white px-8 py-3 rounded text-sm hover:text-slate font-body font-medium hover:text-blue-700"
            >
              <a href="tel:+1234567890">Call (123) 456-7890</a>
            </button>
          </div>
        </div>
      </section>

      {/* Service Modal */}
      <ServiceModal 
        service={selectedService}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </div>
  );
};

export default Services;