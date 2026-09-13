import { CheckCircle, X, ArrowRight, Sparkles } from 'lucide-react';

interface ThankYouModalProps {
  isOpen: boolean;
  onClose: () => void;
  senderName: string;
  selectedPlan: string;
}

export default function ThankYouModal({
  isOpen,
  onClose,
  senderName,
  selectedPlan,
}: ThankYouModalProps) {
  if (!isOpen) return null;

  return (
    <div
      id="thank-you-modal-overlay"
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="thank-you-title"
    >
      <div
        id="thank-you-modal-card"
        className="bg-white rounded-3xl p-6 sm:p-8 max-w-lg w-full border border-slate-200 shadow-2xl relative animate-in zoom-in-95 fade-in duration-200 text-center"
      >
        {/* Close Button */}
        <button
          id="thank-you-close-btn"
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 rounded-full hover:bg-slate-100 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4F7CFF]"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Success Icon */}
        <div className="w-16 h-16 rounded-2xl bg-emerald-50 text-emerald-600 border border-emerald-200 mx-auto flex items-center justify-center mb-5 shadow-inner">
          <CheckCircle className="w-8 h-8" />
        </div>

        {/* Main Heading */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#4F7CFF]/10 text-[#4F7CFF] text-xs font-bold uppercase tracking-wider mb-2">
          <Sparkles className="w-3.5 h-3.5" />
          <span>ENQUIRY RECEIVED</span>
        </div>

        <h3
          id="thank-you-title"
          className="text-2xl sm:text-3xl font-extrabold text-[#0B1020] font-['Space_Grotesk'] mb-3"
        >
          Thank You, {senderName || 'there'}!
        </h3>

        {/* Message Required by prompt */}
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6 font-normal">
          Thank you for contacting Launchly! Your enquiry has been received. Our team will get back to you soon.
        </p>

        {/* Summary Details Badge */}
        {selectedPlan && (
          <div className="bg-slate-50 border border-slate-200/90 rounded-2xl p-3.5 mb-6 text-xs text-slate-600 flex items-center justify-between">
            <span className="font-medium">Selected Tier / Interest:</span>
            <span className="font-bold text-[#4F7CFF] bg-[#4F7CFF]/10 px-2.5 py-0.5 rounded-full">
              {selectedPlan}
            </span>
          </div>
        )}

        {/* Action Button */}
        <button
          id="thank-you-confirm-btn"
          type="button"
          onClick={onClose}
          className="w-full py-3.5 px-6 rounded-2xl text-sm font-semibold text-white bg-gradient-to-r from-[#4F7CFF] to-[#8B5CF6] hover:from-[#3f6be8] hover:to-[#7c4ee0] shadow-md transition-all active:scale-98 flex items-center justify-center gap-2"
        >
          <span>Back to Launchly</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
