
export interface Service {
  id: string;
  title: string;
  description: string;
  detailedDescription?: string;
  features?: string[];
  icon: React.ComponentType<{ className?: string }>;
  category: 'primary' | 'specialized' | 'addon';
}

export interface DeliveryType {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

export interface Testimonial {
  id: string;
  name: string;
  relation: string;
  content: string;
  rating: number;
}

export interface ContactForm {
  name: string;
  phone: string;
  email: string;
  serviceType: string;
  availability: string;
  message: string;
}