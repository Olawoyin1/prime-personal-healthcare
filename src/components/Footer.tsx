
import { Link } from 'react-router-dom';
import { MdPhone, MdEmail, MdLocationOn } from 'react-icons/md';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto py-12">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-8">
          {/* Company Info */}
          <div className="space-y-4 col-span-2">
            <Link to="/" className="flex items-center space-x-2">
          <img src="../../Images/logo.png" alt="" className='w-10' />
              <span className="font-heading font-bold text-[17px] md:text-xl ">
                Price Personal Healthcare
              </span>
            </Link>
            <p className="font-body text-gray-300 text-sm leading-relaxed">
              Providing compassionate, professional healthcare services in the comfort 
              of your home. Your dignity, independence, and well-being are our priority.
            </p>
          </div>


           {/* Services */}
          <div className=''>
            <h3 className="font-heading font-semibold text-lg mb-4">Our Services</h3>
            <ul className="space-y-2">
              {[
                'In-Home Care',
                'Professional Nursing',
                'Personal Support',
                'Companionship',
                '24/7 Live-In Care',
                'Post-Hospital Care',
              ].map((service) => (
                <li key={service}>
                  <span className="font-body text-gray-300 text-sm">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>


          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { name: 'Home', href: '/' },
                { name: 'Our Services', href: '/services' },
                { name: 'About Us', href: '/about' },
                { name: 'Contact', href: '/contact' },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="font-body text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

         
          {/* Contact Info */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MdLocationOn className="h-5 w-5 text-[#0EA5E9] mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-body text-gray-300 text-sm">
                    2891 Springdale rd,
                    Sw apt 104 Atlanta,
                  GA 30315
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <MdPhone className="h-5 w-5 text-[#0EA5E9] flex-shrink-0" />
                <a
                  href="tel:+1234567890"
                  className="font-body text-gray-300 hover:text-white transition-colors text-sm"
                >
                  4042735566
                </a>
              </div>
              <div className="flex items-start space-x-3">
  <MdEmail className="h-5 w-5 text-[#0EA5E9] flex-shrink-0 mt-0.5" />
  <a
    href="mailto:pricepersonalhealthcare755344@gmail.com"
    className="font-body text-gray-300 hover:text-white transition-colors text-sm break-all w-full"
  >
    pricepersonalhealthcare755344@gmail.com
  </a>
</div>

            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-600 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="font-body text-gray-300 text-sm">
              © {new Date().getFullYear()} Prime Personal Healthcare. All rights reserved.
            </p>

            <div className="flex space-x-6">
              <a
                href="#"
                className="font-body text-gray-300 hover:text-white transition-colors text-sm"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="font-body text-gray-300 hover:text-white transition-colors text-sm"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="font-body text-gray-300 hover:text-white transition-colors text-sm"
              >
                HIPAA Compliance
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;