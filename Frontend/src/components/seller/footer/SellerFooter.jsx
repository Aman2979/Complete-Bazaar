import {
  FaInstagram,
  FaLinkedinIn,
  FaChartLine,
  FaBoxOpen,
  FaHeadset,
} from "react-icons/fa";

const SellerFooter = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-12">
      {/* Main */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">

        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-3">
            Complete Bazaar Seller
          </h2>
          <p className="text-sm leading-relaxed">
            Manage your products, track performance, 
            and grow your business with confidence.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Seller Tools
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/" className="hover:text-white transition">
                Home
              </a>
            </li>
            <li>
              <a href="/add-Product" className="hover:text-white transition">
                Add Product
              </a>
            </li>
            <li>
              <a href="/sales-analytics" className="hover:text-white transition">
                Sales Analytics
              </a>
            </li>
          </ul>
        </div>

        {/* Policies */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Policies
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/seller-policy" className="hover:text-white transition">
                Seller Policy
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
            Community
          </h3>
          <div className="flex gap-4">
            <a className="p-2 bg-gray-800 rounded-full hover:bg-pink-600 transition">
              <FaInstagram />
            </a>
            <a className="p-2 bg-gray-800 rounded-full hover:bg-blue-600 transition">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-800 py-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Complete Bazaar Seller Portal.
      </div>
    </footer>
  );
};

export default SellerFooter;
