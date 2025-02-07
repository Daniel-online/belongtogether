import PropTypes from "prop-types";


const Hero = (
  { title,
    data,
    style,
    titleStyle,
    textStyle,
    bgImage }
) => {
  if (!data || data.length === 0) {
    return <div>No data available</div>;
  }

  // Dynamically set the background image using inline styles

  return (
    <div
      className={`${style}`}
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "400px",
        width: "100%",
      }} >
      {/* <h2>{title}</h2>
        {data[0].text}
        {data[0].subTitle} */}
      <h2 className={`${titleStyle}`}>{title}</h2>

      {data.map((item, index) => {
        return <span key={index}>
          <h4 className={`${titleStyle}`}>{item.subTitle}</h4>
          <p className={`${textStyle}`}>{item.text}</p>
        </span>
      }
      )}
    </div>
  )

}

Hero.propTypes = {
  title: PropTypes.string.isRequired,
  style: PropTypes.string, // Style should be a string for Tailwind classes
  data: PropTypes.arrayOf(
    PropTypes.shape({
      subTitle: PropTypes.string,
      text: PropTypes.string,
      imageUrl: PropTypes.string,
    }),
  ),
  textStyle: PropTypes.string,
  bgImage: PropTypes.string,
  titleStyle: PropTypes.string // Marked as required to ensure it's always provided

}
export default Hero
