// src/pages/Contact.jsx
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Facebook,
  Globe,
  MessageCircle,
} from "lucide-react";
import MapEmbed from "../components/MapEmbed"; // Assuming you have this component
//import logo from "../assets/logos/named-logo.png"; // import logo

const Contact = () => {
  return (
    <main className="relative z-10 min-h-screen w-full px-4 sm:px-6 md:px-10 lg:px-20 py-16 md:py-20 text-gray-800 bg-transparent overflow-x-hidden">
      <section className="max-w-[1400px] mx-auto">
        {/* Main Heading */}
         <h1 
  className="py-8 sm:py-12 md:py-14 text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-center leading-tight
  bg-gradient-to-r from-amber-500 to-orange-500 text-transparent bg-clip-text drop-shadow-md">
  Get In Touch
</h1>

        {/* Contact Info Section */}
        <div className="mx-auto max-w-4xl bg-white rounded-3xl p-8 sm:p-10 shadow-xl border border-amber-200 mt-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-10 text-center text-amber-600 drop-shadow-md">
            Our Location & Details
          </h2>

          {/* Map Embed */}
          <MapEmbed
            lat={23.076062}
            lng={70.121391}
            className="rounded-2xl shadow-lg border border-amber-200 overflow-hidden"
          />

          {/* Spacer */}
          <div className="my-10"></div>

          {/* Contact Details Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Address */}
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                "Gurukrupa Travels, Ward 10, plot no. 95, Ward 10 AA, Vidyanagar, Gurukul Area, Rambaug Rd, Gandhidham, Gujarat 370201"
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start space-x-4 hover:underline text-gray-800"
            >
              <MapPin className="text-amber-600 w-7 h-7 mt-1" />
              <div>
                <h2 className="text-xl font-bold text-amber-600 mb-1">
                  Gurukrupa Travels
                </h2>
                <h3 className="text-lg font-semibold text-gray-700 mb-1">
                  Our Address
                </h3>
                <p className="text-gray-800 font-medium leading-snug">
                  Ward 10, plot no. 95
                  <br />
                  Ward 10 AA, Vidyanagar
                  <br />
                  Gurukul Area, Rambaug Rd
                  <br />
                  Gandhidham, Gujarat 370201
                </p>
              </div>
            </a>

            {/* Phone & Hours side by side */}
            <div className="grid sm:grid-cols-2 gap-6">
              {/* Phone */}
              <div className="flex items-start space-x-4">
                <Phone className="text-amber-600 w-6 h-6 mt-1" />
                <div>
                  <h2 className="text-xl font-bold text-amber-600 mb-1">Phone</h2>
                  <a
                    href="tel:+919879714494"
                    className="text-gray-800 font-medium hover:underline"
                  >
                    +91 98797 14494
                  </a>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start space-x-4">
                <Clock className="text-amber-600 w-6 h-6 mt-1" />
                <div>
                  <h2 className="text-xl font-bold text-amber-600 mb-1">Hours</h2>
                  <p className="text-gray-800 font-medium">Open 24 hours</p>
                </div>
              </div>
            </div>
          </div>

          {/* Get in Touch Section with Logo */}
          <div className="mt-12 flex flex-col md:flex-row items-center md:items-start justify-between gap-8">
            {/* Left: Contact Details */}
            <div className="flex-1">
              <h2 className="text-xl font-bold text-amber-600 mb-4">
                Get in Touch
              </h2>
              <ul className="space-y-3 text-amber-700 font-medium">
                <li className="flex items-center space-x-3">
                  <Mail className="w-5 h-5" />
                  <a
                    href="mailto:gurukrupatravels5555@gmail.com"
                    className="underline hover:text-amber-500 transition"
                  >
                    gurukrupatravels5555@gmail.com
                  </a>
                </li>
                <li className="flex items-center space-x-3">
                  <MessageCircle className="w-5 h-5" />
                  <div className="flex flex-col">
                    <a
                      href="https://wa.me/919879714494"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline hover:text-amber-500 transition"
                    >
                      +91 98797 14494 (WhatsApp)
                    </a>
                    <a
                      href="https://wa.me/919879679233"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline hover:text-amber-500 transition"
                    >
                      +91 98796 79233
                    </a>
                  </div>
                </li>
                <li className="flex items-center space-x-3">
                  <Facebook className="w-5 h-5" />
                  <a
                    href="https://facebook.com/gurukrupatravels"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-amber-500 transition"
                  >
                    /gurukrupatravels
                  </a>
                </li>
                <li className="flex items-center space-x-3">
                  <Globe className="w-5 h-5" />
                  <a
                    href="https://gurukrupatravels.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-amber-500 transition"
                  >
                    gurukrupatravels.com
                  </a>
                </li>
              </ul>
            </div>

            {/* Right: Logo */}
                     </div>
        </div>

        {/* Footer Text */}
        <p className="mt-10 text-sm text-right text-gray-400 font-medium pr-2">
          Crafted by{" "}
          <a
            href="https://www.thekandira.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-amber-500 font-semibold hover:underline"
          >
            Kandira ❤️
          </a>
        </p>

      </section>
    </main>
  );
};

export default Contact;
