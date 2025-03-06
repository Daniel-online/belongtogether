import PropTypes from "prop-types"
const Action = ({
    id,
    title,
    style,
    buttonStyle,
    bgImage,
    href
}) => {

    const backgroundStyle = bgImage ? { backgroundImage: `url(${bgImage})`, backgroundSize: 'cover', backgroundPosition: 'center' } : {};
    return (
        <div id={id} className={`relative flex items-center justify-center ${style}`} style={backgroundStyle}>
            <a href={href} className={`${buttonStyle} absolute bottom-20 left-1/2 `}>
                {title}
            </a>
        </div>
    )

}
Action.propTypes = {
    title: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
    style: PropTypes.string, // Style should be a string for Tailwind classes
    id: PropTypes.string,
    bgImage: PropTypes.string,
    buttonStyle: PropTypes.string,

}
export default Action
