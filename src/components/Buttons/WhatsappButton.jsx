import { FaWhatsapp } from "react-icons/fa";
import PropTypes from "prop-types";
import Button from "./Button"

const openChat = ({
  url
}) => {
  window.location.replace(url);
}

const whatsappClass = " z-10 flex bottom-5 right-5 justify-center items-center fixed bg-green-500 text-white w-12 h-12 px-2 py-2 rounded-full";
const WhatsappButton = ({url}) => {
  return (
    <Button
      className={whatsappClass}
      onClick={openChat(url)}
      disabled={false}
      icon={<FaWhatsapp style={{
        fontSize: '30px'
      }} />}
    >
    </Button>
  )
}
WhatsappButton.propTypes={
  url: PropTypes.string
}

export default WhatsappButton
