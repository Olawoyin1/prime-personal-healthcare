
import { Link } from 'react-router-dom';
import { MdPhone, MdEmail, MdLocationOn } from 'react-icons/md';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto py-12">
        <div className="grid sm:grid-cols-2 md:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="space-y-4 col-span-2">
            <Link to="/" className="flex items-center space-x-2">
              {/* <FiHeart className="h-8 w-8 text-[#0EA5E9]" /> */}
              <span className="font-heading font-bold text-xl">
                Prime Personal Healthcare
              </span>
            </Link>
            <p className="font-body text-gray-300 text-sm leading-relaxed">
              Providing compassionate, professional healthcare services in the comfort 
              of your home. Your dignity, independence, and well-being are our priority.
            </p>
            {/* <div className="flex space-x-4">
              <a
                href="tel:+1234567890"
                className="text-[#0EA5E9] hover:text-[#0EA5E9]/80 transition-colors"
                aria-label="Call us"
              >
                <MdPhone className="h-5 w-5" />
              </a>
              <a
                href="mailto:info@gentlecarepath.com"
                className="text-[#0EA5E9] hover:text-[#0EA5E9]/80 transition-colors"
                aria-label="Email us"
              >
                <MdEmail className="h-5 w-5" />
              </a>
            </div> */}
          </div>


           {/* Services */}
          <div>
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
                    123 Healthcare Ave<br />
                    Medical District<br />
                    Your City, ST 12345
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <MdPhone className="h-5 w-5 text-[#0EA5E9] flex-shrink-0" />
                <a
                  href="tel:+1234567890"
                  className="font-body text-gray-300 hover:text-white transition-colors text-sm"
                >
                  (123) 456-7890
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MdEmail className="h-5 w-5 text-[#0EA5E9] flex-shrink-0" />
                <a
                  href="mailto:info@gentlecarepath.com"
                  className="font-body text-gray-300 hover:text-white transition-colors text-sm"
                >
                  info@gentlecarepath.com
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