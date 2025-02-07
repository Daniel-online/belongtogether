import beklubeLogo from "/BeKlube logo - 3031x1130.png";
import whiteLogo from "/BeKlube logo-white-3031x1130.png";

const Logo = () => {
  return (
    <div className=" rounded-lg relative w-auto h-20">
      <a href="/">
        {/* First Image (Base Logo) */}
        <div className="absolute inset-0">
          <img src={whiteLogo} className="w-full h-full" alt="Home" />
        </div>

        {/* Second Image (White Logo, Hidden by Default) */}
        <div className="absolute inset-0">
          <img src={beklubeLogo} className="w-full h-full" alt="Home" />
        </div>
      </a>
    </div>
  );
};

export default Logo;
