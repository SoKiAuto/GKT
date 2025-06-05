import { useState } from 'react';

const BookingPopup = ({ onClose }) => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.phone) {
      alert('Please fill in all required fields.');
      return;
    }

    console.log('Booking inquiry submitted from popup:', form);
    alert(`Thank you, ${form.name}! Your booking inquiry has been sent.`);

    setForm({ name: '', email: '', phone: '', message: '' });
    onClose();
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 animate-fadeIn"
      style={{ animationDuration: '300ms' }}
    >
      <div className="bg-white rounded-3xl p-6 max-w-sm w-full shadow-lg shadow-yellow-200/50 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-orange-600 hover:text-orange-800 text-2xl font-bold"
          aria-label="Close popup"
          title="Close"
        >
          &times;
        </button>

        <h2 className="text-2xl font-extrabold mb-8 text-center text-orange-700">
          Booking Inquiry
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name */}
          <div>
            <label htmlFor="name" className="block mb-2 font-semibold text-orange-700">
              Full Name <span className="text-orange-500">*</span>
            </label>
            <input
              id="name"
              name="name"
              type="text"
              value={form.name}
              onChange={handleChange}
              required
              placeholder="Enter your full name"
              className="w-full rounded-lg border border-orange-300 px-3 py-2 placeholder-orange-300 text-orange-900 font-medium focus:outline-none focus:ring-4 focus:ring-orange-300 focus:border-orange-500 transition"
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block mb-2 font-semibold text-orange-700">
              Email Address <span className="text-orange-500">*</span>
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              required
              placeholder="Enter your email address"
              className="w-full rounded-lg border border-orange-300 px-3 py-2 placeholder-orange-300 text-orange-900 font-medium focus:outline-none focus:ring-4 focus:ring-orange-300 focus:border-orange-500 transition"
            />
          </div>

          {/* Phone */}
          <div>
            <label htmlFor="phone" className="block mb-2 font-semibold text-orange-700">
              Phone Number <span className="text-orange-500">*</span>
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              value={form.phone}
              onChange={handleChange}
              required
              placeholder="Enter your phone number"
              className="w-full rounded-lg border border-orange-300 px-3 py-2 placeholder-orange-300 text-orange-900 font-medium focus:outline-none focus:ring-4 focus:ring-orange-300 focus:border-orange-500 transition"
            />
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block mb-2 font-semibold text-orange-700">
              Additional Message (optional)
            </label>
            <textarea
              id="message"
              name="message"
              rows="3"
              value={form.message}
              onChange={handleChange}
              placeholder="Write any special requests or questions..."
              className="w-full rounded-lg border border-orange-300 px-3 py-2 placeholder-orange-300 text-orange-900 font-medium resize-none focus:outline-none focus:ring-4 focus:ring-orange-300 focus:border-orange-500 transition"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-yellow-600 to-orange-700 hover:from-yellow-700 hover:to-orange-800 text-white font-extrabold py-3 rounded-xl shadow-lg transition"
          >
            Submit Inquiry
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookingPopup;
