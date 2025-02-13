import PropTypes from "prop-types"
import Grid from "../Content/Grid"
import ScrollButton from "../Buttons/ScrollButton"
import Text from "../Content/Text"
import heroTestData from "./../../Data/heroTestData.json"

const Plataformas = (
  { id,
    style,
    scrollStyle,
    scrollRef,
    sideImage,
    // bgImage,
    imageAlt,
    imageStyle
  }) => {
  return (
    <div id={id} className={`${style}`}>

      <img src={sideImage} alt={imageAlt} className={imageStyle}></img>

      <Text
        style={''}
        data={heroTestData}
        title={''}
        titleStyle={''}
        spanStyle={''}
        subTitleStyle={''}
      ></Text>
      <Grid />
      <ScrollButton className={scrollStyle} href={scrollRef} />
    </div>
  )
}

Plataformas.propTypes = {
  id: PropTypes.string,
  style: PropTypes.string,
  bgImage: PropTypes.string,
  imageAlt: PropTypes.string,
  imageStyle: PropTypes.string,
  sideImage: PropTypes.string,
  scrollRef: PropTypes.string,
  scrollStyle: PropTypes.string,
}
export default Plataformas
