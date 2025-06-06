import { 
  MdMedicalServices, 
  MdHouse, 
  MdSchedule,
  MdFavorite,
  MdHealthAndSafety,
  MdSupportAgent,
  MdElderly,
  MdLocalHospital,
  MdHealing,
  MdVideocam,
  MdSchool
} from 'react-icons/md';
import { DeliveryType, Service, Testimonial } from './type';

export const primaryServices: Service[] = [
  {
    id: 'in-home-care',
    title: 'In-Home Care Services',
    description: 'General assistance in day-to-day health-related tasks delivered by our compassionate caregivers in the comfort of your home.',
    detailedDescription: 'Our comprehensive in-home care services are designed to help you maintain independence while receiving the support you need. Our certified caregivers provide personalized assistance with daily activities, medication reminders, meal preparation, light housekeeping, and companionship. We work closely with your healthcare team to ensure continuity of care and peace of mind for you and your family. Our services are available on a flexible schedule - from a few hours a week to around-the-clock care.',
    features: [
      'Personalized care plans tailored to your specific needs',
      'Certified and background-checked caregivers',
      'Medication reminders and health monitoring',
      'Meal preparation and nutrition support',
      'Light housekeeping and organizing',
      'Transportation to appointments',
      'Companionship and emotional support',
      '24/7 on-call support and emergency response'
    ],
    icon: MdHouse,
    category: 'primary'
  },
  {
    id: 'nursing',
    title: 'Professional Nursing',
    description: 'Medication management, chronic condition care, wound care, and post-surgical assistance from licensed nursing professionals.',
    detailedDescription: 'Our licensed nursing professionals provide skilled medical care in the comfort of your home. Whether you\'re recovering from surgery, managing a chronic condition, or need specialized medical attention, our nurses deliver expert care with compassion and professionalism. We coordinate with your physicians to ensure seamless care transitions and optimal health outcomes.',
    features: [
      'Licensed RNs and LPNs with specialized training',
      'Medication administration and management',
      'Wound care and dressing changes',
      'IV therapy and injections',
      'Post-surgical care and monitoring',
      'Chronic disease management',
      'Health assessments and vital sign monitoring',
      'Care coordination with healthcare providers'
    ],
    icon: MdMedicalServices,
    category: 'primary'
  },
  {
    id: 'personal-support',
    title: 'Personal Support Services',
    description: 'Our trained personal support workers assist with daily living such as grooming, bathing, dressing, and mobility. Ideal for seniors or those recovering from surgery needing non-medical support at home.',
    detailedDescription: 'Our personal support workers are specially trained to provide dignified assistance with activities of daily living. We understand that maintaining personal hygiene and independence is crucial for your well-being and self-esteem. Our compassionate team helps you feel comfortable and respected while providing the support you need to live safely at home.',
    features: [
      'Assistance with bathing and personal hygiene',
      'Help with dressing and grooming',
      'Mobility assistance and fall prevention',
      'Toileting and incontinence care',
      'Feeding assistance and nutrition monitoring',
      'Transfer assistance (bed to chair, etc.)',
      'Exercise and physical activity support',
      'Overnight care and supervision'
    ],
    icon: MdSupportAgent,
    category: 'primary'
  }
];

export const specializedServices: Service[] = [
  {
    id: 'specialized-care',
    title: 'Specialized Care Plans',
    description: 'Tailored care plans for recovery, long-term illness, and chronic care needs designed specifically for your unique situation.',
    detailedDescription: 'Every individual has unique health needs and preferences. Our specialized care plans are developed in collaboration with you, your family, and your healthcare team to address your specific conditions and goals. We provide comprehensive assessments and create customized care strategies that evolve with your changing needs.',
    features: [
      'Comprehensive health and safety assessments',
      'Customized care plans developed with healthcare team',
      'Chronic condition management (diabetes, COPD, heart disease)',
      'Post-stroke rehabilitation support',
      'Cancer care support and symptom management',
      'Mental health and cognitive support',
      'Regular care plan reviews and adjustments',
      'Family education and support'
    ],
    icon: MdHealthAndSafety,
    category: 'specialized'
  },
  {
    id: 'companionship',
    title: 'Companionship Services',
    description: 'Friendly caregivers providing emotional support, social interaction, help with errands or light activities to enhance quality of life.',
    detailedDescription: 'Loneliness and social isolation can significantly impact health and well-being. Our companionship services provide meaningful social interaction, emotional support, and assistance with daily activities that help you stay connected to your community and maintain an active, fulfilling lifestyle.',
    features: [
      'Friendly conversation and emotional support',
      'Assistance with errands and shopping',
      'Accompaniment to social activities and appointments',
      'Light housekeeping and organization',
      'Meal planning and preparation',
      'Technology assistance and communication support',
      'Hobby and recreational activity support',
      'Pet care assistance'
    ],
    icon: MdFavorite,
    category: 'specialized'
  }
];

