import PropTypes from "prop-types";
import { MdOutlineArrowCircleDown } from "react-icons/md";
// import { HashLink } from 'react-router-hash-link';
const ScrollButton = (
    { href }
) => {

    const handleClick = (e) => {
        e.preventDefault(); // Prevent default anchor behavior
        const element = document.getElementById(href);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" , block:"start"});
        } else {
            console.warn(`Element with id "${href}" not found.`);
        }
    };

    return (
        <a className="z-0 rounded-full bottom-8 transition " href={`#${href}`} onClick={handleClick}>
            <MdOutlineArrowCircleDown
                className=" click:animate-ping transition  size-24 text-yellow-600 hover:bg-opacity-30 hover:bg-yellow-400 animate-bounce rounded-full bg-violet-700 bg-cover"
            />
        </a>
    )

}
ScrollButton.propTypes = {
    href: PropTypes.string
}
export default ScrollButton
