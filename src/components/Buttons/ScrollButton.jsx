import PropTypes from "prop-types";
import { MdOutlineArrowCircleDown } from "react-icons/md";
// import { HashLink } from 'react-router-hash-link';
const ScrollButton = (
{    href}
) => {
    return (
        <a className="z-0 rounded-full bottom-8 transition delay-50 " href={href}>
            <MdOutlineArrowCircleDown
                className=" click:animate-ping transition delay-100 size-24 text-yellow-600 hover:bg-opacity-30 hover:bg-yellow-400 animate-bounce rounded-full bg-violet-700 bg-cover"
            />
        </a>
    )

}
ScrollButton.propTypes={
    href: PropTypes.string
}
export default ScrollButton