export const addonServices: Service[] = [
  {
    id: 'live-in-care',
    title: '24/7 Live-In Care',
    description: 'Round-the-clock professional care and support for those who need continuous assistance.',
    detailedDescription: 'For individuals requiring continuous support, our live-in care services provide peace of mind and comprehensive assistance around the clock. Our carefully selected caregivers live in your home and provide personalized care while maintaining your independence and dignity in familiar surroundings.',
    features: [
      'Carefully screened and trained live-in caregivers',
      'Continuous presence and immediate assistance',
      'Night-time safety monitoring and support',
      'Emergency response and medical alert systems',
      'Meal preparation and household management',
      'Medication management and health monitoring',
      'Companionship and emotional support',
      'Respite care for family caregivers'
    ],
    icon: MdSchedule,
    category: 'addon'
  },
  {
    id: 'discharge-assistance',
    title: 'Post-Hospital Discharge',
    description: 'Smooth transition from hospital to home with specialized discharge planning and care coordination.',
    detailedDescription: 'Returning home after a hospital stay can be overwhelming. Our discharge assistance program ensures a smooth, safe transition with comprehensive support during your recovery period. We coordinate with hospital staff and your healthcare team to provide continuity of care and prevent readmissions.',
    features: [
      'Hospital discharge planning and coordination',
      'Medication reconciliation and management',
      'Home safety assessments and modifications',
      'Follow-up appointment scheduling and transportation',
      'Recovery monitoring and progress tracking',
      'Equipment setup and training',
      'Nutrition planning and meal preparation',
      'Communication with healthcare providers'
    ],
    icon: MdLocalHospital,
    category: 'addon'
  },
  {
    id: 'rehabilitation',
    title: 'Rehabilitation Support',
    description: 'Assistance with recovery exercises, mobility training, and therapy compliance in your home environment.',
    detailedDescription: 'Recovery from injury, surgery, or illness requires consistent therapy and support. Our rehabilitation support services help you stay on track with your recovery goals by providing assistance with prescribed exercises, mobility training, and therapeutic activities in the comfort of your home.',
    features: [
      'Physical therapy exercise assistance',
      'Mobility and balance training support',
      'Occupational therapy activity reinforcement',
      'Speech therapy practice assistance',
      'Adaptive equipment training',
      'Progress monitoring and reporting',
      'Motivation and encouragement',
      'Coordination with rehabilitation professionals'
    ],
    icon: MdHealing,
    category: 'addon'
  },
  {
    id: 'dementia-care',
    title: 'Alzheimer\'s & Dementia Care',
    description: 'Specialized care for individuals with memory-related conditions, focusing on dignity and comfort.',
    detailedDescription: 'Caring for someone with Alzheimer\'s or dementia requires specialized knowledge, patience, and compassion. Our dementia care specialists are trained in evidence-based approaches to provide safe, dignified care that maximizes quality of life and supports both individuals and their families through this challenging journey.',
    features: [
      'Specialized dementia care training and certification',
      'Person-centered care approaches',
      'Cognitive stimulation and memory activities',
      'Behavior management and redirection techniques',
      'Safe environment modifications',
      'Family education and support groups',
      'Respite care for family caregivers',
      'End-of-life care planning and support'
    ],
    icon: MdElderly,
    category: 'addon'
  }
];

export const deliveryTypes: DeliveryType[] = [
  {
    id: 'in-person',
    title: 'In-Person Care',
    description: 'Direct, hands-on care delivered in the comfort and safety of your own home environment.',
    icon: MdHouse
  },
  {
    id: 'virtual',
    title: 'Virtual Care',
    description: 'Remote consultations, health monitoring, and support through secure video calls and digital platforms.',
    icon: MdVideocam
  },
  {
    id: 'hybrid',
    title: 'Hybrid Care',
    description: 'A combination of in-person visits and virtual check-ins for comprehensive, flexible healthcare.',
    icon: MdSchool
  }
];

export const testimonials: Testimonial[] = [
  {
    id: 'testimonial-1',
    name: 'Sarah Mitchell',
    relation: 'Daughter of care recipient',
    content: 'The compassionate care my mother received helped her maintain her independence while giving our family peace of mind. The caregivers became like family to us.',
    rating: 5
  },
  {
    id: 'testimonial-2',
    name: 'Robert Chen',
    relation: 'Post-surgery patient',
    content: 'After my hip replacement, the nursing care I received at home was exceptional. The team was professional, caring, and helped me recover faster than I expected.',
    rating: 5
  },
  {
    id: 'testimonial-3',
    name: 'Maria Rodriguez',
    relation: 'Wife of care recipient',
    content: 'The virtual care sessions were incredibly convenient and the hybrid approach meant my husband got the best of both worlds - technology and human touch.',
    rating: 5
  }
];