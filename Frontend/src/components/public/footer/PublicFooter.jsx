import {
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

const PublicFooter = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-12">
      {/* Main */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">

        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-3">
            Complete Bazaar
          </h2>
          <p className="text-sm leading-relaxed">
            Discover amazing products from trusted sellers. 
            Join Complete Bazaar and start shopping smarter today.
          </p>
        </div>

        {/* Explore */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Explore
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/" className="hover:text-white transition">
                Home
              </a>
            </li>
            <li>
              <a href="/login" className="hover:text-white transition">
                Login
              </a>
            </li>
            <li>
              <a href="/signup" className="hover:text-white transition">
                Signup
              </a>
            </li>
          </ul>
        </div>

        {/* Help */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Help
          </h3>
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
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Follow Us
          </h3>
          <div className="flex gap-4">
            <a className="p-2 bg-gray-800 rounded-full hover:bg-pink-600 transition">
              <FaInstagram />
            </a>
            <a className="p-2 bg-gray-800 rounded-full hover:bg-blue-600 transition">
              <FaLinkedinIn />
            </a>
            <a className="p-2 bg-gray-800 rounded-full hover:bg-sky-500 transition">
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-800 py-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Complete Bazaar. All rights reserved.
      </div>
    </footer>
  );
};

export default PublicFooter;
