
import { Link } from 'react-router-dom';
import { MdPhone } from 'react-icons/md';
import { FaStar } from "react-icons/fa6";
import { FaRegCalendar } from "react-icons/fa";
import { GoArrowRight } from "react-icons/go";
import { FaVideo } from "react-icons/fa6";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 to-green-50 overflow-hidden">
      <div className="container mx-auto py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="animate-fade-in">
              <div className="inline-flex items-center px-4 py-2  bg-gradient-to-br from-blue-300 to-green-100 rounded-full text-sm font-medium mb-6 backdrop-blur-sm">
                <FaStar className="w-4 h-4 mr-2 text-blue-900" />
                Trusted Healthcare Provider
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                Your Health,
                <br />
                <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  Our Mission
                </span>
              </h1>
              
              <p className="mb-8 text-blue-0 leading-relaxed">
                Experience world-class healthcare with our comprehensive medical services. 
                From routine check-ups to specialized treatments, we're here for you every step of the way.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link
                  to="/book-appointment"
                  className="group bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white  py-4 px-8 rounded-xl transition-all duration-300 transform  shadow flex items-center justify-center space-x-2 text-sm md:text-lg"
                >
                  <FaRegCalendar size={20} />
                  <span>Book Appointment</span>
                  <GoArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/virtual-consultation"
                  className="group bg-white bg-opacity-20 backdrop-blur-sm text-blue-600  hover:bg-opacity-30  py-4 px-8 rounded-xl transition-all duration-300 transform  shadow flex items-center justify-center space-x-2 border border-white border-opacity-30 text-sm md:text-lg"
                >
                  <FaVideo size={20} />
                  <span>Virtual Care</span>
                  <GoArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
              
              <div className="flex items-center space-x-6">
               
                <div className="flex items-center space-x-2">
                  <IoMdCheckmarkCircleOutline size={16} className="text-green-400" />
                  <span className="text-sm">24/7 emergency care</span>
                </div>
                <div className="flex items-center space-x-2">
                  <IoMdCheckmarkCircleOutline size={16} className="text-green-400" />
                  <span className="text-sm">Insurance Accepted</span>
                </div>
                <div className="flex items-center space-x-2">
                  <IoMdCheckmarkCircleOutline size={16} className="text-green-400" />
                  <span className="text-sm">Licensed Professionals</span>
                </div>
              </div>
            </div>



          {/* Image */}
          <div className="relative">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Caregiver providing compassionate care to elderly patient"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            
            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-6 max-w-xs">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                  <MdPhone className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="font-body font-semibold text-slate">Free Consultation</p>
                  <p className="font-body text-sm text-gray-600">Available 24/7</p>
                </div>
              </div>
            </div>

            {/* Background decorations */}
            <div className="absolute -top-10 -right-10 w-20 h-20 bg-blue-700/10 rounded-full"></div>
            <div className="absolute top-1/2 -right-16 w-32 h-32 bg-blue-700/10 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;