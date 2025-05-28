import { useState, useEffect } from 'react';
import toursData from '../data/toursData';
import vehiclesData from '../data/vehiclesData';

const Booking = () => {
  const [tours, setTours] = useState([]);
  const [vehicles, setVehicles] = useState([]);

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.phone || !form.packageId) {
      alert('Please fill all required fields and select a package.');
      return;
    }

    let selectedPackage = null;
    if (form.packageType === 'tour') {
      selectedPackage = tours.find((t) => t.id === parseInt(form.packageId));
    } else {
      selectedPackage = vehicles.find((v) => v.id === parseInt(form.packageId));
    }

    const inquiryDetails = {
      customerName: form.name,
      email: form.email,
      phone: form.phone,
      packageType: form.packageType,
      packageTitle: selectedPackage ? selectedPackage.title || selectedPackage.type : 'Unknown',
      message: form.message,
    };

    console.log('Booking inquiry submitted:', inquiryDetails);

    alert(`Thank you, ${form.name}! Your booking inquiry for "${inquiryDetails.packageTitle}" has been sent.`);

    setForm({
      name: '',
      email: '',
      phone: '',
      packageType: 'tour',
      packageId: '',
      message: '',
    });
  };

  const packageOptions =
    form.packageType === 'tour'
      ? tours.map((t) => ({ id: t.id, label: t.title }))
      : vehicles.map((v) => ({ id: v.id, label: v.type }));

  return (
    <main className="pt-32 pb-20 bg-gradient-to-br from-pink-50 to-pink-100 min-h-screen text-pink-900 flex justify-center items-start">
      <section className="max-w-xl w-full bg-white rounded-3xl p-10 shadow-lg">
        <h1 className="text-4xl font-extrabold mb-12 text-center text-pink-700">
          Book Your Tour or Vehicle
        </h1>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Input Fields */}
          {[
            { id: 'name', label: 'Full Name', type: 'text', required: true },
            { id: 'email', label: 'Email Address', type: 'email', required: true },
            { id: 'phone', label: 'Phone Number', type: 'tel', required: true },
          ].map(({ id, label, type, required }) => (
            <div key={id}>
              <label htmlFor={id} className="block mb-2 font-semibold text-pink-700">
                {label} {required && <span className="text-pink-500">*</span>}
              </label>
              <input
                type={type}
                id={id}
                name={id}
                value={form[id]}
                onChange={handleChange}
                required={required}
                placeholder={`Enter your ${label.toLowerCase()}`}
                className="w-full rounded-lg border border-pink-300 px-4 py-3 placeholder-pink-300 text-pink-900 font-medium focus:outline-none focus:ring-4 focus:ring-pink-300 focus:border-pink-500 transition"
              />
            </div>
          ))}

          {/* Package Type */}
          <div>
            <label htmlFor="packageType" className="block mb-2 font-semibold text-pink-700">
              Package Type <span className="text-pink-500">*</span>
            </label>
            <select
              id="packageType"
              name="packageType"
              value={form.packageType}
              onChange={handleChange}
              className="w-full rounded-lg border border-pink-300 px-4 py-3 text-pink-900 font-medium focus:outline-none focus:ring-4 focus:ring-pink-300 focus:border-pink-500 transition"
            >
              <option value="tour">Tour Package</option>
              <option value="vehicle">Vehicle Rental</option>
            </select>
          </div>

          {/* Specific Package */}
          <div>
            <label htmlFor="packageId" className="block mb-2 font-semibold text-pink-700">
              Select Package <span className="text-pink-500">*</span>
            </label>
            <select
              id="packageId"
              name="packageId"
              value={form.packageId}
              onChange={handleChange}
              required
              className="w-full rounded-lg border border-pink-300 px-4 py-3 text-pink-900 font-medium focus:outline-none focus:ring-4 focus:ring-pink-300 focus:border-pink-500 transition"
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
            <label htmlFor="message" className="block mb-2 font-semibold text-pink-700">
              Additional Message (optional)
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              value={form.message}
              onChange={handleChange}
              placeholder="Write any special requests or questions..."
              className="w-full rounded-lg border border-pink-300 px-4 py-3 placeholder-pink-300 text-pink-900 font-medium resize-none focus:outline-none focus:ring-4 focus:ring-pink-300 focus:border-pink-500 transition"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-pink-500 to-pink-700 hover:from-pink-600 hover:to-pink-800 text-white font-extrabold py-4 rounded-xl shadow-lg transition"
          >
            Submit Booking Inquiry
          </button>
        </form>
      </section>
    </main>
  );
};

export default Booking;
