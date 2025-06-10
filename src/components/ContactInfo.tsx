
import { MdLocationOn, MdPhone, MdEmail, MdSchedule } from 'react-icons/md';

const ContactInfo = () => {
  const contactDetails = [
    {
      icon: MdLocationOn,
      title: 'Our Location',
      details: ['2891 Springdale rd,', 'Sw apt 104 Atlanta,', 'GA 30315'],
      link: 'https://maps.google.com/?q=123+Healthcare+Ave'
    },
    {
      icon: MdPhone,
      title: 'Phone Number',
      details: ['4042735566', '24/7 Emergency Line'],
      link: 'tel:+1234567890'
    },
    {
      icon: MdEmail,
      title: 'Email Address',
      details: ['pricepersonalhealthcare755344@gmail.com', 'We respond within 2 hours'],
      link: 'mailto:pricepersonalhealthcare755344@gmail.com'
    },
    {
      icon: MdSchedule,
      title: 'Business Hours',
      details: ['Monday–Friday: 9:00 AM – 6:00 PM', 'Saturday: 10:00 AM – 2:00 PM', 'Sunday: Closed'],
      link: null
    }
  ];

  return (
    <div className="space-y-4">
      <div>
        <h3 className="font-heading font-bold text-2xl text-slate mb-4">
          Get in Touch
        </h3>
        <p className="font-body text-gray-600">
          We're here to answer your questions and help you find the right care solution. 
          Reach out to us through any of the channels below.
        </p>
      </div>

      <div className="space-y-2">
        {contactDetails.map((item, index) => {
          const IconComponent = item.icon;
          const content = (
            <div className="flex space-x-4 p-4 rounded-lg border border-gray-100 hover:border-[#0EA5E9]/20 hover:bg-blue-50/50 transition-colors">
              <div className="w-12 h-12 bg-[#0EA5E9]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <IconComponent className="h-6 w-6 text-[#0EA5E9]" />
              </div>
              <div>
                <h4 className="font-body font-semibold text-slate mb-1">
                  {item.title}
                </h4>
                {item.details.map((detail, idx) => (
                  <p key={idx} className="font-body text-gray-600 text-sm">
                    {detail}
                  </p>
                ))}
              </div>
            </div>
          );

          if (item.link) {
            return (
              <a key={index} href={item.link} className="block group">
                {content}
              </a>
            );
          }

          return <div key={index}>{content}</div>;
        })}
      </div>

      {/* WhatsApp Contact */}
      {/* <div className="bg-[#10B981]/10 rounded-lg p-6 border border-[#10B981]/20">
        <div className="flex items-center space-x-3 mb-3">
          <div className="w-8 h-8 bg-[#10B981] rounded-full flex items-center justify-center">
            <span className="text-white text-sm font-bold">W</span>
          </div>
          <h4 className="font-body font-semibold text-slate">
            Instant WhatsApp Support
          </h4>
        </div>
        <p className="font-body text-gray-600 text-sm mb-4">
          Get immediate answers to your questions via WhatsApp.
        </p>
        <a
          href="https://wa.me/1234567890?text=Hello%2C%20I%27m%20interested%20in%20learning%20more%20about%20your%20healthcare%20services."
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex text-sm items-center px-4 py-2 bg-[#10B981] text-white rounded-lg font-body font-medium hover:bg-[#10B981]/90 transition-colors"
        >
          <span>Start WhatsApp Chat</span>
        </a>
      </div> */}
    </div>
  );
};

export default ContactInfo;