import { Star, Quote, Sparkles } from 'lucide-react';
import { TESTIMONIALS_DATA } from '../data/mockData';

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-20 md:py-28 bg-white text-slate-900 border-t border-slate-200/70 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#4F7CFF]/10 text-[#4F7CFF] border border-[#4F7CFF]/20 text-xs font-bold tracking-wider uppercase mb-3">
            <span>COMMUNITY FEEDBACK</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B1020] tracking-tight font-['Space_Grotesk']">
            Loved by Teams That Get Things Done
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Discover why modern builders, technical leaders, and marketing teams rely on Launchly every single sprint.
          </p>
        </div>

        {/* 3 Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {TESTIMONIALS_DATA.map((item, index) => {
            const avatarColors = [
              'bg-gradient-to-tr from-[#4F7CFF] to-blue-600',
              'bg-gradient-to-tr from-[#8B5CF6] to-purple-600',
              'bg-gradient-to-tr from-emerald-500 to-teal-600',
            ];

            return (
              <div
                key={item.id}
                id={`testimonial-card-${item.id}`}
                className="group relative bg-[#F7F8FC] rounded-3xl p-8 border border-slate-200/80 shadow-sm hover:shadow-xl hover:-translate-y-1.5 hover:bg-white hover:border-[#4F7CFF]/40 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Star Rating & Quote Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-1 text-amber-400" aria-label={`${item.rating} out of 5 stars`}>
                      {[...Array(item.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <Quote className="w-8 h-8 text-slate-300 group-hover:text-[#4F7CFF]/30 transition-colors" />
                  </div>

                  {/* Quote text */}
                  <p className="text-slate-700 text-sm sm:text-base leading-relaxed font-normal mb-8 italic">
                    “{item.quote}”
                  </p>
                </div>

                {/* Author Info */}
                <div className="flex items-center gap-3 pt-4 border-t border-slate-200/60">
                  <div className={`w-11 h-11 rounded-full ${avatarColors[index % 3]} text-white font-bold text-sm flex items-center justify-center shadow-md ring-2 ring-white`}>
                    {item.avatarInitials}
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-[#0B1020]">
                      {item.name}
                    </h4>
                    <p className="text-xs text-slate-500">
                      {item.role} • <span className="font-medium text-slate-600">{item.companyName}</span>
                    </p>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
