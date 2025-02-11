import PropTypes from "prop-types";
import ScrollButton from "../Buttons/ScrollButton";

const Hero = (
  { 
    id,
    title,
    data,
    style,
    titleStyle,
    subTitleStyle,
    textStyle,
    hasButton,
    spanStyle,
    bgImage,
    scrollRef }
) => {
  const backgroundStyle = bgImage ? { backgroundImage: `url(${bgImage})`, backgroundSize: 'cover', backgroundPosition: 'center' } : {};

  if (!data || data.length === 0) {
    if (hasButton == true) {
      return (
        <>
          <div id={id} className={`${style}`+'max-w-screen'} style={backgroundStyle}>
            <h2 className={`${titleStyle}`}>{title}</h2>
          </div>

          <ScrollButton href={scrollRef} />
        </>
      );
    } else {
      return (
        <>
          <div id={id} className={`${style}`} style={backgroundStyle}>
            <h2 className={`${titleStyle}`}>{title}</h2>
          </div>
        </>)
    }
  }
  else {
    if (hasButton == true) {
      return (
        <div id={id} className={`${style}`} style={backgroundStyle}>
          <h2 className={`${titleStyle}`}>{title}</h2>
          {data.map((item, index) => {
            return <span className={spanStyle} key={index}>
              <h4 className={`${subTitleStyle}`}>{item.subTitle}</h4>
              <a href={item.link}>{item.button}</a>
            </span>
          }
          )}
          <ScrollButton href={scrollRef} />
        </div>
      )
    }
    else {
      return (
        <div id={id} className={`${style}`} style={backgroundStyle}>
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
  component: PropTypes.string,
  id: PropTypes.string,
  hasButton: PropTypes.bool,
  bgImage: PropTypes.string,
  scrollRef: PropTypes.string,
  spanStyle: PropTypes.string,
  subTitleStyle: PropTypes.string,
  titleStyle: PropTypes.string // Marked as required to ensure it's always provided

}
export default Hero
