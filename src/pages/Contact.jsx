import MapEmbed from '../components/MapEmbed';

const Contact = () => {
  return (
    <main className="pt-32 pb-20 bg-gradient-to-br from-yellow-50 to-orange-100 min-h-screen text-orange-900">
      <section className="max-w-4xl mx-auto px-6">
        <h1 className="text-5xl font-extrabold mb-12 text-center bg-gradient-to-r from-yellow-600 via-orange-600 to-orange-700 text-transparent bg-clip-text">
          Contact Gurukrupa Travels
        </h1>

        {/* Map on top */}
        <MapEmbed lat={23.076062} lng={70.121391} />

        {/* Contact details below */}
        <div className="bg-white rounded-3xl shadow-lg mt-10 p-8 space-y-6 max-w-xl mx-auto">
          {/* Address */}
          <div className="flex items-start space-x-4">
            <span className="text-orange-500 text-3xl select-none">📍</span>
            <div>
              <h2 className="text-2xl font-bold text-orange-700 mb-1">Our Address</h2>
              <p className="text-orange-900 font-medium leading-snug">
                Ward 10, plot no. 95<br />
                Ward 10 AA, Vidyanagar<br />
                Gurukul Area, Rambaug Rd<br />
                Gandhidham, Gujarat 370201
              </p>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-center space-x-4">
            <span className="text-orange-500 text-3xl select-none">📞</span>
            <div>
              <h2 className="text-2xl font-bold text-orange-700 mb-1">Phone</h2>
              <p className="text-orange-900 font-medium">+91 98797 14494</p>
            </div>
          </div>

          {/* Hours */}
          <div className="flex items-center space-x-4">
            <span className="text-orange-500 text-3xl select-none">⏰</span>
            <div>
              <h2 className="text-2xl font-bold text-orange-700 mb-1">Hours</h2>
              <p className="text-orange-900 font-medium">Open 24 hours</p>
            </div>
          </div>

          {/* Get in Touch */}
          <div>
            <h2 className="text-2xl font-bold text-orange-700 mb-4">Get in Touch</h2>
            <ul className="space-y-3 text-orange-800 font-medium">
              <li className="flex items-center space-x-2">
                <span>📧</span>
                <a href="mailto:info@gurukrupatravels.com" className="underline hover:text-orange-600">
                  info@gurukrupatravels.com
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <span>📱</span>
                <a
                  href="https://wa.me/919879714494"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-orange-600"
                >
                  +91 98797 14494
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <span>💬</span>
                <a
                  href="https://facebook.com/gurukrupatravels"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-orange-600"
                >
                  /gurukrupatravels
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <span>🌐</span>
                <a
                  href="https://gurukrupatravels.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-orange-600"
                >
                  gurukrupatravels.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
