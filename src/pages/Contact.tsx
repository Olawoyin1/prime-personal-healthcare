
import BookingForm from '../components/BookingForm';
import ContactInfo from '../components/ContactInfo';

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-green-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading font-bold text-4xl sm:text-5xl text-slate mb-6">
            Let's Start Your Care Journey
          </h1>
          <p className="font-body text-lg text-gray-600 leading-relaxed">
            Ready to experience compassionate, professional healthcare in the comfort of your home? 
            We're here to answer your questions and help you take the first step toward better care.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Booking Form */}
            <div>
              <BookingForm />
            </div>

            {/* Contact Information */}
            <div>
              <ContactInfo />
            </div>
          </div>
        </div>
      </section>

      {/* Map Section (Placeholder) */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="font-heading font-bold text-3xl text-slate mb-4">
              Visit Our Office
            </h2>
            <p className="font-body text-lg text-gray-600">
              Located in the heart of the medical district for your convenience.
            </p>
          </div>
          
          <div className="bg-gray-200 rounded-xl h-96 flex items-center justify-center">
            <div className="text-center">
              <p className="font-body text-gray-500 mb-2">Interactive Map</p>
              <p className="font-body text-sm text-gray-400">
                123 Healthcare Ave, Medical District, Your City, ST 12345
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;