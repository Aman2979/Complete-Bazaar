import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-3">
            Complete Bazaar
          </h2>
          <p className="text-sm leading-relaxed">
            Your one-stop marketplace for all your needs. Browse our top
            products and find your next favorite - happy shopping!
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/" className="hover:text-white transition">
                Home
              </a>
            </li>
            <li>
              <a href="/cart" className="hover:text-white transition">
                Cart
              </a>
            </li>
            <li>
              <a href="/orders" className="hover:text-white transition">
                My Orders
              </a>
            </li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Support</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/help" className="hover:text-white transition">
                Help Center
              </a>
            </li>
            <li>
              <a href="/privacy" className="hover:text-white transition">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="/terms" className="hover:text-white transition">
                Terms & Conditions
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-white transition">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
          <div className="flex gap-4">
            <a
              href="#"
              className="p-2 rounded-full bg-gray-800 hover:bg-pink-600 transition"
              target="_blank"
            >
              <FaInstagram />
            </a>

            <a
              href="#"
              className="p-2 rounded-full bg-gray-800 hover:bg-blue-700 transition"
              target="_blank"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="#"
              className="p-2 rounded-full bg-gray-800 hover:bg-sky-500 transition"
              target="_blank"
            >
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 py-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Complete Bazaar. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
