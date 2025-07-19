import { Mail, Phone, MapPin, Clock, Facebook, Globe, MessageCircle } from "lucide-react";
import MapEmbed from "../components/MapEmbed";

const Contact = () => {
  return (
    <main className="min-h-screen flex justify-center items-start pt-24 pb-16 px-4 sm:px-6 md:px-10 lg:px-20 text-gray-200 dark:text-gray-900 transition-colors duration-500 ease-in-out">
      <section className="py-14 max-w-4xl w-full mx-auto">
        <h1 className="text-5xl font-extrabold mb-12 text-center bg-gradient-to-r from-amber-500 via-yellow-500 to-yellow-400 text-transparent bg-clip-text drop-shadow-md">
          Contact Gurukrupa Travels
        </h1>

        {/* Map on top */}
        <MapEmbed lat={23.076062} lng={70.121391} />

        {/* Contact Card */}
      {/* Contact Card */}
<div className="bg-neutral-800/70 dark:bg-white/70 backdrop-blur-md rounded-3xl shadow-xl mt-10 p-8 max-w-6xl mx-auto border border-neutral-700 dark:border-gray-300">
  <div className="grid md:grid-cols-2 gap-8">
    {/* Address */}
  <a
  href="https://maps.app.goo.gl/bRacynH7rdjZvSHF8"
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-start space-x-4 hover:underline"
>
  <MapPin className="text-amber-400 dark:text-amber-600 w-7 h-7 mt-1" />
  <div>
    <h2 className="text-xl font-bold text-amber-400 dark:text-amber-600 mb-1">
      Gurukrupa Travels
    </h2>
    <h3 className="text-lg font-semibold text-gray-300 dark:text-gray-800 mb-1">
      Our Address
    </h3>
    <p className="text-gray-200 dark:text-gray-900 font-medium leading-snug">
      Ward 10, plot no. 95<br />
      Ward 10 AA, Vidyanagar<br />
      Gurukul Area, Rambaug Rd<br />
      Gandhidham, Gujarat 370201
    </p>
  </div>
</a>



    {/* Phone & Hours side by side in a nested grid */}
    <div className="grid sm:grid-cols-2 gap-6">
      {/* Phone */}
      <div className="flex items-start space-x-4">
        <Phone className="text-amber-400 dark:text-amber-600 w-6 h-6 mt-1" />
        <div>
          <h2 className="text-xl font-bold text-amber-400 dark:text-amber-600 mb-1">Phone</h2>
          <p className="text-gray-200 dark:text-gray-900 font-medium">+91 98797 14494</p>
        </div>
      </div>

      {/* Hours */}
      <div className="flex items-start space-x-4">
        <Clock className="text-amber-400 dark:text-amber-600 w-6 h-6 mt-1" />
        <div>
          <h2 className="text-xl font-bold text-amber-400 dark:text-amber-600 mb-1">Hours</h2>
          <p className="text-gray-200 dark:text-gray-900 font-medium">Open 24 hours</p>
        </div>
      </div>
    </div>
  </div>

  {/* Get in Touch Section */}
  <div className="mt-8">
    <h2 className="text-xl font-bold text-amber-400 dark:text-amber-600 mb-4">Get in Touch</h2>
    <ul className="space-y-3 text-amber-300 dark:text-amber-700 font-medium">
      <li className="flex items-center space-x-3">
        <Mail className="w-5 h-5" />
        <a href="mailto:info@gurukrupatravels.com" className="underline hover:text-amber-500 dark:hover:text-amber-600 transition">
          info@gurukrupatravels.com
        </a>
      </li>
      <li className="flex items-center space-x-3">
        <MessageCircle className="w-5 h-5" />
        <a href="https://wa.me/919879714494" target="_blank" rel="noopener noreferrer" className="underline hover:text-amber-500 dark:hover:text-amber-600 transition">
          +91 98797 14494 (WhatsApp)
        </a>
      </li>
      <li className="flex items-center space-x-3">
        <Facebook className="w-5 h-5" />
        <a href="https://facebook.com/gurukrupatravels" target="_blank" rel="noopener noreferrer" className="underline hover:text-amber-500 dark:hover:text-amber-600 transition">
          /gurukrupatravels
        </a>
      </li>
      <li className="flex items-center space-x-3">
        <Globe className="w-5 h-5" />
        <a href="https://gurukrupatravels.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-amber-500 dark:hover:text-amber-600 transition">
          gurukrupatravels.com
        </a>
      </li>
    </ul>
  </div>
</div>



        {/* Footer Text */}
        <p className="mt-10 text-sm text-right text-gray-400 dark:text-gray-700 font-medium pr-2">
          Crafted by <span className="text-amber-500 font-semibold">Kandira ❤️</span>
        </p>
      </section>
    </main>
  );
};

export default Contact;
