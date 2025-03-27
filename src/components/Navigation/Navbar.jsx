import PropTypes from "prop-types"
import Logo from "./Logo"
import { IoMenu } from "react-icons/io5";
import { useState, useRef, useEffect } from "react";

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
    <nav id="navbar" className="flex items-center z-20 bg-cover border-b-2 border-yellow-600 h-[70px] top-0 sticky bg-violet-800 flex items-center px-4 md:px-8 lg:px-16 ">
      <div className=" flex items-center h-full" style={{ flex: 1 }}>

        <Logo />

      </div>

      <div ref={navLinksRef} className=" duration-500 flex items-center place-content-evenly px-px mr-6 lg:visible sm:invisible">
        <div className=" nav-links flex md:flex-row  mr-2 px-px text-white font-semibold rounded-lg place-content-evenly space-x-2 items-center " style={{ flex: 4 }}>
          {/* o mapping itera sobre o json "data" e acessa o label e link de cada objeto de "data" */}
          {data.map((item, index) => (
            <a key={index} href={item.link} className="px-3 py-2 font-semibold text-white rounded-lg transition hover:bg-yellow-500 hover:text-black hover:bg-opacity-70">
              {item.label}
            </a>)
          )}

        </div>

        <div className="flex items-center gap-6">
          <a href="/auth" className="ml-auto font-semibold text-white px-4 py-2 border border-white rounded-lg text-white transition hover:bg-yellow-500  hover:text-black">Login</a>
          <IoMenu className="text-white cursor-pointer md:hidden" onClick={onToggleMenu} name="menu" />
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
