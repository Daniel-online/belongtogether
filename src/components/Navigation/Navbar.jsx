import PropTypes from "prop-types"
import { FaInstagram, FaBars, FaTimes } from "react-icons/fa";
import { useState, useRef, useEffect } from "react";
import Logo from "./Logo.jsx";
import privacyLogo from "./../../../src/assets/logos/orange_privacy_logo.png";
import onlyfansLogo from "./../../../src/assets/OnlyFans_Logo_Full_White.svg"

const instagramUrl = "https://www.instagram.com/djguicaldeira/"
const onlyFansUrl = "https://onlyfans.com/guidomingos"
const privacyUrl = "https://privacy.com.br/Profile/GuiCaldeira"

const Navbar = ({ data }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navLinksRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navLinksRef.current && !navLinksRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Close menu when window is resized to desktop size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav id="navbar" className="flex items-center z-50 bg-cover bg-opacity-50 bg-black border-b-2 border-red-600 h-[70px] top-0 w-full px-4 md:px-8 lg:px-16 fixed">
      <div className="flex items-center h-full" style={{ flex: 1 }}>
        <Logo />
      </div>

      {/* Desktop Menu - Hidden on mobile */}
      <div className="hidden md:flex items-center px-px mr-6">
        <div className="nav-links mr-2 px-px text-white font-semibold rounded-lg place-content-center space-x-2 items-center" style={{ flex: 4 }}>
          {data.map((item, index) => (
            <a key={index} href={item.link} className="px-3 py-2 font-bold text-white rounded-lg transition hover:bg-red-500 hover:text-black hover:bg-opacity-90">
              {item.label}
            </a>)
          )}
        </div>

        <div className="flex items-center gap-6">
          <a href={instagramUrl}>
            <FaInstagram className="text-white text-2xl hover:text-red-500" />
          </a>
          <a href={onlyFansUrl}>
            <img src={onlyfansLogo} alt="OnlyFans Logo" className="w-full h-auto" />
          </a>
          <a href={privacyUrl}>
            <img src={privacyLogo} alt="Privacy Logo" className="w-1/2 h-auto" />
          </a>
        </div>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden flex items-center">
        <button
          onClick={toggleMenu}
          className="text-white text-2xl focus:outline-none"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu - Hidden by default, shown when menu is open */}
      <div
        ref={navLinksRef}
        className={`
          fixed top-[70px] left-0 w-full bg-black bg-opacity-95 border-b-2 border-red-600
          transition-all duration-300 ease-in-out
          md:hidden
          ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}
        `}
      >
        <div className="flex flex-col p-4">
          {/* Navigation Links */}
          <div className="flex flex-col space-y-4 mb-6">
            {data.map((item, index) => (
              <a
                key={index}
                href={item.link}
                className="px-4 py-3 font-bold text-white rounded-lg transition hover:bg-red-500 hover:text-black hover:bg-opacity-90 text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Social Media Links */}
          <div className="flex justify-center items-center gap-6 border-t border-gray-700 pt-4">
            <a href={instagramUrl} onClick={() => setIsMenuOpen(false)}>
              <FaInstagram className="text-white text-2xl hover:text-red-500" />
            </a>
            <a href={onlyFansUrl} onClick={() => setIsMenuOpen(false)}>
              <img src={onlyfansLogo} alt="OnlyFans Logo" className="w-8 h-auto" />
            </a>
            <a href={privacyUrl} onClick={() => setIsMenuOpen(false)}>
              <img src={privacyLogo} alt="Privacy Logo" className="w-8 h-auto" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}

Navbar.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
    })
  ),
};

export default Navbar