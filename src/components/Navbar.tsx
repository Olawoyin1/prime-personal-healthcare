import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MdMenu, MdClose, MdPhone } from 'react-icons/md';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Virtual Care', href: '/virtual-care' },
    { name: 'Services', href: '/services' },
  ];

  return (
    <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="container mx-auto">
        <div className="flex justify-between items-center h-22">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-1">
          <img src="../../Images/logo.png" alt="" className='w-10' />
            <span className="font-heading font-bold text-[17px] md:text-xl text-slate">
               Price Personal Healthcare
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`font-body font-medium transition-colors duration-200 ${
                  isActive(item.href)
                    ? 'text-[#0EA5E9] border-b font-bold border-[#0EA5E9]'
                    : 'text-slate hover:text-[#0EA5E9]'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="tel:+1234567890"
              className="flex items-center space-x-2 text-slate hover:text-[#0EA5E9] transition-colors"
            >
              <MdPhone className="h-4 w-4" />
              <span className="font-body text-sm">4042735566</span>
            </a>
            <button className="bg-[#2563EB] hover:bg-[#2563EB]/90 text-white text-sm font-body py-2 rounded font-medium px-6">
              <Link to="/contact">Book Consultation</Link>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-slate hover:text-[#0EA5E9] focus:outline-none focus:ring-2 focus:ring-[#0EA5E9]"
          >
            {isMenuOpen ? (
              <MdClose className="h-6 w-6" />
            ) : (
              <MdMenu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <nav className="flex flex-col space-y-4 py-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={() => setIsMenuOpen(false)}
                className={`font-body font-medium  py-1 transition-colors ${
                  isActive(item.href)
                    ? 'text-[#0EA5E9]'
                    : 'text-slate hover:text-[#0EA5E9]'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4 border-t border-gray-100">
              <a
                href="tel:+1234567890"
                className="flex items-center space-x-2 text-slate hover:text-[#0EA5E9] transition-colors px-2 py-1"
              >
                <MdPhone className="h-4 w-4" />
                <span className="font-body">4042735566</span>
              </a>
              <button className="w-full text-sm mt-2 bg-[#2563EB] hover:bg-[#2563EB]/90 text-white font-body font-medium px-4 py-2 rounded">
                <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
                  Book Consultation
                </Link>
              </button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
