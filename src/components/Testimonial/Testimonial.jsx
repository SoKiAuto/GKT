// src/components/DirectorMessage/DirectorMessage.jsx
const Testimonial = () => {
  return (
    <section className="w-full px-4 sm:px-6 py-12 flex justify-center transition-colors">
      <div className="max-w-3xl w-full bg-neutral-950 dark:bg-white rounded-xl shadow-md p-8 md:p-12 border border-neutral-700 dark:border-gray-200 relative">
        <h2 className="text-3xl font-bold text-gray-100 dark:text-gray-800 mb-6 text-center">
          Message from Our Director
        </h2>

        <p className="text-gray-300 dark:text-gray-700 text-lg italic max-w-xl mx-auto mb-6">
          "At Gurukrupa Travels, our mission is to provide unparalleled travel experiences that connect you deeply with the beauty and culture of Kutch. We are committed to quality, comfort, and memorable journeys."
        </p>

        <div className="text-center">
          <p className="font-semibold text-orange-400 dark:text-orange-600 text-lg">— Guru Shah, Director</p>
          <p className="text-gray-400 dark:text-gray-500 text-sm mt-1">Founder & CEO, Gurukrupa Travels</p>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
