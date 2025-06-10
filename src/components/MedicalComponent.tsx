import { MdArrowForward, MdShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom";

const MedicalComponent = () => {
  // Featured medical equipment products
const featuredProducts = [
  {
    id: "1",
    name: "Philips HeartStart OnSite AED",
    category: "Emergency Care",
    price: "$1,769",
    image:
      "https://th.bing.com/th/id/OIP.QJBt2JPRKRYQq8T2tcfu9QHaHa?w=199&h=200&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
    description:
      "User-friendly automated external defibrillator with voice guidance, FAA approved battery, and included standard carry case ready for public or home use.",
  },
  {
    id: "2",
    name: "Philips HeartStart FRx AED",
    category: "Emergency Care",
    price: "$2,199",
    image:
      "https://i.pinimg.com/736x/4e/23/db/4e23dbf4b51a6d39017f16055b21b92c.jpg",
    description:
      "Rugged & lightweight AED for challenging environments truck-friendly, voice guided, with SMART analysis to adjust shock levels.",
  },
  {
    id: "3",
    name: "Defibrillator CMS92000 (CMS Healthcare)",
    category: "Emergency Care",
    price: "$2,499",
    image:
      "https://i.pinimg.com/736x/24/44/b5/2444b55005aa098e02a084ed5419f8eb.jpg",
    description:
      "Semi-automatic professional defibrillator with ECG display, AED training mode, and trolley-ready design for EMS or hospital use.",
  }
];



  return (
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-slate mb-4">
              Medical Equipment Store
            </h2>
            <p className="font-body text-gray-600 max-w-2xl mx-auto">
              Professional-grade medical equipment for healthcare facilities, home care, and personal use. 
              All products are certified and come with comprehensive warranties.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {featuredProducts.map((product, index) => (
              <div key={product.id} className={`group relative bg-white rounded-xl shadow border border-gray-100 p-4 transition-all duration-300 hover:-translate-y-1 ${
                index === 1 ? 'ring-1 ring-[#0EA5E9]/20 scale-105' : ''
              }`}>
                
                
                <div className="aspect-video bg-white border border-gray-100 rounded-lg overflow-hidden mb-4">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <span className="inline-block bg-[#0EA5E9]/10 text-[#0EA5E9] text-xs font-medium px-3 py-1 rounded-full">
                      {product.category}
                    </span>
                    <span className="font-heading font-bold text-xl text-[#0EA5E9]">
                      {product.price}
                    </span>
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="font-heading font-semibold text-lg text-slate group-hover:text-[#0EA5E9] transition-colors">
                      {product.name}
                    </h3>
                    <p className="font-body text-gray-600 text-sm leading-relaxed">
                      {product.description}
                    </p>
                  </div>

                  <div className="pt-2 flex gap-2">
                    <button 
                      className="flex-1 bg-[#0EA5E9] py-2 rounded hover:bg-[#0EA5E9]/90 text-white text-sm font-medium"
                    >
                      <Link to="/medical-equipment" className="flex items-center justify-center">
                        <MdShoppingCart className="mr-2 h-4 w-4" />
                        Buy Now
                      </Link>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button  className="bg-[#0EA5E9] px-7 py-3 rounded text-sm hover:bg-[#0EA5E9]/90 text-white font-body font-medium">
              <Link to="/medical-equipment" className="flex items-center">
                View All Equipment
                <MdArrowForward className="ml-2 h-5 w-5" />
              </Link>
            </button>
          </div>
        </div>
      </section>
  );
};

export default MedicalComponent;
