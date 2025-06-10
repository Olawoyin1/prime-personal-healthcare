
import { Link } from 'react-router-dom';
import { Service } from '../type';
import { MdClose, MdCheckCircle } from 'react-icons/md';

interface ServiceModalProps {
  service: Service | null;
  isOpen: boolean;
  onClose: () => void;
}

const ServiceModal: React.FC<ServiceModalProps> = ({ service, isOpen, onClose }) => {
  if (!isOpen || !service) return null;

  const IconComponent = service.icon;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75" onClick={onClose}></div>
        
        <div className="inline-block w-full max-w-4xl p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
          <div className="flex items-start justify-between mb-6">
            <div className="flex items-center space-x-4">
              <div className="min-w-16 h-16 bg-[#0EA5E9]/10 rounded-xl flex items-center justify-center">
                <IconComponent className="h-8 w-8 text-[#0EA5E9]" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-xl text-slate">
                  {service.title}
                </h3>
                <p className="font-body text-sm text-gray-600 mt-1">
                  {service.description}
                </p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <MdClose className="h-6 w-6 text-gray-500" />
            </button>
          </div>

          <div className="space-y-6">
            {service.detailedDescription && (
              <div>
                <h4 className="font-heading font-semibold text-lg text-slate mb-3">
                  About This Service
                </h4>
                <p className="font-body text-gray-600 leading-relaxed">
                  {service.detailedDescription}
                </p>
              </div>
            )}

            {service.features && service.features.length > 0 && (
              <div>
                <h4 className="font-heading font-semibold text-lg text-slate mb-4">
                  What's Included
                </h4>
                <div className="grid md:grid-cols-2 gap-3">
                  {service.features.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <MdCheckCircle className="h-5 w-5 text-[#10B981] mt-0.5 flex-shrink-0" />
                      <span className="font-body text-gray-600 text-sm">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-gray-200">
              <Link to="/contact" className="flex-1 items-center justify-center text-center bg-[#0EA5E9] hover:bg-[#0EA5E9]/90 text-white text-sm font-body font-medium py-3 px-6 rounded transition-colors">
                Request This Service
              </Link>
              <Link to="/contact" className="flex-1 items-center justify-center text-center border border-[#0EA5E9] text-[#0EA5E9] text-sm hover:bg-[#0EA5E9] hover:text-white font-body font-medium py-3 px-6 rounded transition-colors">
                Schedule Consultation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceModal;