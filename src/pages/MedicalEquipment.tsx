import { useState } from 'react';
import { MdPhone, MdShoppingCart, MdInfo } from 'react-icons/md';

interface Product {
  id: string;
  name: string;
  category: string;
  price: string;
  image: string;
  description: string;
  features: string[];
}

const MedicalEquipment = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const products: Product[] = [
    {
      id: '1',
      name: 'Premium Hospital Bed',
      category: 'Mobility & Comfort',
      price: '$2,499',
      image: 'https://i.pinimg.com/736x/73/d4/77/73d47726808ab7fca67e50b94064247a.jpg',
      description: 'Electric adjustable hospital bed with premium comfort features',
      features: ['Electric height adjustment', 'Side rails included', 'Memory foam mattress', '2-year warranty']
    },
  {
    id: '1',
    name: 'Philips HeartStart OnSite AED',
    category: 'Emergency Care',
    price: '$1,769',
    image: 'https://th.bing.com/th/id/OIP.QJBt2JPRKRYQq8T2tcfu9QHaHa?w=199&h=200&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3',
    description: 'User-friendly automated external defibrillator designed for public or home use.',
    features: [
      'FAA-approved battery',
      'Standard carry case included',
      'Ready for home or public environments'
    ]
  },
  {
    id: '2',
    name: 'Philips HeartStart FRx AED',
    category: 'Emergency Care',
    price: '$2,199',
    image: 'https://i.pinimg.com/736x/4e/23/db/4e23dbf4b51a6d39017f16055b21b92c.jpg',
    description: 'Rugged, portable AED designed for demanding and outdoor environments.',
    features: [
      'SMART shock analysis technology',
      'Voice-guided instructions',
      'Impact-resistant and lightweight',
      'Truck and field-friendly design'
    ]
  },
  {
    id: '3',
    name: 'Defibrillator CMS92000 (CMS Healthcare)',
    category: 'Emergency Care',
    price: '$2,499',
    image: 'https://i.pinimg.com/736x/24/44/b5/2444b55005aa098e02a084ed5419f8eb.jpg',
    description: 'Professional-grade semi-automatic defibrillator with ECG monitoring.',
    features: [
      'ECG display screen',
      'AED training mode',
      'Semi-automatic operation',
      'Trolley-compatible for hospital use'
    ]
  },



    {
      id: '2',
      name: 'Digital Blood Pressure Monitor',
      category: 'Monitoring',
      price: '$149',
      image: 'https://th.bing.com/th/id/OIP.POnD7knHht30VfUPLI1nPAHaHa?rs=1&pid=ImgDetMain',
      description: 'Professional-grade digital blood pressure monitoring system',
      features: ['Bluetooth connectivity', 'Large LCD display', 'Memory for 100 readings', 'FDA approved']
    },
    {
      id: '3',
      name: 'Oxygen Concentrator',
      category: 'Respiratory',
      price: '$1,299',
      image: 'https://i.pinimg.com/736x/82/8d/56/828d56bdd932c4c3b97806fc0b3604ab.jpg',
      description: 'Portable oxygen concentrator for home and travel use',
      features: ['Portable design', '5L/min flow rate', 'Battery backup', 'Quiet operation']
    },
    {
      id: '4',
      name: 'Wheelchair - Standard',
      category: 'Mobility & Comfort',
      price: '$299',
      image: 'https://i.pinimg.com/736x/bc/a1/8f/bca18f5bb667f06b3c2c1a5ce4f12268.jpg',
      description: 'Lightweight standard wheelchair with comfort features',
      features: ['Lightweight aluminum frame', 'Removable footrests', 'Comfortable padding', 'Foldable design']
    },
    {
      id: '5',
      name: 'Patient Monitoring System',
      category: 'Monitoring',
      price: '$3,999',
      image: 'https://i.pinimg.com/736x/4e/c0/d7/4ec0d7a06c509b266a5fa349a40f9c5d.jpg',
      description: 'Advanced patient monitoring system with multiple parameters',
      features: ['Multi-parameter monitoring', 'Wireless connectivity', 'Real-time alerts', 'Data logging']
    },
    {
      id: '6',
      name: 'Mobility Scooter',
      category: 'Mobility & Comfort',
      price: '$1,899',
      image: 'https://i.pinimg.com/736x/3b/d8/32/3bd8320f36951cf79a2b275c26477cca.jpg',
      description: '4-wheel mobility scooter for outdoor and indoor use',
      features: ['25-mile range', 'LED headlights', 'Storage basket', 'Comfortable seating']
    }
  ];

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleContactMethod = (method: 'chat' | 'call') => {
    if (method === 'chat') {
      alert('Live chat feature would open here');
    } else {
      window.location.href = 'tel:+4042735566';
    }
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#0EA5E9] to-[#10B981] py-16">
        <div className="container mx-auto text-center">
          <h1 className="font-heading font-bold text-3xl sm:text-4xl text-white mb-4">
            Medical Equipment Store
          </h1>
          <p className="font-body text-white/90 max-w-3xl mx-auto">
            Professional-grade medical equipment for healthcare facilities, home care, and personal use. 
            All products are certified and come with comprehensive warranties.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="container mx-auto ">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-slate mb-4">
              Featured Medical Equipment
            </h2>
            <p className="font-body text-gray-600 max-w-2xl mx-auto">
              Browse our selection of high-quality medical equipment. Contact us for pricing, 
              demonstrations, or custom solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div key={product.id} className="bg-white rounded-2xl shadow border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300 group">
                <div className="aspect-video bg-white overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <span className="inline-block bg-[#0EA5E9]/10 text-[#0EA5E9] text-xs font-medium px-3 py-1 rounded-full">
                      {product.category}
                    </span>
                    <span className="font-heading font-bold text-xl text-[#0EA5E9]">
                      {product.price}
                    </span>
                  </div>
                  
                  <h3 className="font-heading font-semibold text-xl text-slate mb-3">
                    {product.name}
                  </h3>
                  
                  <p className="font-body text-gray-600 text-sm mb-4 leading-relaxed">
                    {product.description}
                  </p>

                  <div className="space-y-2 mb-6">
                    {product.features.slice(0, 2).map((feature, index) => (
                      <div key={index} className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-[#10B981] rounded-full mr-3"></div>
                        {feature}
                      </div>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <button 
                      onClick={() => handleProductClick(product)}
                      className="flex-1 flex items-center justify-center bg-[#0EA5E9] hover:bg-[#0EA5E9]/90 text-white font-medium py-2 text-sm rounded-md"
                    >
                      <MdShoppingCart className="mr-2 h-4 w-4" />
                      Buy Now
                    </button>
                    <button 
                      onClick={() => handleProductClick(product)}
                      className="flex-1 flex items-center justify-center border border-[#0EA5E9] text-[#0EA5E9] hover:bg-[#0EA5E9] hover:text-white text-sm font-medium py-2 rounded-md"
                    >
                      <MdInfo className="mr-2 h-4 w-4" />
                      Enquire
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Modal */}
      {isModalOpen && selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="bg-white rounded-xl shadow max-w-md w-full p-6 relative">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-3xl"
            >
              &times;
            </button>

            <div className="font-heading text-2xl text-slate text-center mb-4">
              Get In Touch About
            </div>

            <div className="text-center mb-6">
              <h3 className="font-heading font-semibold text-lg text-[#0EA5E9] mb-2">
                {selectedProduct.name}
              </h3>
              <p className="font-body text-gray-600 text-sm">
                Price: {selectedProduct.price}
              </p>
            </div>

            <div className="border-t border-gray-200 pt-6">
              <p className="font-body text-gray-600 text-center mb-6">
                Choose how you'd like to discuss this product with our specialists:
              </p>

              <div className="space-y-4">
                {/* <button
                  onClick={() => handleContactMethod('chat')}
                  className="w-full bg-[#0EA5E9] hover:bg-[#0EA5E9]/90 text-white font-medium py-3 flex items-center justify-center rounded-md"
                >
                  <MdChat className="mr-2 h-5 w-5" />
                  Start Live Chat
                </button> */}

                <button
                  onClick={() => handleContactMethod('call')}
                  className="w-full border border-[#0EA5E9] text-[#0EA5E9] hover:bg-[#0EA5E9] hover:text-white font-medium py-3 flex text-sm items-center justify-center rounded-md"
                >
                  <MdPhone className="mr-2 h-5 w-5" />
                  Request Call Back
                </button>
              </div>

              <div className="mt-6 p-4 bg-gray-50 rounded-lg text-center text-xs text-gray-500">
                Our specialists are available Monday–Friday, 8AM–6PM EST. For urgent inquiries, call (123) 456-7890.
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-slate mb-4">
            Need Custom Equipment Solutions?
          </h2>
          <p className="font-body  text-gray-600 mb-8">
            We offer custom equipment packages, bulk pricing, and specialized solutions 
            for healthcare facilities and organizations.
          </p>
          <button 
            className="bg-[#0EA5E9] hover:bg-[#0EA5E9]/90 text-white font-medium px-8 py-3 text-sm rounded"
          >
            Contact Our Equipment Specialists
          </button>
        </div>
      </section>
    </div>
  );
};

export default MedicalEquipment;
