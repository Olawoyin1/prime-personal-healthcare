import React, { useState } from "react";

// import { Select, SelectContent, option, SelectTrigger, SelectValue } from '@/components/ui/select';
// import { useToast } from '@/hooks/use-toast';
import { ContactForm } from "../type";
import { MdSend } from "react-icons/md";

const BookingForm = () => {
  //   const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<ContactForm>({
    name: "",
    phone: "",
    email: "",
    serviceType: "",
    availability: "",
    message: "",
  });

  const handleinputChange = (field: keyof ContactForm, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // toast({
    //   title: "Consultation Request Received!",
    //   description: "We'll contact you within 24 hours to schedule your free consultation.",
    // });

    // Reset form
    setFormData({
      name: "",
      phone: "",
      email: "",
      serviceType: "",
      availability: "",
      message: "",
    });

    setIsSubmitting(false);
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-8">
      <div className="mb-6">
        <h3 className="font-heading font-bold text-2xl text-slate mb-2">
          Book Your Free Consultation
        </h3>
        <p className="font-body text-gray-600">
          Take the first step towards better care. Our team will contact you to
          discuss your needs.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label htmlFor="name" className="font-body font-medium text-slate">
              Full Name *
            </label>
            <input
              id="name"
              type="text"
              value={formData.name}
              onChange={(e) => handleinputChange("name", e.target.value)}
              required
              className="font-body"
              placeholder="Enter your full name"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="phone" className="font-body font-medium text-slate">
              Phone Number *
            </label>
            <input
              id="phone"
              type="tel"
              value={formData.phone}
              onChange={(e) => handleinputChange("phone", e.target.value)}
              required
              className="font-body"
              placeholder="(123) 456-7890"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="email" className="font-body font-medium text-slate">
            Email Address *
          </label>
          <input
            id="email"
            type="email"
            value={formData.email}
            onChange={(e) => handleinputChange("email", e.target.value)}
            required
            className="font-body"
            placeholder="your.email@example.com"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="serviceType" className="font-medium text-slate-700">
            Service Type of Interest
          </label>
          <select
            id="serviceType"
            name="serviceType"
            value={formData.serviceType}
            onChange={(e) => handleinputChange("serviceType", e.target.value)}
            className="w-full border border-gray-300 rounded-md px-4 py-2 text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="" disabled>
              Select a service type
            </option>
            <option value="in-home-care">In-Home Care Services</option>
            <option value="nursing">Professional Nursing</option>
            <option value="personal-support">Personal Support Services</option>
            <option value="specialized-care">Specialized Care Plans</option>
            <option value="companionship">Companionship Services</option>
            <option value="live-in">24/7 Live-In Care</option>
            <option value="post-hospital">Post-Hospital Discharge</option>
            <option value="rehabilitation">Rehabilitation Support</option>
            <option value="dementia-care">Alzheimer's & Dementia Care</option>
            <option value="consultation">General Consultation</option>
          </select>
        </div>

        <div className="space-y-2">
          <label
            htmlFor="availability"
            className="font-body font-medium text-slate"
          >
            Preferred Contact Time
          </label>
          <input
            id="availability"
            type="text"
            value={formData.availability}
            onChange={(e) => handleinputChange("availability", e.target.value)}
            className="font-body"
            placeholder="e.g., Weekday mornings, any time"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="message" className="font-body font-medium text-slate">
            Tell Us About Your Care Needs
          </label>
          <textarea
            id="message"
            value={formData.message}
            onChange={(e) => handleinputChange("message", e.target.value)}
            rows={4}
            className="font-body"
            placeholder="Please describe your specific care needs, any medical conditions, or questions you have..."
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-[#2563EB] hover:bg-[#2563EB]/90 text-white font-body font-medium py-3 text-lg group"
        >
          {isSubmitting ? (
            "Sending Request..."
          ) : (
            <>
              Request Free Consultation
              <MdSend className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </>
          )}
        </button>

        <p className="font-body text-xs text-gray-500 text-center">
          By submitting this form, you agree to our privacy policy. We'll never
          share your information.
        </p>
      </form>
    </div>
  );
};

export default BookingForm;
