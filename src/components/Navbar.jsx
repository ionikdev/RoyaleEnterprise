import { useState } from "react";
import styles from "../globalStyle";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-black shadow-md">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <img src={logo} alt="coreNS" className="w-[30%]" />
          </div>
          <div className="hidden lg:flex lg:items-center lg:justify-end lg:flex-1">
            <Link to="/" className={`${styles.lgNavbarlink}`}>
              Home
            </Link>
            <a href="#" className={`${styles.lgNavbarlink}`}>
              Api Docs
            </a>
            <a href="#" className={`${styles.lgNavbarlink}`}>
              Twitter
            </a>
            <a href="#" className={`${styles.lgNavbarlink}`}>
              Telegram
            </a>
            <a href="#" className={`${styles.lgNavbarlink}`}>
              Discord
            </a>
          </div>
          <div></div>
          <div className="items-center">
            <button
              type="button"
              className="text-gray-600 lg:hidden mt-4 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-gray-700"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className="lg:hidden text-center">
          <Link
            to="/"
            className="block text-gray-600 hover:text-gray-900 px-3 py-2
             rounded-md text-base font-medium "
          >
            Home
          </Link>
          <Link to="/" className={`${styles.smNavbarlink}`}>
            {" "}
            Api Docs
          </Link>
          <a href="#" className={`${styles.smNavbarlink}`}>
            Twitter
          </a>
          <a href="#" className={`${styles.smNavbarlink}`}>
            Telegram
          </a>
          <a href="#" className={`${styles.smNavbarlink}`}>
            Discord
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
