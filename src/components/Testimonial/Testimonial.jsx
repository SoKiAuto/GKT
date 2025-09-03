import { Quote } from 'lucide-react';

const Testimonial = () => {
  return (
    <section className="relative w-full px-4 sm:px-6 py-16 flex justify-center">
      {/* Subtle animated gradient ring */}
      <div className="absolute inset-0 flex justify-center items-center pointer-events-none z-0">
        <div className="w-[400px] h-[400px] bg-gradient-to-tr from-primary/10 to-light rounded-full blur-3xl opacity-40 animate-pulse" />
      </div>

      <div className="relative z-10 max-w-3xl w-full bg-light/80 backdrop-blur-md rounded-3xl shadow-xl border border-primary/10 transition-all">
        <div className="p-8 md:p-12 text-center">
          {/* Quote Icon */}
          <Quote className="w-10 h-10 text-primary mx-auto mb-4 opacity-80" />

          {/* Heading */}
          <h2 className="text-3xl font-bold text-accent mb-6 tracking-tight drop-shadow">
            Message from Our Director
          </h2>

          {/* Quote Text */}
          <p className="text-primary text-lg italic max-w-xl mx-auto mb-6 leading-relaxed">
            "At <span className="font-semibold text-accent">Gurukrupa Travels</span>, our mission is to provide unparalleled travel experiences that connect you deeply with the beauty and culture of Kutch. We are committed to quality, comfort, and memorable journeys."
          </p>

          {/* Author Info */}
          <div>
            <p className="font-semibold text-accent text-lg">— Mr. Mulshanker V. Vedant, Founder</p>
            <p className="font-semibold text-accent text-lg">— Mr. Rajesh M. Vedant, CEO</p>
            <p className="text-primary/70 text-sm mt-1">Founder & CEO, Gurukrupa Travels</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
