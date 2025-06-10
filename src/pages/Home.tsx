import { Link } from 'react-router-dom';
import { MdArrowForward, MdSecurity, MdPeople, MdLocalHospital, MdPhone,  MdFavorite, MdGroup, MdVerified, MdHeadset } from 'react-icons/md';
import Hero from '../components/Hero';
import ServiceCard from '../components/ServiceCard';
import BenefitsSection from '../components/BenefitsSection';
import { deliveryTypes, primaryServices } from '../data';
import TestimonialCarousel from '../components/TestimonialCarousel';
import { FaRegCalendar } from "react-icons/fa";
import { GoArrowRight } from "react-icons/go";
import { MdOutlineSupportAgent } from "react-icons/md";
import { AiOutlineSchedule } from "react-icons/ai";
import { BsAward } from "react-icons/bs";
import MedicalComponent from '../components/MedicalComponent';



const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero />

      {/* Trust Indicators */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="space-y-3">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-50 to-green-50 rounded-full flex items-center justify-center mx-auto">
                <MdSecurity className="h-8 w-8 text-blue-700" />
              </div>
              <h3 className="font-heading font-semibold text-lg text-slate">Licensed & Insured</h3>
              <p className="font-body text-sm text-gray-600">Fully licensed healthcare professionals with comprehensive insurance coverage</p>
            </div>
            <div className="space-y-3">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-50 to-green-50 rounded-full flex items-center justify-center mx-auto">
                <MdPeople className="h-8 w-8 text-blue-900" />
              </div>
              <h3 className="font-heading font-semibold text-lg text-slate">500+ Families Served</h3>
              <p className="font-body text-sm text-gray-600">Trusted by hundreds of families across our community</p>
            </div>
            <div className="space-y-3">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-50 to-green-50 rounded-full flex items-center justify-center mx-auto">
                <MdLocalHospital className="h-8 w-8 text-blue-700" />
              </div>
              <h3 className="font-heading font-semibold text-lg text-slate">Hospital Partners</h3>
              <p className="font-body text-sm text-gray-600">Coordinated care with local hospitals and healthcare providers</p>
            </div>
            <div className="space-y-3">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-50 to-green-50 rounded-full flex items-center justify-center mx-auto">
                <MdOutlineSupportAgent className="h-8 w-8 text-blue-900" />
              </div>
              <h3 className="font-heading font-semibold text-lg text-slate">24/7 Support</h3>
              <p className="font-body text-sm text-gray-600">Round-the-clock support for emergencies and peace of mind</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Overview Cards */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto ">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-slate mb-4">
              Our Core Services
            </h2>
            <p className="font-body  text-gray-600 max-w-2xl mx-auto">
              Comprehensive healthcare solutions designed to meet your unique needs and preferences.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {primaryServices.map((service, index) => (
              <ServiceCard 
                key={service.id} 
                service={service} 
                featured={index === 1}
              />
            ))}
          </div>

          <div className="text-center">
            <button className="bg-[#0EA5E9] hover:bg-[#0EA5E9]/90 text-white text-sm px-8 py-3 font-body font-medium">
              <Link to="/services" className="flex items-center">
                View All Services
                <MdArrowForward className="ml-2 h-5 w-5" />
              </Link>
            </button>
          </div>
        </div>
      </section>

      {/* Service Delivery Types */}
      <section className="py-16 bg-white">
        <div className="container mx-auto ">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-slate mb-4">
              How We Deliver Care
            </h2>
            <p className="font-body text-gray-600 max-w-2xl mx-auto">
              Choose the care delivery method that works best for your lifestyle and needs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {deliveryTypes.map((type) => {
              const IconComponent = type.icon;
              return (
                <div key={type.id} className="text-center group">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#0EA5E9] to-[#10B981] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="h-10 w-10 text-white" />
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



      <MedicalComponent />

      {/* Why Choose Us Section - Modern Redesign */}
      <section className="py-20 bg-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0EA5E9]/5 to-[#10B981]/5"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-slate mb-4">
              Why Families Choose Us
            </h2>
            <p className="font-body  text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We're more than a healthcare provider. We're your trusted partners in maintaining 
              independence, dignity, and exceptional quality of life.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-4 md:gap-8 mb-16">
            {/* Left Column */}
            <div className="space-y-4 md:space-y-8">
              <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100">
                <div className="w-16 h-16 bg-gradient-to-br from-[#0EA5E9] to-[#0EA5E9]/80 rounded-xl flex items-center justify-center mb-6">
                  <MdFavorite className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-heading font-bold text-xl text-slate mb-4">Personalized Care Plans</h3>
                <p className="font-body text-gray-600 leading-relaxed">
                  Every care plan is meticulously tailored to your specific needs, preferences, and health goals, 
                  ensuring you receive exactly the support you need.
                </p>
              </div>
              
              <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100">
                <div className="w-16 h-16 bg-gradient-to-br from-[#10B981] to-[#10B981]/80 rounded-xl flex items-center justify-center mb-6">
                  <BsAward className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-heading font-bold text-xl text-slate mb-4">Licensed & Certified</h3>
                <p className="font-body text-gray-600 leading-relaxed">
                  Our team includes licensed nurses, certified nursing assistants, and compassionate 
                  companions, all rigorously vetted and continuously trained.
                </p>
              </div>
            </div>

            {/* Center Column - Featured */}
            <div className="lg:mt-8">
              <div className="bg-gradient-to-br from-[#0EA5E9] to-[#10B981] rounded-2xl p-10 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>
                <div className="relative z-10">
                  <div className="w-20 h-20 bg-white/20 rounded-xl flex items-center justify-center mb-8">
                    <MdGroup className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="font-heading font-bold text-2xl mb-6">Family-Centered Approach</h3>
                  <p className="font-body text-white/90 leading-relaxed mb-8">
                    We believe in caring for the whole family. Our approach ensures everyone feels 
                    supported, informed, and confident in the care being provided.
                  </p>
                  <div className="flex items-center space-x-2">
                    <div className="flex -space-x-2">
                      <div className="w-8 h-8 bg-white/30 rounded-full border-2 border-white"></div>
                      <div className="w-8 h-8 bg-white/30 rounded-full border-2 border-white"></div>
                      <div className="w-8 h-8 bg-white/30 rounded-full border-2 border-white"></div>
                    </div>
                    <span className="font-body text-sm text-white/80">500+ Families Trust Us</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-4 md:space-y-8">
              <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100">
                <div className="w-16 h-16 bg-gradient-to-br from-[#0EA5E9] to-[#0EA5E9]/80 rounded-xl flex items-center justify-center mb-6">
                  <AiOutlineSchedule className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-heading font-bold text-xl text-slate mb-4">Flexible Scheduling</h3>
                <p className="font-body text-gray-600 leading-relaxed">
                  From a few hours a week to 24/7 live-in care, we adapt to your schedule and 
                  changing needs with complete flexibility.
                </p>
              </div>
              
              <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100">
                <div className="w-16 h-16 bg-gradient-to-br from-[#10B981] to-[#10B981]/80 rounded-xl flex items-center justify-center mb-6">
                  <MdOutlineSupportAgent className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-heading font-bold text-xl text-slate mb-4">24/7 Emergency Support</h3>
                <p className="font-body text-gray-600 leading-relaxed">
                  Round-the-clock on-call support for urgent situations, providing peace of mind 
                  for both patients and families at all times.
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-[#0EA5E9]/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                <MdVerified className="h-6 w-6 text-[#0EA5E9]" />
              </div>
              <div className="font-heading font-bold text-2xl text-slate">98%</div>
              <div className="font-body text-sm text-gray-600">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-[#10B981]/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                <MdLocalHospital className="h-6 w-6 text-[#10B981]" />
              </div>
              <div className="font-heading font-bold text-2xl text-slate">15+</div>
              <div className="font-body text-sm text-gray-600">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-[#0EA5E9]/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                <MdGroup className="h-6 w-6 text-[#0EA5E9]" />
              </div>
              <div className="font-heading font-bold text-2xl text-slate">50+</div>
              <div className="font-body text-sm text-gray-600">Care Professionals</div>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-[#10B981]/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                <MdHeadset className="h-6 w-6 text-[#10B981]" />
              </div>
              <div className="font-heading font-bold text-2xl text-slate">24/7</div>
              <div className="font-body text-sm text-gray-600">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <BenefitsSection />

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-slate mb-4">
              What Our Families Say
            </h2>
            <p className="font-body text-gray-600 max-w-2xl mx-auto">
              Real stories from real families who have experienced our compassionate care.
            </p>
          </div>

          <TestimonialCarousel />
        </div>
      </section>

       {/* Enhanced CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#0EA5E9] to-[#10B981] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="absolute top-10 left-10 w-32 h-32 bg-white opacity-5 rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-white opacity-5 rounded-full"></div>
        
        <div className="relative max-w-4xl mx-auto text-center px-4 sm:px-4 flex flex-col gap-6">
          <h2 className="text-3xl md:text-4xl font-bold">
            Ready to Take Control of Your Health?
          </h2>
          <p className="text-blue-100 leading-relaxed">
            Join thousands of satisfied patients who trust Prime Personal Healthcare for their medical needs. 
            Experience the future of healthcare with our comprehensive services and expert care.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="group bg-white text-[#0EA5E9] hover:bg-gray-50 font-bold py-3 px-8 rounded transition-all duration-300 transform  flex items-center justify-center space-x-3 text-sm"
            >
              <FaRegCalendar size={20} />
              <span>Book Your Appointment</span>
              <GoArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/contact"
              className="group bg-transparent border  border-gray-200 text-white hover:bg-white hover:text-[#0EA5E9] font-bold py-3 px-8 rounded transition-all duration-300 transform text-sm  flex items-center justify-center space-x-3"
            >
              <MdPhone size={20} />
              <span>Contact Us Today</span>
              <GoArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      
    </div>
  );
};

export default Home;