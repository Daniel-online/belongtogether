import PropTypes from "prop-types";


const Hero = (
  { title,
    data,
    style,
    titleStyle,
    subTitleStyle,
    textStyle,
    hasButton,
    spanStyle,
    bgImage }
) => {
  const backgroundStyle = bgImage ? { backgroundImage: `url(${bgImage})`, backgroundSize: 'cover', backgroundPosition: 'center' } : {};
  
  if (!data || data.length === 0) {
    return (
      <>
        <div className={`${style}`} style={backgroundStyle}>
          <h2 className={`${titleStyle}`}>{title}</h2>
        </div>
      </>
    );
  }
  else {
    if (hasButton == true) {
      return (
        <div className={`${style}`}  style={backgroundStyle}>
          <h2 className={`${titleStyle}`}>{title}</h2>
          {data.map((item, index) => {
            return <span className={spanStyle} key={index}>
              <h4 className={`${subTitleStyle}`}>{item.subTitle}</h4>
              <a href={item.link}>{item.button}</a>
            </span>
          }
          )}
        </div>
      )
    }
    else {
      return (
        <div className={`${style}`}  style={backgroundStyle}>
          <h2 className={`${titleStyle}`}>{title}</h2>
          {data.map((item, index) => {
            return <span className={spanStyle} key={index}>
              <h4 className={`${subTitleStyle}`}>{item.subTitle}</h4>
              <p className={`${textStyle}`}>{item.text}</p>
            </span>
          }
          )}
        </div>
      )
    }
  }
}

Hero.propTypes = {
  title: PropTypes.string.isRequired,
  style: PropTypes.string, // Style should be a string for Tailwind classes
  data: PropTypes.arrayOf(
    PropTypes.shape({
      subTitle: PropTypes.string,
      text: PropTypes.string,
      button: PropTypes.string,
      link: PropTypes.string,
      imageUrlUrl: PropTypes.string,
    }),
  ),
  textStyle: PropTypes.string,
  hasButton: PropTypes.bool,
  bgImage: PropTypes.string,
  spanStyle: PropTypes.string,
  subTitleStyle: PropTypes.string,
  titleStyle: PropTypes.string // Marked as required to ensure it's always provided

}
export default Hero
