// src/pages/AllTours.jsx (Booking page styled like Tours.jsx)
import { useState, useEffect } from 'react';
import toursData from '../data/toursData';
import vehiclesData from '../data/vehiclesData';

const AllTours = () => {
  const [tours, setTours] = useState([]);
  const [vehicles, setVehicles] = useState([]);
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('');
  const [form, setForm] = useState({
    name: '', email: '', phone: '', packageType: 'tour',
    packageId: '', message: ''
  });

  useEffect(() => {
    setTours(toursData);
    setVehicles(vehiclesData);
  }, []);

  const showMessage = (text, type) => {
    setMessage(text);
    setMessageType(type);
    setTimeout(() => setMessage('') || setMessageType(''), 5000);
  };

  const handleChange = (e) => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.phone || !form.packageId) {
      return showMessage('Please fill all required fields.', 'error');
    }
    const pkg = form.packageType === 'tour'
      ? tours.find(t => t.id === +form.packageId)
      : vehicles.find(v => v.id === +form.packageId);

    showMessage(
      `Thank you, ${form.name}! Inquiry for "${pkg?.title || pkg?.type}" sent.`,
      'success'
    );

    setForm({
      name: '', email: '', phone: '',
      packageType: 'tour', packageId: '', message: ''
    });
  };

  const packageOptions = (form.packageType === 'tour'
    ? tours : vehicles).map(p => ({ id: p.id, label: p.title || p.type }));

  return (
   <main className=" relative z-10 min-h-screen w-full px-4 sm:px-6 md:px-10 lg:px-20 py-16 md:py-20 text-gray-800 bg-transparent overflow-x-hidden">      <section className="max-w-[1400px] mx-auto">
<h1 className="py-14 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-center mb-16 md:mb-20 leading-tight
bg-gradient-to-br from-amber-500 via-orange-400 to-yellow-300
text-transparent bg-clip-text drop-shadow-lg">
Book Your
<span
  className="relative inline-block px-2 py-1 mx-2 font-bangers
  bg-gradient-to-br from-gray-300 to-gray-400 bg-clip-text text-transparent 
  drop-shadow-[0_2px_6px_rgba(0,0,0,0.7)] animate-glitch-text"
  style={{
    WebkitTextStroke: '1.5px black',
    textStroke: '1.5px black', // for other browsers
  }}
>
  Adventure
</span>

Today!
</h1>

        {message && (
          <div className={`mb-8 p-4 rounded-lg text-center font-semibold
            ${messageType === 'success' ? 'bg-green-500 text-white' : 'bg-red-500 text-white'}`}>
            {message}
          </div>
        )}

        <div className="mx-auto max-w-xl bg-white rounded-3xl p-8 sm:p-10 shadow-xl border border-amber-200">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-10 text-center text-amber-600 drop-shadow-md">
            Booking Inquiry Form
          </h2>

          <form onSubmit={handleSubmit} className="space-y-8">
            {['name','email','phone'].map(id => (
              <div key={id}>
                <label htmlFor={id} className="block mb-2 font-semibold text-amber-600">
                  {id.replace(/^\w/, c => c.toUpperCase())}
                  <span className="text-red-500">*</span>
                </label>
                <input
                  type={id === 'email' ? 'email' : (id === 'phone' ? 'tel' : 'text')}
                  id={id}
                  name={id}
                  value={form[id]}
                  onChange={handleChange}
                  required
                  placeholder={`Enter your ${id}`}
                  className="w-full rounded-lg border border-amber-300 px-4 py-3 placeholder-amber-400 text-gray-800 font-medium focus:outline-none focus:ring-4 focus:ring-amber-400 transition"
                />
              </div>
            ))}

            <div>
              <label htmlFor="packageType" className="block mb-2 font-semibold text-amber-600">
                Package Type <span className="text-red-500">*</span>
              </label>
              <select
                id="packageType" name="packageType"
                value={form.packageType} onChange={handleChange}
                className="w-full rounded-lg border border-amber-300 px-4 py-3 bg-white text-gray-800 focus:ring-4 focus:ring-amber-400 transition">
                <option value="tour">Tour Package</option>
                <option value="vehicle">Vehicle Rental</option>
              </select>
            </div>

            <div>
              <label htmlFor="packageId" className="block mb-2 font-semibold text-amber-600">
                Select Package <span className="text-red-500">*</span>
              </label>
              <select
                id="packageId" name="packageId"
                value={form.packageId} onChange={handleChange} required
                className="w-full rounded-lg border border-amber-300 px-4 py-3 bg-white text-gray-800 focus:ring-4 focus:ring-amber-400 transition">
                <option value="">-- Choose a package --</option>
                {packageOptions.map(opt => (
                  <option key={opt.id} value={opt.id}>{opt.label}</option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block mb-2 font-semibold text-amber-600">
                Additional Message (optional)
              </label>
              <textarea
                id="message" name="message" rows="4"
                value={form.message} onChange={handleChange}
                placeholder="Any special requests..."
                className="w-full rounded-lg border border-amber-300 px-4 py-3 placeholder-amber-400 text-gray-800 font-medium resize-none focus:outline-none focus:ring-4 focus:ring-amber-400 transition bg-white"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-amber-500 to-yellow-400 hover:from-amber-600 hover:to-yellow-500 text-gray-900 font-extrabold py-4 rounded-xl shadow-lg hover:-translate-y-1 transition-transform">
              Submit Booking Inquiry
            </button>
          </form>
        </div>
      </section>
    </main>
  );
};

export default AllTours;
