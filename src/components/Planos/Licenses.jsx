import PropTypes from "prop-types"
import { HiOutlineStar } from "react-icons/hi2";
import { GoRuby } from "react-icons/go";

const Licenses = ({ licenseData, licenseStyle }) => {
  if(licenseData.premium==true){
    return (
      <div>
        {licenseData.map((item, index) => {
          <>
            <span key={index}
              className={`${item.size}+${licenseStyle}`}
            >{item.license}</span>
            <div className={item.iconStyle}>
              <GoRuby/>
            </div>
          </>
        })}
      </div>
    )
  }else{
    return (
      <div>
        {licenseData.map((item, index) => {
          <>
            <span key={index}
              className={`${item.size}+${licenseStyle}`}
            >{item.license}</span>
            <div className={item.iconStyle}>
              <HiOutlineStar/>
            </div>
          </>
        })}
      </div>
    )
  }

  
}
Licenses.propTypes = {
  licenseData: PropTypes.array,
  licenseStyle: PropTypes.string
}

export default Licenses
