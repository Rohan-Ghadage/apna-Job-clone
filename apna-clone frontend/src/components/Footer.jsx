import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#160C2D] text-white py-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-10">
        {/* Left Section */}
        <div>
          <div className="flex items-center gap-4 mb-4">
            <img
              src="/src/assets/apna-logo.png" // Replace with your actual logo path
              alt="apna logo"
              className="w-14 h-14 rounded-xl"
            />
            <h2 className="text-lg font-semibold">Follow us on social media</h2>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 text-xl mb-6">
            <FaFacebookF className="hover:text-gray-300 cursor-pointer" />
            <FaLinkedinIn className="hover:text-gray-300 cursor-pointer" />
            <FaTwitter className="hover:text-gray-300 cursor-pointer" />
            <FaInstagram className="hover:text-gray-300 cursor-pointer" />
            <FaYoutube className="hover:text-gray-300 cursor-pointer" />
          </div>

          <hr className="border-gray-700 my-4" />

          {/* Footer Bottom Text */}
          <div className="text-sm text-gray-400 flex flex-wrap gap-4">
            <span>© 2025 Apna | All rights reserved</span>
            <Link to="/privacy" className="hover:underline">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:underline">
              Terms & Conditions
            </Link>
          </div>
        </div>

        {/* Right Section - App Download */}
        <div className="bg-white text-black rounded-xl p-6 w-full md:w-[300px]">
          <h3 className="text-lg font-semibold mb-1">Apply on the go</h3>
          <p className="text-sm mb-4">Get real time job updates on our App</p>

          <div className="flex items-center justify-between gap-4">
            <img
              src="/src/assets/logos/google-play.png" // Replace with your Google Play badge
              alt="Get it on Google Play"
              className="w-32"
            />
            <img
              src="/src/assets/logos/qr-code.png" // Replace with your QR Code image
              alt="QR Code"
              className="w-16 h-16"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
