
import PropTypes from "prop-types"
import TextBreaker from "./TextBreaker"
import Action from "../Buttons/Action"

const Cards = ({cardData, style, imageStyle}) => {
  return (
    <>
      {cardData.map(
        (card, index) => {
          return (
            <div key={index} className={`${style} transform hover:scale-105 drop-shadow-md transition delay-100 hover:drop-shadow-2xl p-4 rounded-xl flex flex-col items-center w-1/4 h-auto`}>
              <img
                className={imageStyle} 
                src={`${card.image}`}
                alt={card.alt} />
              <h3 className="font-bold" >
                {card.title}
              </h3>
              <h5 className="font-semibold">
                {card.subTitle}
              </h5>
              <TextBreaker 
              text={card.description}
              wordsPerParagraph={50}
              style={'text-indigo-700 indent-3 text-center italic'}
              />
              <Action
              id={''}
              title={''}
              style={''}
              buttonStyle={''}
              bgImage={''}
              href={''}
              />
            </div>
          )
        }
      )
      }
    </>
  )
}
Cards.propTypes={
  cardData: PropTypes.array,
  style: PropTypes.string,
  imageStyle: PropTypes.string
}
export default Cards
