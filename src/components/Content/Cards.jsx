
import PropTypes from "prop-types"
import TextBreaker from "./TextBreaker"
import Action from "../Buttons/Action"

const Cards = ({ cardData, style, imageStyle, id, buttonTitle, buttonStyle, actionStyle, buttonImage, buttonRef }) => {
  return (
    <>
      {cardData.map(
        (card, index) => {
          return (
            <div key={index} className={`${style} transform hover:scale-105 drop-shadow-md transition delay-100 hover:drop-shadow-2xl rounded-xl flex flex-col h-full`}>
              <img
                className={imageStyle}
                src={`${card.image}`}
                alt={card.alt}
              />
              <div className="p-4 flex flex-col flex-grow">
                <h3 className="font-bold mb-2">{card.title}</h3>
                <h5 className="font-semibold mb-4 justify-center">{card.subTitle}</h5>

                <div className="flex-grow mb-4">
                  <TextBreaker
                    text={card.description}
                    wordsPerParagraph={50}
                    style={'text-white italic'}
                  />
                  <TextBreaker
                    text={card.benefits}
                    wordsPerParagraph={50}
                    style={'text-white font-semibold'}
                  />
                </div>

                <div className="mt-auto">
                  <Action
                    id={id}
                    title={buttonTitle}
                    style={actionStyle}
                    buttonStyle={buttonStyle}
                    bgImage={buttonImage}
                    href={buttonRef[index].link}
                  />
                </div>
              </div>
            </div>
          )
        }
      )
      }
    </>
  )
}
Cards.propTypes = {
  cardData: PropTypes.array,
  style: PropTypes.string,
  imageStyle: PropTypes.string,
  id: PropTypes.string,
  buttonTitle: PropTypes.string,
  buttonStyle: PropTypes.string,
  actionStyle: PropTypes.string,
  buttonImage: PropTypes.string,
  buttonRef: PropTypes.array
}
export default Cards
