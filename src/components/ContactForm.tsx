import React, { useState } from 'react';
import { 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  Loader2, 
  Mail, 
  Building, 
  User, 
  MessageSquare, 
  Layers, 
  Sparkles 
} from 'lucide-react';
import { PlanType } from '../types';
import ThankYouModal from './ThankYouModal';

interface ContactFormProps {
  selectedPlan: PlanType;
  onPlanChange: (plan: PlanType) => void;
}

export default function ContactForm({ selectedPlan, onPlanChange }: ContactFormProps) {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [message, setMessage] = useState('');

  // Validation errors
  const [errors, setErrors] = useState<{
    fullName?: string;
    email?: string;
    message?: string;
  }>({});

  // Form submission states
  const [isLoading, setIsLoading] = useState(false);
  const [submissionError, setSubmissionError] = useState<string | null>(null);
  const [showThankYou, setShowThankYou] = useState(false);
  const [submittedName, setSubmittedName] = useState('');

  const validate = () => {
    const newErrors: { fullName?: string; email?: string; message?: string } = {};

    if (!fullName.trim()) {
      newErrors.fullName = 'Full Name is required.';
    } else if (fullName.trim().length < 2) {
      newErrors.fullName = 'Name must be at least 2 characters.';
    }

    if (!email.trim()) {
      newErrors.email = 'Email Address is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      newErrors.email = 'Please enter a valid email address.';
    }

    if (!message.trim()) {
      newErrors.message = 'Please include a brief message or project details.';
    } else if (message.trim().length < 6) {
      newErrors.message = 'Message must be at least 6 characters.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmissionError(null);

    if (!validate()) {
      return;
    }

    setIsLoading(true);

    try {
      const payload = {
        access_key: 'ac7edcca-7151-49c8-a1bc-4805d01b1947',
        name: fullName.trim(),
        email: email.trim(),
        company: companyName.trim() || 'Not specified',
        plan: selectedPlan,
        message: message.trim(),
        from_name: 'Launchly Project Management Enquiry',
        subject: `New Launchly Enquiry from ${fullName.trim()} (${selectedPlan})`,
      };

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSubmittedName(fullName);
        setShowThankYou(true);
        // Clear the form fields after successful submission
        setFullName('');
        setEmail('');
        setCompanyName('');
        setMessage('');
        setErrors({});
      } else {
        setSubmissionError(
          data.message || 'We could not submit your enquiry at this moment. Please check your connection or try again.'
        );
      }
    } catch (err: any) {
      setSubmissionError(
        'A network connection error occurred while submitting your request. Please try again.'
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-20 md:py-28 bg-white text-slate-900 border-t border-slate-200/70 relative overflow-hidden"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#4F7CFF]/10 text-[#4F7CFF] border border-[#4F7CFF]/20 text-xs font-bold tracking-wider uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#8B5CF6]" />
            <span>START YOUR WORKSPACE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B1020] tracking-tight font-['Space_Grotesk']">
            Ready to Launch Your Next Project?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Tell us about your team and discover how Launchly can help you work smarter.
          </p>
        </div>

        {/* Contact Form Card */}
        <div className="bg-[#F7F8FC] rounded-3xl p-6 sm:p-10 lg:p-12 border border-slate-200/90 shadow-xl relative">
          
          {/* Submission status live region */}
          <div aria-live="polite" className="sr-only">
            {isLoading && 'Submitting your enquiry, please wait.'}
            {submissionError && `Submission error: ${submissionError}`}
            {showThankYou && 'Enquiry submitted successfully.'}
          </div>

          {/* Submission Error Banner */}
          {submissionError && (
            <div 
              id="form-error-banner"
              className="mb-8 p-4 rounded-2xl bg-rose-50 border border-rose-200 text-rose-700 flex items-start gap-3 text-sm animate-in fade-in"
            >
              <AlertCircle className="w-5 h-5 shrink-0 mt-0.5 text-rose-600" />
              <div>
                <p className="font-semibold">Submission failed</p>
                <p className="text-xs text-rose-600 mt-0.5">{submissionError}</p>
              </div>
            </div>
          )}

          <form id="launchly-enquiry-form" onSubmit={handleSubmit} noValidate className="space-y-6">
            
            {/* Row 1: Full Name & Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              {/* Full Name */}
              <div>
                <label 
                  htmlFor="full-name-input"
                  className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2"
                >
                  Full Name <span className="text-rose-500">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <User className="w-4 h-4" />
                  </div>
                  <input
                    id="full-name-input"
                    name="name"
                    type="text"
                    required
                    placeholder="Alex Miller"
                    value={fullName}
                    onChange={(e) => {
                      setFullName(e.target.value);
                      if (errors.fullName) setErrors((prev) => ({ ...prev, fullName: undefined }));
                    }}
                    className={`w-full pl-10 pr-4 py-3 bg-white text-slate-900 placeholder:text-slate-400 rounded-xl text-sm border focus:outline-none focus:ring-2 transition-all ${
                      errors.fullName
                        ? 'border-rose-400 focus:ring-rose-400/30'
                        : 'border-slate-300 focus:border-[#4F7CFF] focus:ring-[#4F7CFF]/20'
                    }`}
                  />
                </div>
                {errors.fullName && (
                  <p className="mt-1.5 text-xs text-rose-600 flex items-center gap-1 font-medium">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{errors.fullName}</span>
                  </p>
                )}
              </div>

              {/* Email Address */}
              <div>
                <label 
                  htmlFor="email-input"
                  className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2"
                >
                  Email Address <span className="text-rose-500">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <Mail className="w-4 h-4" />
                  </div>
                  <input
                    id="email-input"
                    name="email"
                    type="email"
                    required
                    placeholder="alex@example.com"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (errors.email) setErrors((prev) => ({ ...prev, email: undefined }));
                    }}
                    className={`w-full pl-10 pr-4 py-3 bg-white text-slate-900 placeholder:text-slate-400 rounded-xl text-sm border focus:outline-none focus:ring-2 transition-all ${
                      errors.email
                        ? 'border-rose-400 focus:ring-rose-400/30'
                        : 'border-slate-300 focus:border-[#4F7CFF] focus:ring-[#4F7CFF]/20'
                    }`}
                  />
                </div>
                {errors.email && (
                  <p className="mt-1.5 text-xs text-rose-600 flex items-center gap-1 font-medium">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{errors.email}</span>
                  </p>
                )}
              </div>

            </div>

            {/* Row 2: Company Name & Select Plan */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              {/* Company Name (Optional) */}
              <div>
                <label 
                  htmlFor="company-name-input"
                  className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2"
                >
                  Company or Team Name <span className="text-slate-400 font-normal lowercase">(optional)</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <Building className="w-4 h-4" />
                  </div>
                  <input
                    id="company-name-input"
                    name="company"
                    type="text"
                    placeholder="Acme Innovations"
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-white text-slate-900 placeholder:text-slate-400 rounded-xl text-sm border border-slate-300 focus:border-[#4F7CFF] focus:ring-2 focus:ring-[#4F7CFF]/20 focus:outline-none transition-all"
                  />
                </div>
              </div>

              {/* Select Plan */}
              <div>
                <label 
                  htmlFor="plan-select"
                  className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2"
                >
                  Select Plan
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <Layers className="w-4 h-4" />
                  </div>
                  <select
                    id="plan-select"
                    name="plan"
                    value={selectedPlan}
                    onChange={(e) => onPlanChange(e.target.value as PlanType)}
                    className="w-full pl-10 pr-4 py-3 bg-white text-slate-900 rounded-xl text-sm border border-slate-300 focus:border-[#4F7CFF] focus:ring-2 focus:ring-[#4F7CFF]/20 focus:outline-none transition-all appearance-none cursor-pointer"
                  >
                    <option value="Starter">Starter (₹499/month)</option>
                    <option value="Professional">Professional (₹999/month) — Most Popular</option>
                    <option value="Business">Business (₹1,999/month)</option>
                    <option value="General Enquiry">General Enquiry / Custom Team</option>
                  </select>
                </div>
              </div>

            </div>

            {/* Row 3: Message */}
            <div>
              <label 
                htmlFor="message-input"
                className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2"
              >
                Message <span className="text-rose-500">*</span>
              </label>
              <div className="relative">
                <div className="absolute top-3.5 left-3.5 pointer-events-none text-slate-400">
                  <MessageSquare className="w-4 h-4" />
                </div>
                <textarea
                  id="message-input"
                  name="message"
                  required
                  rows={4}
                  placeholder="Tell us about your team size, key challenges, or specific project requirements..."
                  value={message}
                  onChange={(e) => {
                    setMessage(e.target.value);
                    if (errors.message) setErrors((prev) => ({ ...prev, message: undefined }));
                  }}
                  className={`w-full pl-10 pr-4 py-3 bg-white text-slate-900 placeholder:text-slate-400 rounded-xl text-sm border focus:outline-none focus:ring-2 transition-all ${
                    errors.message
                      ? 'border-rose-400 focus:ring-rose-400/30'
                      : 'border-slate-300 focus:border-[#4F7CFF] focus:ring-[#4F7CFF]/20'
                  }`}
                />
              </div>
              {errors.message && (
                <p className="mt-1.5 text-xs text-rose-600 flex items-center gap-1 font-medium">
                  <AlertCircle className="w-3.5 h-3.5" />
                  <span>{errors.message}</span>
                </p>
              )}
            </div>

            {/* Front-end notice */}
            <p className="text-[11px] text-slate-500">
              * By submitting, you agree to receive workspace onboarding details. This is a front-end demonstration connected to Web3Forms for secure enquiry routing.
            </p>

            {/* Submit Button */}
            <div className="pt-2">
              <button
                id="contact-submit-button"
                type="submit"
                disabled={isLoading}
                className={`w-full py-4 px-8 rounded-2xl text-base font-semibold text-white bg-gradient-to-r from-[#4F7CFF] to-[#8B5CF6] hover:from-[#3f6be8] hover:to-[#7c4ee0] shadow-lg shadow-[#4F7CFF]/25 hover:shadow-xl hover:shadow-[#4F7CFF]/40 transition-all duration-200 flex items-center justify-center gap-2 ${
                  isLoading ? 'opacity-80 cursor-not-allowed' : 'active:scale-98'
                }`}
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span>Submitting Enquiry...</span>
                  </>
                ) : (
                  <>
                    <span>Send Enquiry</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>

          </form>

        </div>

      </div>

      {/* Thank You Pop-up Modal */}
      <ThankYouModal
        isOpen={showThankYou}
        onClose={() => setShowThankYou(false)}
        senderName={submittedName}
        selectedPlan={selectedPlan}
      />
    </section>
  );
}
