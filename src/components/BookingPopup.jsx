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

  const handleContentClick = (e) => {
    e.stopPropagation(); // Prevent closing when clicking inside
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-neutral-800 dark:bg-neutral-100 text-gray-200 dark:text-gray-900 p-8 rounded-3xl shadow-lg shadow-yellow-200/40 w-full max-w-md relative"
        onClick={handleContentClick}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-amber-400 dark:text-amber-600 hover:text-amber-500 dark:hover:text-amber-700 text-2xl font-bold"
          aria-label="Close popup"
          title="Close"
        >
          &times;
        </button>

        {/* Heading */}
        <h2 className="text-3xl font-extrabold mb-8 text-center bg-gradient-to-r from-amber-500 via-yellow-500 to-yellow-400 text-transparent bg-clip-text drop-shadow-md">
          Booking Inquiry
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Input Fields */}
          {[
            { id: 'name', label: 'Full Name', type: 'text' },
            { id: 'email', label: 'Email Address', type: 'email' },
            { id: 'phone', label: 'Phone Number', type: 'tel' },
          ].map(({ id, label, type }) => (
            <div key={id}>
              <label htmlFor={id} className="block mb-2 font-semibold text-amber-400 dark:text-amber-600">
                {label} <span className="text-amber-500">*</span>
              </label>
              <input
                id={id}
                name={id}
                type={type}
                value={form[id]}
                onChange={handleChange}
                required
                placeholder={`Enter your ${label.toLowerCase()}`}
                className="w-full rounded-lg border border-amber-300 dark:border-amber-400 px-4 py-3 placeholder-amber-300 dark:placeholder-amber-500 text-gray-900 dark:text-gray-900 font-medium focus:outline-none focus:ring-4 focus:ring-amber-400 dark:focus:ring-amber-500 focus:border-amber-500 transition"
              />
            </div>
          ))}

          {/* Message Field */}
          <div>
            <label htmlFor="message" className="block mb-2 font-semibold text-amber-400 dark:text-amber-600">
              Additional Message (optional)
            </label>
            <textarea
              id="message"
              name="message"
              rows="3"
              value={form.message}
              onChange={handleChange}
              placeholder="Write any special requests or questions..."
              className="w-full rounded-lg border border-amber-300 dark:border-amber-400 px-4 py-3 placeholder-amber-300 dark:placeholder-amber-500 text-gray-900 dark:text-gray-900 font-medium resize-none focus:outline-none focus:ring-4 focus:ring-amber-400 dark:focus:ring-amber-500 focus:border-amber-500 transition"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-amber-500 via-yellow-500 to-yellow-400 hover:from-amber-600 hover:to-yellow-500 text-white dark:text-neutral-950 font-extrabold py-3 rounded-xl shadow-lg transition"
          >
            Submit Inquiry
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookingPopup;
