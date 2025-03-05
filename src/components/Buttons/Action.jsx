import PropTypes from "prop-types"
const Action = ({
    id,
    title,
    style,
    buttonStyle,
    bgImage
}) => {

    const backgroundStyle = bgImage ? { backgroundImage: `url(${bgImage})`, backgroundSize: 'cover', backgroundPosition: 'center' } : {};
    return (
        <div id={id} className={`${style}`} style={backgroundStyle}>
            <button className={`${buttonStyle}`}>
                {title}
            </button>
        </div>
    )

}
Action.propTypes = {
    title: PropTypes.string.isRequired,
    style: PropTypes.string, // Style should be a string for Tailwind classes
    id: PropTypes.string,
    bgImage: PropTypes.string,
    buttonStyle: PropTypes.string,

}
export default Action
