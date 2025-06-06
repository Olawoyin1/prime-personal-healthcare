
import  { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
// import { button } from '@/components/ui/button';
import { MdMenu, MdClose, MdPhone } from 'react-icons/md';
import { FiHeart } from 'react-icons/fi';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Virtual Care', href: '/virtual-care' },
    { name: 'About Us', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <FiHeart className="h-8 w-8 text-primary" />
            <span className="font-heading font-bold text-xl text-slate">
              Gentle Care Path
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
                    ? 'text-primary border-b-2 border-primary'
                    : 'text-slate hover:text-primary'
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
              className="flex items-center space-x-2 text-slate hover:text-primary transition-colors"
            >
              <MdPhone className="h-4 w-4" />
              <span className="font-body text-sm">(123) 456-7890</span>
            </a>
            <button 
              className="bg-navy hover:bg-navy/90 text-white font-body font-medium px-6"
            >
              <Link to="/contact">Book Consultation</Link>
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-slate hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary"
          >
            {isMenuOpen ? (
              <MdClose className="h-6 w-6" />
            ) : (
              <MdMenu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-100 py-4 animate-fade-in">
            <nav className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`font-body font-medium px-2 py-1 transition-colors ${
                    isActive(item.href)
                      ? 'text-primary'
                      : 'text-slate hover:text-primary'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-gray-100">
                <a
                  href="tel:+1234567890"
                  className="flex items-center space-x-2 text-slate hover:text-primary transition-colors px-2 py-1"
                >
                  <MdPhone className="h-4 w-4" />
                  <span className="font-body">(123) 456-7890</span>
                </a>
                <button 
                  className="w-full mt-2 bg-navy hover:bg-navy/90 text-white font-body font-medium"
                >
                  <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
                    Book Consultation
                  </Link>
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;