// src/pages/AllTours.jsx
import { useState, useEffect } from 'react';
import toursData from '../data/toursData';
import vehiclesData from '../data/vehiclesData';

const AllTours = () => {
  const [tours, setTours] = useState([]);
  const [vehicles, setVehicles] = useState([]);
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('');
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    packageType: 'tour',
    packageId: '',
    message: '',
  });

  useEffect(() => {
    setTours(toursData);
    setVehicles(vehiclesData);
  }, []);

  const showMessage = (text, type) => {
    setMessage(text);
    setMessageType(type);
    setTimeout(() => {
      setMessage('');
      setMessageType('');
    }, 5000);
  };

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.phone || !form.packageId) {
      return showMessage('Please fill all required fields.', 'error');
    }
    const pkg =
      form.packageType === 'tour'
        ? tours.find((t) => t.id === +form.packageId)
        : vehicles.find((v) => v.id === +form.packageId);

    showMessage(
      `Thank you, ${form.name}! Inquiry for "${
        pkg?.title || pkg?.type
      }" sent.`,
      'success'
    );

    setForm({
      name: '',
      email: '',
      phone: '',
      packageType: 'tour',
      packageId: '',
      message: '',
    });
  };

  const packageOptions = (form.packageType === 'tour' ? tours : vehicles).map(
    (p) => ({ id: p.id, label: p.title || p.type })
  );

  return (
    <main className="relative z-10 min-h-screen w-full px-4 sm:px-6 md:px-10 lg:px-20 py-10 sm:py-14 md:py-20 text-gray-800 bg-transparent overflow-x-hidden">
      <section className="max-w-[1400px] mx-auto">
        {/* Heading */}
       <h1 
  className="py-8 sm:py-12 md:py-14 text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-center leading-tight
  bg-gradient-to-r from-amber-500 to-orange-500 text-transparent bg-clip-text drop-shadow-md">
 Book Your Adventure
</h1>

        {/* Message Alert */}
        {message && (
          <div
            className={`mb-6 sm:mb-8 p-3 sm:p-4 rounded-lg text-center font-semibold text-sm sm:text-base
            ${
              messageType === 'success'
                ? 'bg-green-500 text-white'
                : 'bg-red-500 text-white'
            }`}
          >
            {message}
          </div>
        )}

        {/* Form */}
        <div className="mx-auto max-w-lg sm:max-w-xl bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-10 shadow-xl border border-amber-200">
          <h2 className="text-2xl sm:text-3xl font-extrabold mb-6 sm:mb-10 text-center text-amber-600 drop-shadow-md">
            Booking Inquiry Form
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
            {/* Input Fields */}
            {['name', 'email', 'phone'].map((id) => (
              <div key={id}>
                <label
                  htmlFor={id}
                  className="block mb-1 sm:mb-2 font-semibold text-amber-600 text-sm sm:text-base"
                >
                  {id.replace(/^\w/, (c) => c.toUpperCase())}
                  <span className="text-red-500">*</span>
                </label>
                <input
                  type={
                    id === 'email'
                      ? 'email'
                      : id === 'phone'
                      ? 'tel'
                      : 'text'
                  }
                  id={id}
                  name={id}
                  value={form[id]}
                  onChange={handleChange}
                  required
                  placeholder={`Enter your ${id}`}
                  className="w-full rounded-lg border border-amber-300 px-3 sm:px-4 py-2 sm:py-3 placeholder-amber-400 text-gray-800 font-medium focus:outline-none focus:ring-4 focus:ring-amber-400 transition"
                />
              </div>
            ))}

            {/* Package Type */}
            <div>
              <label
                htmlFor="packageType"
                className="block mb-1 sm:mb-2 font-semibold text-amber-600 text-sm sm:text-base"
              >
                Package Type <span className="text-red-500">*</span>
              </label>
              <select
                id="packageType"
                name="packageType"
                value={form.packageType}
                onChange={handleChange}
                className="w-full rounded-lg border border-amber-300 px-3 sm:px-4 py-2 sm:py-3 bg-white text-gray-800 focus:ring-4 focus:ring-amber-400 transition"
              >
                <option value="tour">Tour Package</option>
                <option value="vehicle">Vehicle Rental</option>
              </select>
            </div>

            {/* Package Selection */}
            <div>
              <label
                htmlFor="packageId"
                className="block mb-1 sm:mb-2 font-semibold text-amber-600 text-sm sm:text-base"
              >
                Select Package <span className="text-red-500">*</span>
              </label>
              <select
                id="packageId"
                name="packageId"
                value={form.packageId}
                onChange={handleChange}
                required
                className="w-full rounded-lg border border-amber-300 px-3 sm:px-4 py-2 sm:py-3 bg-white text-gray-800 focus:ring-4 focus:ring-amber-400 transition"
              >
                <option value="">-- Choose a package --</option>
                {packageOptions.map((opt) => (
                  <option key={opt.id} value={opt.id}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Additional Message */}
            <div>
              <label
                htmlFor="message"
                className="block mb-1 sm:mb-2 font-semibold text-amber-600 text-sm sm:text-base"
              >
                Additional Message (optional)
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                value={form.message}
                onChange={handleChange}
                placeholder="Any special requests..."
                className="w-full rounded-lg border border-amber-300 px-3 sm:px-4 py-2 sm:py-3 placeholder-amber-400 text-gray-800 font-medium resize-none focus:outline-none focus:ring-4 focus:ring-amber-400 transition bg-white"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-amber-500 to-yellow-400 hover:from-amber-600 hover:to-yellow-500 text-gray-900 font-extrabold py-3 sm:py-4 rounded-lg sm:rounded-xl shadow-lg hover:-translate-y-1 transition-transform text-sm sm:text-base"
            >
              Submit Booking Inquiry
            </button>
          </form>
        </div>
      </section>
    </main>
  );
};

export default AllTours;
