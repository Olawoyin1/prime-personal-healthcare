import { MdArrowForward, MdInfo, MdShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom";

const MedicalComponent = () => {
  // Featured medical equipment products
  const featuredProducts = [
    {
      id: "1",
      name: "Premium Hospital Bed",
      category: "Mobility & Comfort",
      price: "$2,499",
      image:
        "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=300&fit=crop",
      description:
        "Electric adjustable hospital bed with premium comfort features",
    },
    {
      id: "2",
      name: "Digital Blood Pressure Monitor",
      category: "Monitoring",
      price: "$149",
      image:
        "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop",
      description:
        "Professional-grade digital blood pressure monitoring system",
    },
    {
      id: "3",
      name: "Oxygen Concentrator",
      category: "Respiratory",
      price: "$1,299",
      image:
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop",
      description: "Portable oxygen concentrator for home and travel use",
    },
  ];
  return (
    <div>
      <div className="grid md:grid-cols-3 gap-8 mb-12">
        {featuredProducts.map((product, index) => (
          <div
            key={product.id}
            className={`group relative bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 ${
              index === 1 ? "ring-2 ring-primary/20 scale-105" : ""
            }`}
          >
            {index === 1 && (
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-primary text-white px-3 py-1 rounded-full text-xs font-body font-medium">
                  Best Seller
                </span>
              </div>
            )}

            <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden mb-4">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            <div className="space-y-4">
              <div className="flex items-start justify-between">
                <span className="inline-block bg-primary/10 text-primary text-xs font-medium px-3 py-1 rounded-full">
                  {product.category}
                </span>
                <span className="font-heading font-bold text-xl text-primary">
                  {product.price}
                </span>
              </div>

              <div className="space-y-2">
                <h3 className="font-heading font-semibold text-lg text-slate group-hover:text-primary transition-colors">
                  {product.name}
                </h3>
                <p className="font-body text-gray-600 text-sm leading-relaxed">
                  {product.description}
                </p>
              </div>

              <div className="pt-2 flex gap-2">
                <button className="flex-1 bg-primary hover:bg-primary/90 text-white font-medium">
                  <Link to="/medical-equipment">
                    <MdShoppingCart className="mr-2 h-4 w-4" />
                    Buy Now
                  </Link>
                </button>
                <button className="flex-1 border-primary text-primary hover:bg-primary hover:text-white">
                  <Link to="/medical-equipment">
                    <MdInfo className="mr-2 h-4 w-4" />
                    View Details
                  </Link>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center">
        <button className="bg-primary hover:bg-primary/90 text-white font-body font-medium">
          <Link to="/medical-equipment" className="flex items-center">
            View All Equipment
            <MdArrowForward className="ml-2 h-5 w-5" />
          </Link>
        </button>
      </div>
    </div>
  );
};

export default MedicalComponent;
