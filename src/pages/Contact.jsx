import MapEmbed from '../components/MapEmbed';

const Contact = () => {
  return (
    <main className="min-h-screen bg-neutral-950 dark:bg-white flex justify-center items-start pt-24 pb-16 px-4 sm:px-6 md:px-10 lg:px-20 text-gray-200 dark:text-gray-900 transition-colors duration-500 ease-in-out">
      <section className="max-w-4xl w-full mx-auto">
        <h1 className="text-5xl font-extrabold mb-12 text-center bg-gradient-to-r from-amber-500 via-yellow-500 to-yellow-400 text-transparent bg-clip-text drop-shadow-md">
          Contact Gurukrupa Travels
        </h1>

        {/* Map on top */}
        <MapEmbed lat={23.076062} lng={70.121391} />

        {/* Contact details below */}
        <div className="bg-neutral-800 dark:bg-neutral-100 rounded-3xl shadow-lg mt-10 p-8 space-y-8 max-w-xl mx-auto">
          {/* Address */}
          <div className="flex items-start space-x-4">
            <span className="text-amber-400 dark:text-amber-600 text-3xl select-none">📍</span>
            <div>
              <h2 className="text-2xl font-bold text-amber-400 dark:text-amber-600 mb-1">Our Address</h2>
              <p className="text-gray-200 dark:text-gray-900 font-medium leading-snug">
                Ward 10, plot no. 95<br />
                Ward 10 AA, Vidyanagar<br />
                Gurukul Area, Rambaug Rd<br />
                Gandhidham, Gujarat 370201
              </p>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-center space-x-4">
            <span className="text-amber-400 dark:text-amber-600 text-3xl select-none">📞</span>
            <div>
              <h2 className="text-2xl font-bold text-amber-400 dark:text-amber-600 mb-1">Phone</h2>
              <p className="text-gray-200 dark:text-gray-900 font-medium">+91 98797 14494</p>
            </div>
          </div>

          {/* Hours */}
          <div className="flex items-center space-x-4">
            <span className="text-amber-400 dark:text-amber-600 text-3xl select-none">⏰</span>
            <div>
              <h2 className="text-2xl font-bold text-amber-400 dark:text-amber-600 mb-1">Hours</h2>
              <p className="text-gray-200 dark:text-gray-900 font-medium">Open 24 hours</p>
            </div>
          </div>

          {/* Get in Touch */}
          <div>
            <h2 className="text-2xl font-bold text-amber-400 dark:text-amber-600 mb-4">Get in Touch</h2>
            <ul className="space-y-3 text-amber-300 dark:text-amber-700 font-medium">
              <li className="flex items-center space-x-2">
                <span>📧</span>
                <a
                  href="mailto:info@gurukrupatravels.com"
                  className="underline hover:text-amber-500 dark:hover:text-amber-600 transition"
                >
                  info@gurukrupatravels.com
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <span>📱</span>
                <a
                  href="https://wa.me/919879714494"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-amber-500 dark:hover:text-amber-600 transition"
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
                  className="underline hover:text-amber-500 dark:hover:text-amber-600 transition"
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
                  className="underline hover:text-amber-500 dark:hover:text-amber-600 transition"
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
