
import { Link } from 'react-router-dom';
import { MdFavorite, MdSecurity, MdGroup, MdVerified } from 'react-icons/md';

const About = () => {
  const values = [
    {
      icon: MdFavorite,
      title: 'Compassion',
      description: 'We approach every interaction with empathy, understanding, and genuine care for your well-being.'
    },
    {
      icon: MdSecurity,
      title: 'Dignity',
      description: 'We respect your autonomy, privacy, and personal choices while providing professional care.'
    },
    {
      icon: MdGroup,
      title: 'Professionalism',
      description: 'Our licensed and trained caregivers maintain the highest standards of medical and personal care.'
    },
    {
      icon: MdVerified,
      title: 'Trust',
      description: 'We build lasting relationships based on reliability, transparency, and consistent quality care.'
    }
  ];

  const teamMembers = [
    {
      name: 'Dr. Samson Johnson',
      role: 'Medical Director',
      image: 'https://plus.unsplash.com/premium_photo-1723514536306-26fe5c4adeb7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fHVuaXRlZCUyMHN0YXRlJTIwZG9jdG9yfGVufDB8fDB8fHww',
      credentials: 'MD, Geriatric Medicine'
    },
    {
      name: 'Maria Rodriguez, RN',
      role: 'Head of Nursing',
      image: 'https://images.unsplash.com/photo-1674049406176-021807a2802e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fHVuaXRlZCUyMHN0YXRlJTIwZmVtYWxlJTIwbnVyc2UlMjA0MDAlMjB4JTIwODB8ZW58MHx8MHx8fDA%3D',
      credentials: 'BSN, 15+ years experience'
    },
    {
      name: 'James Chen',
      role: 'Care Coordinator',
      image: 'https://plus.unsplash.com/premium_photo-1677165481551-c91ed6e15f09?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHVuaXRlZCUyMHN0YXRlJTIwZG9jdG9yfGVufDB8fDB8fHww',
      credentials: 'MSW, Licensed Social Worker'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-green-50 py-16">
        <div className="container mx-auto ">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="font-heading font-extrabold text-3xl sm:text-4xl text-slate">
                Our Story of{' '} <br />
                <span className="text-[#0EA5E9]">Compassionate Care</span>
              </h1>
              <p className="font-body text-gray-600 leading-relaxed">
                Founded on the belief that everyone deserves dignified, personalized healthcare, 
                Gentle Care Path began as a vision to transform how healthcare is delivered in 
                the comfort of your own home.
              </p>
              <p className="font-body text-gray-600 leading-relaxed">
                We understand that health challenges can feel overwhelming, which is why our 
                approach focuses not just on medical needs, but on preserving independence, 
                maintaining dignity, and enhancing quality of life.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Compassionate caregiver with elderly patient"
                className="rounded-xl shadow-2xl w-full h-[400px] object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-white rounded-lg shadow-xl p-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-[#10B981] rounded-full flex items-center justify-center">
                    <MdFavorite className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="font-body font-semibold text-slate text-sm">500+ Families</p>
                    <p className="font-body text-xs text-gray-600">Trust Our Care</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading font-bold text-3xl text-slate mb-4">
            Our Mission
          </h2>
          <blockquote className="font-body text-xl text-gray-600 leading-relaxed italic border-l-4 border-[#0EA5E9] pl-6">
            "To provide exceptional, compassionate healthcare services that honor the dignity 
            of every individual while promoting independence and enhancing quality of life 
            in the comfort of home."
          </blockquote>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto ">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl text-slate mb-4">
              Our Core Values
            </h2>
            <p className="font-body text-gray-600 max-w-2xl mx-auto">
              These principles guide every interaction and decision we make in caring for you and your loved ones.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 text-center hover:shadow-lg transition-shadow">
                  <div className="w-16 h-16 bg-[#0EA5E9]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="h-8 w-8 text-[#0EA5E9]" />
                  </div>
                  <h3 className="font-heading font-semibold text-lg text-slate mb-3">
                    {value.title}
                  </h3>
                  <p className="font-body text-gray-600 text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto ">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl text-slate mb-4">
              Meet Our Leadership Team
            </h2>
            <p className="font-body text-gray-600 max-w-2xl mx-auto">
              Experienced healthcare professionals dedicated to providing exceptional care and leadership.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-gray-50 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="font-heading font-semibold text-lg text-slate mb-1">
                    {member.name}
                  </h3>
                  <p className="font-body text-[#0EA5E9] font-medium mb-2">
                    {member.role}
                  </p>
                  <p className="font-body text-sm text-gray-600">
                    {member.credentials}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gradient-to-r from-[#0EA5E9]/5 to-[#10B981]/5">
        <div className="container mx-auto ">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-heading font-bold text-3xl text-slate mb-6">
                Why Families Choose Us
              </h2>
              <div className="space-y-4">
                {[
                  'Licensed and insured healthcare professionals',
                  'Personalized care plans tailored to individual needs',
                  'Available 24/7 for emergencies and support',
                  'Accepting most major insurance plans',
                  '5+ years of trusted service in the community',
                  'Continuous training and professional development'
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-[#10B981] rounded-full mt-3 flex-shrink-0"></div>
                    <p className="font-body text-gray-600">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="font-heading font-semibold text-xl text-slate mb-4">
                Ready to Experience Our Care?
              </h3>
              <p className="font-body text-gray-600 mb-6">
                Let us show you how our compassionate approach to healthcare can make a difference 
                in your life or the life of your loved one.
              </p>
              <button 
                className="w-full text-sm bg-[#2563EB] hover:bg-[#2563EB]/90 text-white font-body py-3 px-7 rounded font-medium"
              >
                <Link to="/contact">Schedule Your Free Consultation</Link>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;