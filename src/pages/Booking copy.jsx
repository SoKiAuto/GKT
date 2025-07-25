import { useState, useEffect } from 'react';
import toursData from '../data/toursData'; // Assuming this path is correct
import vehiclesData from '../data/vehiclesData'; // Assuming this path is correct

const Booking = () => {
  const [tours, setTours] = useState([]);
  const [vehicles, setVehicles] = useState([]);
  const [message, setMessage] = useState(''); // State for custom message display
  const [messageType, setMessageType] = useState(''); // 'success' or 'error'

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

  // Function to show custom message
  const showMessage = (text, type) => {
    setMessage(text);
    setMessageType(type);
    setTimeout(() => {
      setMessage('');
      setMessageType('');
    }, 5000); // Message disappears after 5 seconds
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.phone || !form.packageId) {
      showMessage('Please fill all required fields and select a package.', 'error');
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

    showMessage(`Thank you, ${form.name}! Your booking inquiry for "${inquiryDetails.packageTitle}" has been sent.`, 'success');

    // Reset form
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
    // Added 'overflow-x-hidden' to prevent horizontal scroll/blank space
    <main className="min-h-screen px-4 sm:px-6 md:px-10 lg:px-20 py-16 md:py-20 text-gray-200 dark:text-gray-900 bg-transparent overflow-x-hidden">
      {/* Replicated inner section styling from Tours.jsx */}
      <section className="max-w-[1400px] mx-auto">
        {/* Replicated heading styling from Tours.jsx */}
        <h1 className="py-14 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-center mb-16 md:mb-20 leading-tight 
          bg-gradient-to-br from-amber-500 via-orange-400 to-yellow-300 
          text-transparent bg-clip-text drop-shadow-lg">
          Book Your <span className="text-white drop-shadow-md">Adventure</span> Today!
        </h1>

        {/* Custom Message Display */}
        {message && (
          <div className={`mb-8 p-4 rounded-lg text-center font-semibold transition-all duration-300 ease-in-out
            ${messageType === 'success' ? 'bg-green-500 text-white' : 'bg-red-500 text-white'}`}>
            {message}
          </div>
        )}

        {/* Form Container - keeping its original max-width for better readability of the form */}
        <div className="max-w-xl mx-auto bg-neutral-900/80 dark:bg-neutral-100/80 rounded-3xl p-8 sm:p-10 shadow-xl backdrop-blur-md border border-neutral-700 dark:border-neutral-300">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-10 text-center text-amber-400 dark:text-amber-600 drop-shadow-md">
            Booking Inquiry Form
          </h2>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Input Fields */}
            {[
              { id: 'name', label: 'Full Name', type: 'text', required: true },
              { id: 'email', label: 'Email Address', type: 'email', required: true },
              { id: 'phone', label: 'Phone Number', type: 'tel', required: true },
            ].map(({ id, label, type, required }) => (
              <div key={id}>
                <label htmlFor={id} className="block mb-2 font-semibold text-amber-400 dark:text-amber-600">
                  {label} {required && <span className="text-amber-500">*</span>}
                </label>
                <input
                  type={type}
                  id={id}
                  name={id}
                  value={form[id]}
                  onChange={handleChange}
                  required={required}
                  placeholder={`Enter your ${label.toLowerCase()}`}
                  className="w-full rounded-lg border border-amber-600 dark:border-amber-400 px-4 py-3 placeholder-amber-600 dark:placeholder-amber-400 text-gray-100 dark:text-gray-900 font-medium focus:outline-none focus:ring-4 focus:ring-amber-500 focus:border-amber-500 transition"
                />
              </div>
            ))}

            {/* Package Type */}
            <div>
              <label htmlFor="packageType" className="block mb-2 font-semibold text-amber-400 dark:text-amber-600">
                Package Type <span className="text-amber-500">*</span>
              </label>
              <select
                id="packageType"
                name="packageType"
                value={form.packageType}
                onChange={handleChange}
                className="w-full rounded-lg border border-amber-600 dark:border-amber-400 px-4 py-3 
                  bg-neutral-900 dark:bg-white 
                  text-gray-100 dark:text-gray-900 
                  placeholder-amber-600 dark:placeholder-amber-400 
                  font-medium focus:outline-none focus:ring-4 focus:ring-amber-500 
                  focus:border-amber-500 transition"
              >
                <option value="tour">Tour Package</option>
                <option value="vehicle">Vehicle Rental</option>
              </select>
            </div>

            {/* Specific Package */}
            <div>
              <label htmlFor="packageId" className="block mb-2 font-semibold text-amber-400 dark:text-amber-600">
                Select Package <span className="text-amber-500">*</span>
              </label>
              <select
                id="packageId"
                name="packageId"
                value={form.packageId}
                onChange={handleChange}
                required
                className="w-full rounded-lg border border-amber-600 dark:border-amber-400 px-4 py-3 
                  bg-neutral-900 dark:bg-white 
                  text-gray-100 dark:text-gray-900 
                  placeholder-amber-600 dark:placeholder-amber-400 
                  font-medium focus:outline-none focus:ring-4 focus:ring-amber-500 
                  focus:border-amber-500 transition"
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
              <label htmlFor="message" className="block mb-2 font-semibold text-amber-400 dark:text-amber-600">
                Additional Message (optional)
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                value={form.message}
                onChange={handleChange}
                placeholder="Write any special requests or questions..."
                className="w-full rounded-lg border border-amber-600 dark:border-amber-400 px-4 py-3 placeholder-amber-600 dark:placeholder-amber-400 text-gray-100 dark:text-gray-900 font-medium resize-none focus:outline-none focus:ring-4 focus:ring-amber-500 focus:border-amber-500 transition"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-amber-500 to-yellow-400 hover:from-amber-600 hover:to-yellow-500 text-gray-900 font-extrabold py-4 rounded-xl shadow-lg transition"
            >
              Submit Booking Inquiry
            </button>
          </form>
        </div>
      </section>
    </main>
  );
};

export default Booking;
