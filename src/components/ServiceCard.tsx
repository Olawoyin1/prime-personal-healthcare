
import { Service } from '../type';

interface ServiceCardProps {
  service: Service;
  featured?: boolean;
  onLearnMore?: (service: Service) => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, featured = false, onLearnMore }) => {
  const IconComponent = service.icon;

  return (
    <div className={`group relative bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-lg transition-all duration-300 ${
      featured ? 'ring-1 ring-blue-300 scale-105' : 'hover:-translate-y-1'
    }`}>
     
      
      <div className="space-y-4">
        <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
          featured ? 'bg-[#0EA5E9] text-white' : 'bg-[#0EA5E9]/10 text-[#0EA5E9] group-hover:bg-[#0EA5E9] group-hover:text-white'
        } transition-colors duration-300`}>
          <IconComponent className="h-6 w-6" />
        </div>
        
        <div className="space-y-2">
          <h3 className="font-heading font-semibold text-lg text-slate group-hover:text-[#0EA5E9] transition-colors">
            {service.title}
          </h3>
          <p className="font-body text-gray-600 leading-relaxed">
            {service.description}
          </p>
        </div>

        <div className="pt-2">
          <button 
            onClick={() => onLearnMore && onLearnMore(service)}
            className="font-body font-medium text-[#0EA5E9] hover:text-[#0EA5E9]/80 text-sm flex items-center group"
          >
            Learn More
            <svg 
              className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;