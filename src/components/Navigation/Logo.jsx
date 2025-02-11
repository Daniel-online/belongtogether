// import beklubeLogo from "/BeKlube logo - 3031x1130.png";
import whiteLogo from "/BeKlube logo-white-3031x1130.png";

const Logo = () => {
  return (
    <div className=" relative w-[200px] md:w-[250px] lg:w-[300px] xl:w-[350px] h-full">
      <a href="/" className="block h-full">
        {/* Base Logo */}
        <img
          src={whiteLogo}
          className=" w-full h-auto object-contain absolute inset-0 transition-opacity duration-300 max-h-full"
          alt="Home"
        />
        
        {/* Hovered Logo
        <img
          src={beklubeLogo}
          className=" hover:bg-contain hover:bg-clip-content hover:bg-white  hover:rounded-lg w-full h-auto object-contain opacity-0 absolute inset-0 transition-opacity duration-300 hover:opacity-100 max-h-full"
          alt="Home"
        /> */}
      </a>
    </div>
  );
};

export default Logo;
