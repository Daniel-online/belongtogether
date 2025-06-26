import PropTypes from "prop-types"
import Logo from "./Logo"
import { SiOnlyfans } from "react-icons/si";
import { FaInstagram } from "react-icons/fa";
import { SiGnuprivacyguard } from "react-icons/si";
import { useState, useRef, useEffect } from "react";

const instagramUrl = "https://www.instagram.com/djguicaldeira/"
const onlyFansUrl = "https://onlyfans.com/guidomingos"
const privacyUrl = "https://privacy.com.br/Profile/GuiCaldeira"

const Navbar = ({ data }) => {
  // console.log("navbar rendered", navbarData)


  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navLinksRef = useRef(null);

  useEffect(() => {
    console.log("Estado do menu atualizado:", isMenuOpen);
  }, [isMenuOpen]);

  function onToggleMenu() {
    setIsMenuOpen((prev) => !(prev));
    console.log("Estado do menu:", isMenuOpen);
    if (navLinksRef.current) {
      navLinksRef.current.classList.toggle("top-[9%]");
    }
  }
  return (
    <nav id="navbar" className="flex items-center z-20 bg-cover bg-opacity-50 bg-black border-b-2 border-red-600  h-[70px] top-0 flex items-start w-full px-4 md:px-8 lg:px-16 fixed">
      <div className=" flex items-center h-full" style={{ flex: 1 }}>

        <Logo />

      </div>

      <div ref={navLinksRef} className=" duration-500 flex  px-px mr-6 lg:visible sm:invisible">
        <div className=" nav-links   mr-2 px-px text-white font-semibold rounded-lg place-content-center space-x-2 items-center " style={{ flex: 4 }}>
          {/* o mapping itera sobre o json "data" e acessa o label e link de cada objeto de "data" */}
          {data.map((item, index) => (
            <a key={index} href={item.link} className="px-3 py-2 font-bold text-white rounded-lg transition hover:bg-red-500 hover:text-black hover:bg-opacity-90 ">
              {item.label}
            </a>)
          )}

        </div>

        <div className="flex items-center gap-6">
          {/* <a href="/auth" className="ml-auto font-semibold text-white px-4 py-2 border border-white rounded-lg text-white transition hover:bg-red-500  hover:text-white">Login</a> */}
          <a href={instagramUrl}>
            <FaInstagram className="text-white text-2xl hover:text-red-500"></FaInstagram>
          </a>
          <a href={onlyFansUrl}>
            <SiOnlyfans className="text-white text-2xl hover:text-red-500"></SiOnlyfans>
          </a>
          <a href={privacyUrl}>
            <SiGnuprivacyguard className="text-white text-2xl hover:text-red-500"></SiGnuprivacyguard>
          </a>
          {/* <IoMenu className="text-white cursor-pointer md:hidden" onClick={onToggleMenu} name="menu" /> */}
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
