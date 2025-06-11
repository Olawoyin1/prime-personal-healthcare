import { useState } from "react";
import { ContactForm } from "../type";
import { MdSend } from "react-icons/md";
import axios from 'axios';
import { toast } from 'sonner';

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


// Inside your component:
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);

  try {
    const response = await axios.post(
      'https://pricepersonalhealthcare.onrender.com/api/contact/',
      formData
    );

    if (response.status === 200) {
      toast("Your request was sent successfully! We'll be in touch soon.");

      // Reset form
      setFormData({
        name: "",
        phone: "",
        email: "",
        serviceType: "",
        availability: "",
        message: "",
      });
    }
  } catch (error) {
    console.error("Submission error:", error);
    toast.error("Something went wrong. Please try again later.");
  }

  setIsSubmitting(false);
};


  return (
    <div className="bg-white rounded-xl shadow p-8">
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
      {/* Full Name */}
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
          className="font-body border-0 border-b border-[#0EA5E9] focus:border-[#10B981] focus:outline-none w-full text-sm placeholder:text-gray-400"
          placeholder="Enter your full name"
        />
      </div>

      {/* Phone */}
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
          className="font-body border-0 border-b border-[#0EA5E9] focus:border-[#10B981] focus:outline-none w-full text-sm placeholder:text-gray-400"
          placeholder="(123) 456-7890"
        />
      </div>
    </div>

    {/* Email */}
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
        className="font-body border-0 border-b border-[#0EA5E9] focus:border-[#10B981] focus:outline-none w-full text-sm placeholder:text-gray-400"
        placeholder="your.email@example.com"
      />
    </div>

    {/* Service Type */}
    <div className="space-y-2">
      <label htmlFor="serviceType" className="font-body font-medium text-slate">
        Service Type of Interest
      </label>
      <select
        id="serviceType"
        name="serviceType"
        value={formData.serviceType}
        onChange={(e) => handleinputChange("serviceType", e.target.value)}
        className="font-body border-0 border-b border-[#0EA5E9] focus:border-[#10B981] focus:outline-none w-full text-sm bg-white text-gray-700"
      >
        <option value="" disabled>Select a service type</option>
        <option value="in-home-care">In-Home Care Services</option>
        <option value="nursing">Professional Nursing</option>
        <option value="personal-support">Personal Support Services</option>
        <option value="specialized-care">Specialized Care Plans</option>
        <option value="companionship">Companionship Services</option>
        <option value="virtual-consultation">Virtual Consultation</option>
        <option value="post-hospital">Post-Hospital Discharge</option>
        <option value="rehabilitation">Rehabilitation Support</option>
        <option value="dementia-care">Alzheimer's & Dementia Care</option>
        <option value="consultation">General Consultation</option>
      </select>
    </div>

    {/* Availability */}
    <div className="space-y-2">
      <label htmlFor="availability" className="font-body font-medium text-slate">
        Preferred Contact Time
      </label>
      <input
        id="availability"
        type="text"
        value={formData.availability}
        onChange={(e) => handleinputChange("availability", e.target.value)}
        className="font-body border-0 border-b border-[#0EA5E9] focus:border-[#10B981] focus:outline-none w-full text-sm placeholder:text-gray-400"
        placeholder="e.g., Weekday mornings, any time"
      />
    </div>

    {/* Message */}
    <div className="space-y-2">
      <label htmlFor="message" className="font-body font-medium text-slate">
        Tell Us About Your Care Needs
      </label>
      <textarea
        id="message"
        value={formData.message}
        onChange={(e) => handleinputChange("message", e.target.value)}
        rows={4}
        className="font-body border border-gray-300 rounded-md focus:border-[#10B981] focus:ring-1 focus:ring-[#10B981] focus:outline-none w-full text-sm placeholder:text-gray-400 p-4"
        placeholder="Please describe your specific care needs, any medical conditions, or questions you have..."
      />
    </div>

    {/* Submit */}
    <button
      type="submit"
      disabled={isSubmitting}
      className="w-full flex items-center justify-center bg-[#0EA5E9] hover:bg-[#0EA5E9]/90 text-white font-body font-medium py-3 text-sm group rounded-md"
    >
      {isSubmitting ? (
        "Sending Request..."
      ) : (
        <>
          Request Free Consultation
          <MdSend className="ml-2 h-4 w-4 inline-block group-hover:translate-x-1 transition-transform" />
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
