
import { Link } from 'react-router-dom';
import { 
  MdVideoCall, 
  MdSecurity, 
  MdSchedule, 
  MdDevices, 
  MdHealthAndSafety,
  MdSupport,
  MdCheckCircle,
  MdArrowForward
} from 'react-icons/md';
import { Video, CheckCircle, Smartphone, Calendar, Download } from 'lucide-react';


const VirtualCare = () => {
  const steps = [
    {
      step: 1,
      icon: <Calendar className="w-8 h-8" />,
      title: "Book Your Appointment",
      description: "Schedule your virtual consultation online or by phone"
    },
    {
      step: 2,
      icon: <Video className="w-8 h-8" />,
      title: "Join the Video Call",
      description: "Access your secure video consultation from any device"
    },
    {
      step: 3,
      icon: <CheckCircle className="w-8 h-8" />,
      title: "Receive Care",
      description: "Get diagnosis, treatment plans, and prescriptions digitally"
    }
  ];
  const features = [
    {
      icon: MdVideoCall,
      title: 'HD Video Consultations',
      description: 'Crystal-clear video calls with healthcare professionals from the comfort of your home.'
    },
    {
      icon: MdSecurity,
      title: 'HIPAA Compliant',
      description: 'Bank-level encryption ensures your health information remains private and secure.'
    },
    {
      icon: MdSchedule,
      title: 'Flexible Scheduling',
      description: 'Book appointments that fit your schedule, including evenings and weekends.'
    },
    {
      icon: MdDevices,
      title: 'Multi-Device Access',
      description: 'Connect from any device - smartphone, tablet, or computer with internet access.'
    },
    {
      icon: MdHealthAndSafety,
      title: 'Comprehensive Care',
      description: 'From routine check-ups to chronic disease management and mental health support.'
    },
    {
      icon: MdSupport,
      title: '24/7 Technical Support',
      description: 'Our technical team is available around the clock to assist with any connection issues.'
    }
  ];

  const benefits = [
    'Reduced travel time and transportation costs',
    'Access to specialists regardless of location',
    'Immediate care for urgent non-emergency situations',
    'Continuity of care during illness or mobility limitations',
    'Family members can easily join consultations',
    'Digital prescriptions sent directly to your pharmacy'
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-[#0EA5E9] via-[#0EA5E9]/90 to-[#10B981] overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h1 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-6xl leading-tight mb-6">
                Healthcare at Your
                <span className="block text-[#1]">Fingertips</span>
              </h1>
              <p className="font-body text-white/90 leading-relaxed mb-8">
                Experience the future of healthcare with our comprehensive virtual care platform. 
                Connect with licensed healthcare professionals from anywhere, anytime.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  className="bg-white text-[#0EA5E9] hover:bg-gray-100 text-sm font-body font-semibold px-8 py-4"
                >
                  <Link to="/contact">Start Virtual Consultation</Link>
                </button>
                <button 
                  className="border-white text-white hover:bg-white hover:text-[#0EA5E9] text-sm font-body font-semibold px-8 py-4"
                >
                  Watch Demo Video
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <img 
                  src="https://plus.unsplash.com/premium_photo-1661397076730-d50eef910cdc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dmlydHVhbCUyMGNhcmV8ZW58MHx8MHx8fDA%3D" 
                  alt="Virtual healthcare consultation"
                  className="w-full h-80 object-cover rounded-xl"
                />
                <div className="absolute -top-4 -right-4 bg-[#10B981] text-white p-4 rounded-full">
                  <MdVideoCall className="h-8 w-8" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* How It Works */}
      <section className="py-17">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How Virtual Consultations Work
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Getting healthcare through virtual consultations is simple, secure, and convenient. 
              Here's how it works:
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {steps.map((step, index) => (
              <div
                key={index}
                className="text-center animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#0EA5E9] via-[#0EA5E9]/90 to-[#10B981] text-white rounded-full flex items-center justify-center mx-auto">
                    {step.icon}
                  </div>
                  <div className="absolute -top-2 -left-2 w-8 h-8 bg-[#10B981] text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {step.step}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-slate mb-4">
              Advanced Virtual Care Features
            </h2>
            <p className="font-body text-gray-600 max-w-3xl mx-auto">
              Our state-of-the-art virtual care platform combines cutting-edge technology 
              with compassionate healthcare to deliver exceptional patient experiences.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="group bg-gray-50 rounded-xl p-6 hover:bg-white hover:shadow-lg transition-all duration-300">
                  <div className="w-14 h-14 bg-[#0EA5E9]/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#0EA5E9] group-hover:scale-110 transition-all duration-300">
                    <IconComponent className="h-7 w-7 text-[#0EA5E9] group-hover:text-white" />
                  </div>
                  <h3 className="font-heading font-semibold text-xl text-slate mb-3">
                    {feature.title}
                  </h3>
                  <p className="font-body text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-heading font-bold text-3xl sm:text-4xl text-slate mb-6">
                Why Choose Virtual Care?
              </h2>
              <p className="font-body text-gray-600 mb-8">
                Virtual care isn't just convenient—it's transforming how patients access quality healthcare. 
                Experience the benefits that thousands of families already enjoy.
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-[#10B981] rounded-full flex items-center justify-center mt-0.5">
                      <MdCheckCircle className="h-4 w-4 text-white" />
                    </div>
                    <p className="font-body text-gray-700">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-[#0EA5E9] to-[#10B981] rounded-2xl p-8 text-white">
                <h3 className="font-heading font-bold text-xl mb-2">Ready to Get Started?</h3>
                <p className="font-body text-white/90 mb-3">
                  Join thousands of patients who have discovered the convenience and quality of virtual healthcare.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                      <span className="text-sm font-semibold">1</span>
                    </div>
                    <span className="font-body">Schedule your appointment online</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                      <span className="text-sm font-semibold">2</span>
                    </div>
                    <span className="font-body">Connect via secure video call</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                      <span className="text-sm font-semibold">3</span>
                    </div>
                    <span className="font-body">Receive personalized care plan</span>
                  </div>
                </div>


                <div className="mt-7">
              <h3 className="text-xl font-bold mb-3">Technical Requirements</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Smartphone size={20} className="text-healthcare-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Device</h4>
                    <p className="">Computer, tablet, or smartphone with camera and microphone</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Video size={20} className="text-healthcare-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Internet</h4>
                    <p className="">Stable internet connection for video calling</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Download size={20} className="text-healthcare-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Browser</h4>
                    <p className="">Updated web browser (Chrome, Safari, Firefox)</p>
                  </div>
                </div>
              </div>
            </div>
              </div>
              
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-slate-900">
        <div className="max-w-4xl mx-auto text-center px-4 ">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-white mb-4">
            Experience Virtual Care Today
          </h2>
          <p className="font-body text-gray-300 mb-8">
            Take the first step towards convenient, accessible healthcare. 
            Our virtual care specialists are ready to help you achieve your health goals.
          </p>
          <button 
            className="bg-[#0EA5E9] hover:bg-[#0EA5E9]/90 text-white text-sm font-body font-semibold px-8 py-4"
          >
            <Link to="/contact" className="flex items-center">
              Book Virtual Appointment
              <MdArrowForward className="ml-2 h-5 w-5" />
            </Link>
          </button>
        </div>
      </section>
    </div>
  );
};

export default VirtualCare;